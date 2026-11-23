import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import {
  validateCoreRulesAndWorkflow,
  validateFormatSpec,
  validateOutputBundle,
  validatePatternSpec,
  validateTemplateCatalog,
  validateWorkspace,
} from '../src/validator.js';

function makeValidTemplate(index: number): string {
  return `### Plantilla ${index}: Composición Editorial ${index}
- **Nombre**: Patrón Editorial ${index}
- **Ideal para**: Campañas de [PRODUCT NAME] dirigidas a [AUDIENCE] con foco en lectura directa.
- **Dimensiones recomendadas**: 4:5 (1080x1350 px), A4 (300 DPI).
- **Retícula y foco**: 1 foco principal (fotografía o titular de impacto), máximo 3 niveles de jerarquía sobre retícula de 12 columnas.
- **Regla anti-IA clave**: Asimetría intencional con grano analógico sutil y tipografía con interletraje manual; prohibidos degradados neón o brillos plásticos.
- **Guía de color y contraste**: Papel hueso #F4F1EA sobre tinta carbón #1A1A1A (contraste 14.5:1 real) y acento terracota #B84A39.
- **Tono de copy y voz**: Redactado en tono [TONE] respetando [BRAND VOICE] con verbos concretos y cero clichés.
- **Ejemplo de uso y prompt base**:
  > Producto: \`[PRODUCT NAME]\` | Audiencia: \`[AUDIENCE]\` | Tono: \`[TONE]\` | Voz: \`[BRAND VOICE]\`
  > Titular directo de 5 palabras. Fotografía con luz natural lateral, película 35mm, sin simetría robótica ni piel sintética.`;
}

function makeValidCatalog(count = 3): string {
  const templates = Array.from({ length: count }, (_, i) => makeValidTemplate(i + 1)).join('\n\n');
  return `# Catálogo Sectorial de Plantillas\n\n${templates}\n`;
}

const VALID_FORMAT_SPEC = `# Especificaciones Técnicas de Formato
- **Relación de aspecto**: 4:5 y 1:1.414 (ISO 216).
- **Resolución / DPI**: 300 DPI para impresión CMYK o 1080x1350 px sRGB.
- **Márgenes de seguridad**: 12 mm internos o 72 px desde el borde.
- **Sangrado**: 3 mm perimetrales (o 0 mm en pantalla).
- **Distancia de lectura y legibilidad**: Lectura a 0.4 m - 2 m con titular mínimo de 24 pt y contraste 4.5:1.
`;

const VALID_PATTERN_SPEC = `# Patrón Visual: Editorial Tipográfico
## Principios compositivos y jerarquía visual
- 1 foco visual dominante y máximo 3 niveles de jerarquía (titular, subtítulo/dato, cierre).
## Estructura de retícula
- Retícula modular asimétrica de 6 columnas con aire activo del 35%.
## Paleta y contraste real
- Tinta negra #151515 sobre papel crema #F3EFE6 (ratio > 12:1), sin colores neón saturados.
## Tono de copy y tipografía
- Voz directa, humana, sin relleno corporativo; contraste entre serif editorial y grotesca técnica.
## Regla Anti-IA específica
- Prohibido centrar todo en simetría perfecta, evitar iluminaciones artificiales o texturas plastificadas.
`;

const VALID_ANTI_AI = `# Constitución Anti-IA
1. Prohibidas las simetrías robóticas y composiciones centradas por defecto.
2. Prohibidos los degradados genéricos iridescentes o neón.
3. Prohibida la saturación artificial extrema y colores radioactivos.
4. Prohibidas las poses y expresiones plásticas o piel de cera en personas.
5. Prohibido el exceso de texto dentro del lienzo gráfico.
6. Prohibidos los clichés visuales de stock (bombillas flotantes, cerebros luminosos, apretones de manos).
7. Prohibido el copy vacío lleno de adjetivos huecos ("revolucionario", "innovador", "el mejor").
`;

const VALID_GRILL_ME = `# Protocolo de Entrevista (/grill-me)
## Fase 1: Emoción y gancho en 2 segundos
¿Qué debe sentir o entender quien vea el anuncio en menos de 2 segundos?
## Fase 2: Público y contexto de exposición
Define [AUDIENCE], el canal y qué acción concreta debe realizar tras verlo.
## Fase 3: Jerarquía visual (1 foco, máx 3 niveles)
Define el único foco protagonista y los máximo 3 niveles de lectura para [PRODUCT NAME].
## Fase 4: Formato, dimensiones y soporte técnico
Define relación de aspecto, DPI, sangrado y distancia de lectura.
## Fase 5: Auditoría Anti-IA y parámetros de voz
Ajusta [TONE] y [BRAND VOICE], elimina clichés y valida las reglas anti-IA antes de generar.
`;

describe('Ciclo 1: validateTemplateCatalog', () => {
  it('acepta un catálogo válido con 3 plantillas completas y los 4 marcadores', () => {
    const result = validateTemplateCatalog(makeValidCatalog(3), 'retail-producto');

    expect(result.isValid).toBe(true);
    expect(result.templateCount).toBe(3);
    expect(result.errors).toEqual([]);
  });

  it('rechaza un catálogo con menos de 3 plantillas', () => {
    const result = validateTemplateCatalog(makeValidCatalog(2), 'retail-producto');

    expect(result.isValid).toBe(false);
    expect(result.templateCount).toBe(2);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it('rechaza si falta "- **Regla anti-IA clave**:" en alguna plantilla', () => {
    const broken = makeValidCatalog(3).replace('- **Regla anti-IA clave**:', '- **Nota**:');
    const result = validateTemplateCatalog(broken, 'eventos-cultura');

    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it.each(['[TONE]', '[AUDIENCE]', '[BRAND VOICE]', '[PRODUCT NAME]'])(
    'rechaza si falta el marcador obligatorio %s en una plantilla',
    (placeholder) => {
      const broken = [
        makeValidTemplate(1),
        makeValidTemplate(2).replaceAll(placeholder, 'VALOR_FIJO'),
        makeValidTemplate(3),
      ].join('\n\n');

      const result = validateTemplateCatalog(broken, 'tecnologia');

      expect(result.isValid).toBe(false);
      expect(result.errors.length).toBeGreaterThan(0);
    },
  );
});

describe('Ciclo 2: validateFormatSpec y validatePatternSpec', () => {
  it('validateFormatSpec acepta un documento con los 5 ejes técnicos', () => {
    const result = validateFormatSpec(VALID_FORMAT_SPEC);

    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  it('validateFormatSpec rechaza si falta sangrado', () => {
    const withoutBleed = VALID_FORMAT_SPEC.replace(/- \*\*Sangrado\*\*:.+\n/, '');
    const result = validateFormatSpec(withoutBleed);

    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it('validateFormatSpec rechaza si falta resolución/DPI', () => {
    const withoutDpi = VALID_FORMAT_SPEC.replace(/- \*\*Resolución \/ DPI\*\*:.+\n/, '');
    const result = validateFormatSpec(withoutDpi);

    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it('validatePatternSpec acepta un patrón con jerarquía, retícula, contraste, copy y regla anti-IA', () => {
    const result = validatePatternSpec(VALID_PATTERN_SPEC);

    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  it('validatePatternSpec rechaza un patrón al que le falta la regla anti-IA o la retícula', () => {
    const incomplete = `# Patrón Incompleto
## Jerarquía visual
- 1 foco y máximo 3 niveles.
## Color
- Contraste alto.
`;
    const result = validatePatternSpec(incomplete);

    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });
});

describe('Ciclo 3: validateCoreRulesAndWorkflow', () => {
  it('acepta la Constitución Anti-IA con 7 prohibiciones y el workflow /grill-me con 5 fases y 4 marcadores', () => {
    const result = validateCoreRulesAndWorkflow(VALID_ANTI_AI, VALID_GRILL_ME);

    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
  });

  it('rechaza si en la Constitución Anti-IA falta una de las 7 prohibiciones (ej. degradados)', () => {
    const incompleteAntiAi = VALID_ANTI_AI.replace(/2\. Prohibidos los degradados.+\n/, '');
    const result = validateCoreRulesAndWorkflow(incompleteAntiAi, VALID_GRILL_ME);

    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it('rechaza si en /grill-me falta una fase o alguno de los 4 placeholders', () => {
    const incompleteGrill = VALID_GRILL_ME.replaceAll('[BRAND VOICE]', 'voz fija');
    const result = validateCoreRulesAndWorkflow(VALID_ANTI_AI, incompleteGrill);

    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });
});

describe('Ciclo 4: validateWorkspace', () => {
  const tempDirs: string[] = [];

  afterEach(() => {
    for (const dir of tempDirs.splice(0)) {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  function createTempDir(): string {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'generador-anuncios-'));
    tempDirs.push(dir);
    return dir;
  }

  it('reporta isValid: false en un directorio vacío', () => {
    const emptyDir = createTempDir();
    const report = validateWorkspace(emptyDir);

    expect(report.isValid).toBe(false);
    expect(Object.keys(report.errors).length).toBeGreaterThan(0);
  });

  it('reporta isValid: true en un workspace simulado con toda la estructura mínima válida', () => {
    const rootDir = createTempDir();

    const writeRel = (relPath: string, content: string) => {
      const fullPath = path.join(rootDir, relPath);
      fs.mkdirSync(path.dirname(fullPath), { recursive: true });
      fs.writeFileSync(fullPath, content, 'utf8');
    };

    writeRel('README.md', '# Generador de Anuncios\nÍndice maestro del sistema.\n');
    writeRel('rules/anti-ai-aesthetic.md', VALID_ANTI_AI);
    writeRel('workflows/grill-me-anuncio.md', VALID_GRILL_ME);

    const formatFiles = [
      'formats/_index.md',
      'formats/redes-sociales.md',
      'formats/web-banners.md',
      'formats/impresion-editorial.md',
      'formats/gran-formato-ooh.md',
    ];
    for (const f of formatFiles) {
      writeRel(f, VALID_FORMAT_SPEC);
    }

    const patternFiles = [
      'patterns/editorial-tipografico.md',
      'patterns/fotografia-organica.md',
      'patterns/ilustracion-artesanal.md',
      'patterns/minimalismo-funcional.md',
      'patterns/collage-textura-fisica.md',
      'patterns/brutalismo-controlado.md',
    ];
    for (const p of patternFiles) {
      writeRel(p, VALID_PATTERN_SPEC);
    }

    const sectors = [
      'retail-producto',
      'eventos-cultura',
      'servicios-b2b',
      'gastronomia',
      'tecnologia',
      'causas-sociales',
      'lanzamientos',
    ];
    for (const s of sectors) {
      writeRel(`templates/${s}/catalogo-plantillas.md`, makeValidCatalog(3));
    }

    const report = validateWorkspace(rootDir);

    expect(report.isValid).toBe(true);
    expect(report.checkedFiles).toBe(21);
    expect(report.totalTemplates).toBe(21);
    expect(report.errors).toEqual({});
  });

  it('valida exitosamente el repositorio real Generador_Anuncios (21 archivos y 28 plantillas)', () => {
    const report = validateWorkspace(process.cwd());

    expect(report.errors).toEqual({});
    expect(report.isValid).toBe(true);
    expect(report.checkedFiles).toBe(21);
    expect(report.totalTemplates).toBeGreaterThanOrEqual(21);
  });
});

describe('Ciclo 5: validateOutputBundle', () => {
  const tempDirs: string[] = [];

  afterEach(() => {
    for (const dir of tempDirs.splice(0)) {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  function createTempBundle(): string {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'bundle-anuncio-'));
    tempDirs.push(dir);
    return dir;
  }

  it('acepta un bundle con archivo HTML principal y sus recursos locales referenciados', () => {
    const bundleDir = createTempBundle();
    fs.writeFileSync(path.join(bundleDir, 'qr-whatsapp.svg'), '<svg></svg>', 'utf8');
    fs.writeFileSync(
      path.join(bundleDir, 'cartel.html'),
      '<!DOCTYPE html><html><body><img src="qr-whatsapp.svg" /></body></html>',
      'utf8',
    );

    const result = validateOutputBundle(bundleDir);

    expect(result.isValid).toBe(true);
    expect(result.errors).toEqual([]);
    expect(result.htmlFile).toBe('cartel.html');
  });

  it('rechaza si el bundle no contiene ningún archivo HTML', () => {
    const bundleDir = createTempBundle();
    fs.writeFileSync(path.join(bundleDir, 'notas.txt'), 'hola', 'utf8');

    const result = validateOutputBundle(bundleDir);

    expect(result.isValid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });

  it('valida exitosamente el bundle real migrado output/clases-particulares-mario', () => {
    const marioBundle = path.join(process.cwd(), 'output', 'clases-particulares-mario');
    const result = validateOutputBundle(marioBundle);

    expect(result.isValid).toBe(true);
    expect(result.htmlFile).toBe('cartel-mario.html');
    expect(result.errors).toEqual([]);
  });
});
