import fs from 'node:fs';
import path from 'node:path';

export interface TemplateValidationResult {
  isValid: boolean;
  templateCount: number;
  errors: string[];
}

export interface DocumentValidationResult {
  isValid: boolean;
  errors: string[];
}

export interface WorkspaceValidationReport {
  isValid: boolean;
  checkedFiles: number;
  totalTemplates: number;
  errors: Record<string, string[]>;
}

export interface OutputBundleValidationResult {
  isValid: boolean;
  htmlFile: string | null;
  errors: string[];
}

interface PatternRule {
  label: string;
  patterns: RegExp[];
}

const REQUIRED_PLACEHOLDERS = ['[TONE]', '[AUDIENCE]', '[BRAND VOICE]', '[PRODUCT NAME]'] as const;

const REQUIRED_FORMAT_AXES: PatternRule[] = [
  { label: 'Relación de aspecto', patterns: [/relacion de aspecto|aspect ratio/] },
  { label: 'Resolución / DPI', patterns: [/resolucion|dpi|ppi/] },
  { label: 'Márgenes de seguridad', patterns: [/margen(es)? de seguridad|safe zone|zona(s)? segura/] },
  { label: 'Sangrado', patterns: [/sangrado|bleed/] },
  { label: 'Distancia de lectura y legibilidad', patterns: [/distancia de lectura|legibilidad/] },
];

const REQUIRED_PATTERN_RULES: PatternRule[] = [
  { label: 'Jerarquía visual', patterns: [/jerarquia/] },
  { label: 'Foco único principal', patterns: [/1 foco|un foco|unico foco|foco principal|punto focal/] },
  { label: 'Máximo 3 niveles de jerarquía', patterns: [/3 niveles|tres niveles/] },
  { label: 'Estructura de retícula', patterns: [/reticula/] },
  { label: 'Paleta de color y contraste real', patterns: [/color/, /contraste/] },
  { label: 'Tono de copy y tipografía', patterns: [/copy|tono/, /tipografi/] },
  { label: 'Reglas Anti-IA específicas', patterns: [/anti-ia|anti ia/] },
];

const REQUIRED_ANTI_AI_RULES: PatternRule[] = [
  { label: 'Prohibición de simetrías robóticas', patterns: [/simetria/] },
  { label: 'Prohibición de degradados genéricos', patterns: [/degradado/] },
  { label: 'Prohibición de saturación artificial', patterns: [/saturacion/] },
  { label: 'Prohibición de poses/expresiones plásticas', patterns: [/pose|expresion(es)? plastica|piel.*plastica|plastica/] },
  { label: 'Prohibición de exceso de texto', patterns: [/exceso de texto|demasiado texto|sobrecarga de texto/] },
  { label: 'Prohibición de clichés visuales', patterns: [/cliche/] },
  { label: 'Prohibición de copy vacío', patterns: [/copy vacio|texto vacio|adjetivos huecos/] },
];

const REQUIRED_GRILL_ME_PHASES: PatternRule[] = [
  { label: 'Fase 1: Emoción y gancho en 2 segundos', patterns: [/2 segundos|dos segundos/, /emocion|sentir|impacto/] },
  { label: 'Fase 2: Público, contexto y acción', patterns: [/publico|audiencia/, /contexto|canal|accion/] },
  { label: 'Fase 3: Jerarquía (1 foco, máx 3 niveles)', patterns: [/jerarquia/, /foco|3 niveles|tres niveles/] },
  { label: 'Fase 4: Formato y dimensiones', patterns: [/formato/, /dimension/] },
  { label: 'Fase 5: Auditoría Anti-IA', patterns: [/anti-ia|anti ia/] },
];

const FORMAT_FILES = [
  'formats/_index.md',
  'formats/redes-sociales.md',
  'formats/web-banners.md',
  'formats/impresion-editorial.md',
  'formats/gran-formato-ooh.md',
] as const;

const PATTERN_FILES = [
  'patterns/editorial-tipografico.md',
  'patterns/fotografia-organica.md',
  'patterns/ilustracion-artesanal.md',
  'patterns/minimalismo-funcional.md',
  'patterns/collage-textura-fisica.md',
  'patterns/brutalismo-controlado.md',
] as const;

const TEMPLATE_SECTORS = [
  'retail-producto',
  'eventos-cultura',
  'servicios-b2b',
  'gastronomia',
  'tecnologia',
  'causas-sociales',
  'lanzamientos',
] as const;

/** Normalizes accents and case so Spanish keyword checks avoid false negatives. */
function normalizeText(input: string): string {
  return input
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function checkRules(normalizedContent: string, rules: PatternRule[], prefix = ''): string[] {
  const errors: string[] = [];
  for (const rule of rules) {
    const matchesAll = rule.patterns.every((pattern) => pattern.test(normalizedContent));
    if (!matchesAll) {
      errors.push(`${prefix}Falta criterio obligatorio: ${rule.label}`);
    }
  }
  return errors;
}

/**
 * Validates a sector template catalog markdown document against the template contract.
 */
export function validateTemplateCatalog(markdownContent: string, categoryName?: string): TemplateValidationResult {
  const prefix = categoryName ? `[${categoryName}] ` : '';
  const blocks = markdownContent
    .split(/^(?=###\s+Plantilla\b)/im)
    .map((chunk) => chunk.trim())
    .filter((chunk) => /^###\s+Plantilla\b/i.test(chunk));

  const errors: string[] = [];
  if (blocks.length < 3) {
    errors.push(`${prefix}Se requieren al menos 3 plantillas; se encontraron ${blocks.length}.`);
  }

  const requiredFieldPatterns: Array<{ label: string; regex: RegExp }> = [
    { label: '- **Nombre**:', regex: /^-\s+\*\*nombre\*\*:/im },
    { label: '- **Ideal para**:', regex: /^-\s+\*\*ideal para\*\*:/im },
    { label: '- **Dimensiones recomendadas**:', regex: /^-\s+\*\*dimensiones recomendadas\*\*:/im },
    { label: '- **Retícula y foco**:', regex: /^-\s+\*\*reticula y foco\*\*:/im },
    { label: '- **Regla anti-IA clave**:', regex: /^-\s+\*\*regla anti-ia clave\*\*:/im },
  ];

  const requiredDetailRules: PatternRule[] = [
    { label: 'Guía de color y contraste', patterns: [/guia de color|color y contraste/, /contraste/] },
    { label: 'Tono de copy', patterns: [/tono de copy|tono y voz/] },
    { label: 'Ejemplo de uso', patterns: [/ejemplo de uso/] },
  ];

  blocks.forEach((block, index) => {
    const label = `${prefix}Plantilla #${index + 1}`;
    const normalizedBlock = normalizeText(block);

    for (const field of requiredFieldPatterns) {
      if (!field.regex.test(normalizedBlock)) {
        errors.push(`${label}: falta el campo obligatorio "${field.label}".`);
      }
    }

    errors.push(...checkRules(normalizedBlock, requiredDetailRules, `${label}: `));

    for (const placeholder of REQUIRED_PLACEHOLDERS) {
      if (!block.includes(placeholder)) {
        errors.push(`${label}: falta el marcador obligatorio ${placeholder}.`);
      }
    }
  });

  return {
    isValid: errors.length === 0,
    templateCount: blocks.length,
    errors,
  };
}

/**
 * Validates a technical format specification document (`formats/*.md`).
 */
export function validateFormatSpec(markdownContent: string): DocumentValidationResult {
  const normalized = normalizeText(markdownContent);
  const errors = checkRules(normalized, REQUIRED_FORMAT_AXES);
  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validates a visual design pattern specification (`patterns/*.md`).
 */
export function validatePatternSpec(markdownContent: string): DocumentValidationResult {
  const normalized = normalizeText(markdownContent);
  const errors = checkRules(normalized, REQUIRED_PATTERN_RULES);
  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Validates the Anti-AI constitution and `/grill-me` interview workflow documents.
 */
export function validateCoreRulesAndWorkflow(antiAiContent: string, grillMeContent: string): DocumentValidationResult {
  const errors: string[] = [
    ...checkRules(normalizeText(antiAiContent), REQUIRED_ANTI_AI_RULES, '[anti-ai-aesthetic] '),
    ...checkRules(normalizeText(grillMeContent), REQUIRED_GRILL_ME_PHASES, '[grill-me-anuncio] '),
  ];

  for (const placeholder of REQUIRED_PLACEHOLDERS) {
    if (!grillMeContent.includes(placeholder)) {
      errors.push(`[grill-me-anuncio] Falta el marcador obligatorio ${placeholder}.`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

function readRequiredFile(rootDir: string, relPath: string, errors: Record<string, string[]>): string | null {
  const fullPath = path.join(rootDir, relPath);
  if (!fs.existsSync(fullPath)) {
    errors[relPath] = [`Archivo faltante: ${relPath}`];
    return null;
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  if (content.trim().length === 0) {
    errors[relPath] = [`Archivo vacío: ${relPath}`];
    return null;
  }
  return content;
}

/**
 * Audits the complete `Generador_Anuncios` workspace structure and document contracts.
 */
export function validateWorkspace(rootDir: string): WorkspaceValidationReport {
  const errors: Record<string, string[]> = {};
  let checkedFiles = 0;
  let totalTemplates = 0;

  const readmeContent = readRequiredFile(rootDir, 'README.md', errors);
  checkedFiles += 1;
  if (readmeContent !== null && readmeContent.trim().length < 10) {
    errors['README.md'] = ['README.md demasiado corto o sin índice.'];
  }

  const antiAiPath = 'rules/anti-ai-aesthetic.md';
  const grillMePath = 'workflows/grill-me-anuncio.md';
  const antiAiContent = readRequiredFile(rootDir, antiAiPath, errors);
  const grillMeContent = readRequiredFile(rootDir, grillMePath, errors);
  checkedFiles += 2;

  if (antiAiContent !== null && grillMeContent !== null) {
    const coreResult = validateCoreRulesAndWorkflow(antiAiContent, grillMeContent);
    if (!coreResult.isValid) {
      errors[`${antiAiPath} + ${grillMePath}`] = coreResult.errors;
    }
  }

  for (const relPath of FORMAT_FILES) {
    checkedFiles += 1;
    const content = readRequiredFile(rootDir, relPath, errors);
    if (content !== null) {
      const result = validateFormatSpec(content);
      if (!result.isValid) {
        errors[relPath] = result.errors;
      }
    }
  }

  for (const relPath of PATTERN_FILES) {
    checkedFiles += 1;
    const content = readRequiredFile(rootDir, relPath, errors);
    if (content !== null) {
      const result = validatePatternSpec(content);
      if (!result.isValid) {
        errors[relPath] = result.errors;
      }
    }
  }

  for (const sector of TEMPLATE_SECTORS) {
    const relPath = `templates/${sector}/catalogo-plantillas.md`;
    checkedFiles += 1;
    const content = readRequiredFile(rootDir, relPath, errors);
    if (content !== null) {
      const result = validateTemplateCatalog(content, sector);
      totalTemplates += result.templateCount;
      if (!result.isValid) {
        errors[relPath] = result.errors;
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    checkedFiles,
    totalTemplates,
    errors,
  };
}

/**
 * Valida que una subcarpeta de cartel en `output/<nombre>/` sea un bundle autónomo válido.
 */
export function validateOutputBundle(bundleDir: string): OutputBundleValidationResult {
  const errors: string[] = [];
  if (!fs.existsSync(bundleDir) || !fs.statSync(bundleDir).isDirectory()) {
    return {
      isValid: false,
      htmlFile: null,
      errors: [`El directorio no existe: ${bundleDir}`],
    };
  }

  const entries = fs.readdirSync(bundleDir);
  const htmlFiles = entries.filter((f) => f.endsWith('.html'));

  if (htmlFiles.length === 0) {
    return {
      isValid: false,
      htmlFile: null,
      errors: ['No se encontró ningún archivo .html en el bundle.'],
    };
  }

  const mainHtml = htmlFiles.includes('index.html') ? 'index.html' : htmlFiles[0];
  const htmlContent = fs.readFileSync(path.join(bundleDir, mainHtml), 'utf8');

  // Verifica referencias locales a src="..." o href="..."
  const localRefRegex = /(?:src|href)=["']([^"':]+)["']/gi;
  let match: RegExpExecArray | null;

  while ((match = localRefRegex.exec(htmlContent)) !== null) {
    const ref = match[1].trim();
    if (ref.startsWith('#') || ref.startsWith('data:') || ref.startsWith('http://') || ref.startsWith('https://')) {
      continue;
    }
    const cleanRef = ref.split('?')[0].split('#')[0];
    const targetPath = path.join(bundleDir, cleanRef);
    if (!fs.existsSync(targetPath)) {
      errors.push(`Recurso local no encontrado en el bundle: ${cleanRef}`);
    }
  }

  return {
    isValid: errors.length === 0,
    htmlFile: mainHtml,
    errors,
  };
}
