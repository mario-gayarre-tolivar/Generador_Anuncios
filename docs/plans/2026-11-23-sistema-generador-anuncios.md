# Plan de Implementación: Sistema Generador de Anuncios y Dirección de Arte Anti-IA

- **Fecha:** 2026-11-23
- **Estado:** Completado y Verificado (Fase 4 GREEN)
- **Arquitectura Seleccionada:** Opción A — Biblioteca Modular Markdown + Validador de Contratos (Node/TypeScript + Vitest)

---

## 1. Objetivo y Alcance

Construir en `C:\Users\Perrotruco\Workspace\Generador_Anuncios` un sistema completo de dirección de arte, patrones visuales, formatos multi-soporte, plantillas sectoriales y un protocolo interactivo de entrevista (`/grill-me`) para diseñar anuncios y carteles de cualquier tamaño o dimensión que transmitan oficio humano auténtico y nunca parezcan generados con IA.

---

## 2. Árbol de Archivos Definitivo

```text
Generador_Anuncios/
├── package.json                                   # Scripts de test y validación (Vitest + TypeScript)
├── tsconfig.json                                  # Configuración TypeScript estricta
├── README.md                                      # 1. Índice maestro, mapa del sistema y flujo combinatorio
├── rules/
│   └── anti-ai-aesthetic.md                       # 4. Constitución Anti-IA (reglas de calidez y criterio humano)
├── workflows/
│   └── grill-me-anuncio.md                        # 5. Protocolo de entrevista (/grill-me) y estructura de salida
├── formats/                                       # 2. Biblioteca de dimensiones, DPI, sangrado y legibilidad
│   ├── _index.md                                  # Fórmulas de distancia de lectura y tabla maestra
│   ├── redes-sociales.md                          # 1:1, 4:5, 9:16, 16:9, carruseles y zonas seguras de UI
│   ├── web-banners.md                             # Estándares IAB (728x90, 300x250, 160x600, 300x600, 970x250, Hero)
│   ├── impresion-editorial.md                     # ISO 216 (A5, A4, A3, B2), flyers, prensa (300 DPI, sangrado 3-5mm)
│   └── gran-formato-ooh.md                        # MUPI/OPI (120x175cm), Valla (8x3m), Roll-up (85x200cm)
├── patterns/                                      # 3A. Patrones de diseño por Lenguaje Visual
│   ├── editorial-tipografico.md                   # Retícula suiza/editorial, contraste de escala, tensión tipográfica
│   ├── fotografia-organica.md                     # Luz real, óptica imperfecta, grano analógico, materia viva
│   ├── ilustracion-artesanal.md                   # Serigrafía, risografía, trazo manual, desajuste de registro
│   ├── minimalismo-funcional.md                   # ≥60% espacio negativo activo, un único punto focal
│   ├── collage-textura-fisica.md                  # Papel rasgado, escáner, sombras de contacto reales, tramados
│   └── brutalismo-controlado.md                   # Estructura expuesta, monoespaciadas + grotescas, contraste crudo
├── templates/                                     # 3B. Plantillas categorizadas por Propósito/Sector
│   ├── retail-producto/
│   │   └── catalogo-plantillas.md
│   ├── eventos-cultura/
│   │   └── catalogo-plantillas.md
│   ├── servicios-b2b/
│   │   └── catalogo-plantillas.md
│   ├── gastronomia/
│   │   └── catalogo-plantillas.md
│   ├── tecnologia/
│   │   └── catalogo-plantillas.md
│   ├── causas-sociales/
│   │   └── catalogo-plantillas.md
│   └── lanzamientos/
│       └── catalogo-plantillas.md
├── src/
│   └── validator.ts                               # Motor de validación de contratos documentales y reglas Anti-IA
├── tests/
│   └── validator.test.ts                          # Suite de tests unitarios e integrales (Micro-TDD)
└── docs/
    └── plans/
        └── 2026-11-23-sistema-generador-anuncios.md
```

---

## 3. Contratos de Interfaz y Reglas de Dominio

### 3.1 Contrato del Validador (`src/validator.ts`)

```typescript
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

/**
 * Valida que un catálogo de plantillas cumpla con:
 * 1. Al menos 3 plantillas distintas por sector.
 * 2. Campos obligatorios en cada plantilla:
 *    - **Nombre**: ...
 *    - **Ideal para**: ...
 *    - **Dimensiones recomendadas**: ...
 *    - **Retícula y foco**: ... (1 foco principal, máximo 3 niveles de jerarquía)
 *    - **Regla anti-IA clave**: ...
 * 3. Secciones o campos detallados de: Guía de color con contraste real, Tono de copy y Ejemplos de uso.
 * 4. Marcadores reutilizables obligatorios presentes en cada plantilla:
 *    [TONE], [AUDIENCE], [BRAND VOICE], [PRODUCT NAME]
 */
export function validateTemplateCatalog(markdownContent: string, categoryName?: string): TemplateValidationResult;

/**
 * Valida un archivo de formato (`formats/*.md`):
 * - Debe especificar: Relación de aspecto, Resolución/DPI, Márgenes de seguridad, Sangrado y Reglas de legibilidad por distancia.
 */
export function validateFormatSpec(markdownContent: string): DocumentValidationResult;

/**
 * Valida un patrón de lenguaje visual (`patterns/*.md`):
 * - Debe especificar: Principios compositivos, Jerarquía visual (1 foco, máx 3 niveles),
 *   Estructura de retícula, Paleta y contraste real, Tipografía, Tono de copy y Reglas Anti-IA específicas.
 */
export function validatePatternSpec(markdownContent: string): DocumentValidationResult;

/**
 * Valida la Constitución Anti-IA (`rules/anti-ai-aesthetic.md`) y el protocolo `/grill-me` (`workflows/grill-me-anuncio.md`).
 */
export function validateCoreRulesAndWorkflow(
  antiAiContent: string,
  grillMeContent: string
): DocumentValidationResult;

/**
 * Ejecuta la auditoría completa del directorio `Generador_Anuncios`.
 */
export function validateWorkspace(rootDir: string): WorkspaceValidationReport;
```

### 3.2 Contrato de Formato de Plantilla (Mandatory Format Lock)

Cada plantilla dentro de `templates/<sector>/catalogo-plantillas.md` debe seguir estrictamente esta estructura:

```markdown
### Plantilla X: [Título]
- **Nombre**: [Nombre del patrón]
- **Ideal para**: [Contexto de uso con `[PRODUCT NAME]` y `[AUDIENCE]`]
- **Dimensiones recomendadas**: [Formatos compatibles de `formats/`]
- **Retícula y foco**: [1 foco principal, máximo 3 niveles de jerarquía y estructura de retícula]
- **Regla anti-IA clave**: [Criterio diferencial que evita el aspecto sintético]
- **Guía de color y contraste**: [Paleta con ratio de contraste real y acabados matéricos]
- **Tono de copy y voz**: [Directriz para `[TONE]` y `[BRAND VOICE]`]
- **Ejemplo de uso y prompt base**:
  > Producto: `[PRODUCT NAME]` | Audiencia: `[AUDIENCE]` | Tono: `[TONE]` | Voz: `[BRAND VOICE]`
  > [Copy + Dirección de arte + Prompt visual con negativos anti-IA]
```

### 3.3 Reglas de Veracidad y Estándares Técnicos
- Todas las medidas de impresión usan estándares ISO 216 / DIN reales, IAB estándar para web y medidas estándar de circuito OOH/MUPI.
- Cualquier recomendación o referencia cuyo estándar varíe según proveedor o región debe marcarse explícitamente con `[uncertain]`.
- Prohibido inventar porcentajes de CTR, métricas de conversión o estudios no verificados.

---

## 4. Matriz de Asignación de Modelos por Tarea (Optimización Coste / Capacidad)

Para no "matar moscas a cañonazos" (evitando usar el modelo flagship `inherit` / Argon High en tareas mecánicas o de alto volumen tabular), cada bloque se asigna al modelo mínimo que garantiza calidad sin degradar el criterio anti-IA:

| Bloque / Tarea | Archivos Objetivo | Complejidad | Modelo Recomendado (`invoke_subagent`) | Justificación ("Por qué no más / Por qué no menos") |
| :--- | :--- | :--- | :--- | :--- |
| **T1. Scaffolding y Configuración** | `package.json`, `tsconfig.json`, stubs iniciales | Trivial / Mecánica | **`flash_lite`** (o directo en 1 comando) | Es configuración estática JSON. Usar un modelo de razonamiento aquí es puro desperdicio. |
| **T2. Motor de Validación Micro-TDD (Ciclos 1-4)** | `src/validator.ts`, `tests/validator.test.ts` | Baja-Media (Algorítmica acotada) | **`flash`** | Son funciones puras de parsing Markdown y expresiones regulares con contratos 100% cerrados. `flash` escribe TypeScript/Vitest rápido y sin errores; `pro` o Argon High sobran. |
| **T3. Biblioteca Técnica de Formatos** | `formats/_index.md`, `redes-sociales.md`, `web-banners.md`, `impresion-editorial.md`, `gran-formato-ooh.md` | Baja (Tabular / Estándares ISO, IAB, DPI) | **`flash`** | Son tablas técnicas de medidas, sangrados, DPI y fórmulas de distancia de lectura. No requiere creatividad profunda, solo precisión estructural que `flash` domina. |
| **T4. Núcleo Conceptual y Dirección de Arte** | `rules/anti-ai-aesthetic.md`, `workflows/grill-me-anuncio.md`, `README.md` | Alta (Criterio estético y diseño de interrogatorio) | **`pro`** | Es la "constitución" que define qué separa el diseño humano del slop de IA y cómo `/grill-me` cuestiona al usuario. Merece `pro` para lograr profundidad real sin gastar Argon High (`inherit`). |
| **T5. Patrones de Lenguaje Visual (6 archivos)** | `patterns/*.md` (editorial, fotografía, ilustración, minimalismo, collage, brutalismo) | Media (Vocabulario de diseño gráfico + contrato fijo) | **`flash`** *(alimentado con `anti-ai-aesthetic.md`)* | Una vez que `pro` redacta la Constitución Anti-IA en T4, `flash` puede usarla como ancla para redactar los 6 patrones con vocabulario técnico real a alta velocidad. |
| **T6. Catálogos de Plantillas por Sector (7 sectores / 21+ plantillas)** | `templates/*/catalogo-plantillas.md` | Media-Baja por ítem, **Alto Volumen de Tokens** | **`flash`** (en 2 subagentes paralelos: Lote A 4 sectores, Lote B 3 sectores) | Es donde más tokens se generan. Usar `pro` o Argon High aquí multiplicaría el coste y la latencia por 5x para rellenar una estructura repetitiva. `flash_lite` caería en clichés de copy, por lo que `flash` es el punto óptimo. |

---

## 5. Matriz Secuencial de Micro-TDD (Fase 4)

- [x] **Ciclo 1: Setup de entorno y Contrato de Plantillas (`validateTemplateCatalog`)**
  - **1.1 Stub**: Inicializar `package.json`, `tsconfig.json` y crear `src/validator.ts` con `throw new Error('Not implemented')`.
  - **1.2 Test (RED)**: Escribir tests en `tests/validator.test.ts` verificando que `validateTemplateCatalog` detecte los 5 campos obligatorios (`Nombre`, `Ideal para`, `Dimensiones recomendadas`, `Retícula y foco`, `Regla anti-IA clave`), la guía de color, tono de copy, ejemplo de uso y los 4 placeholders (`[TONE]`, `[AUDIENCE]`, `[BRAND VOICE]`, `[PRODUCT NAME]`). Ejecutar Vitest y confirmar fallo (`RED`).
  - **1.3 Implementación (GREEN)**: Implementar `validateTemplateCatalog` en `src/validator.ts` y verificar paso a verde (`GREEN`).

- [x] **Ciclo 2: Contrato de Formatos y Patrones Visuales (`validateFormatSpec` y `validatePatternSpec`)**
  - **2.1 Stub**: Mantener `validateFormatSpec` y `validatePatternSpec` lanzando `Not implemented`.
  - **2.2 Test (RED)**: Añadir tests en `tests/validator.test.ts` que exijan relación de aspecto, DPI, márgenes de seguridad, sangrado y distancia de lectura en formatos, y jerarquía de máximo 3 niveles + retícula + contraste real en patrones. Ejecutar Vitest y confirmar fallo (`RED`).
  - **2.3 Implementación (GREEN)**: Implementar ambas funciones en `src/validator.ts` y verificar paso a verde (`GREEN`).

- [x] **Ciclo 3: Contrato de Constitución Anti-IA y Protocolo `/grill-me` (`validateCoreRulesAndWorkflow`)**
  - **3.1 Stub**: Mantener `validateCoreRulesAndWorkflow` lanzando `Not implemented`.
  - **3.2 Test (RED)**: Añadir tests verificando que `anti-ai-aesthetic.md` cubra las 7 prohibiciones clave (simetrías robóticas, degradados genéricos, saturación artificial, poses plásticas, exceso de texto, clichés visuales, copy vacío) y que `grill-me-anuncio.md` incluya las 5 fases de preguntas (emoción en 2 segundos, público/contexto/acción, jerarquía 1-2-3, formato/dimensiones/soporte, auditoría anti-IA). Confirmar fallo (`RED`).
  - **3.3 Implementación (GREEN)**: Implementar `validateCoreRulesAndWorkflow` y verificar paso a verde (`GREEN`).

- [x] **Ciclo 4: Auditoría Integral del Repositorio y Creación de Todos los Entregables (`validateWorkspace`)**
  - **4.1 Stub & Test (RED)**: Escribir test de integración para `validateWorkspace(rootDir)` que verifique la existencia y validez de `README.md`, `rules/anti-ai-aesthetic.md`, `workflows/grill-me-anuncio.md`, los 5 archivos de `formats/`, los 6 archivos de `patterns/` y los 7 catálogos de `templates/`. Confirmar fallo (`RED`).
  - **4.2 Implementación y Poblado de Contenidos (GREEN)**:
    - Implementar `validateWorkspace` en `src/validator.ts`.
    - Redactar `README.md`, `rules/anti-ai-aesthetic.md` y `workflows/grill-me-anuncio.md`.
    - Redactar `formats/_index.md`, `redes-sociales.md`, `web-banners.md`, `impresion-editorial.md` y `gran-formato-ooh.md`.
    - Redactar los 6 patrones en `patterns/`.
    - Redactar los 7 catálogos sectoriales en `templates/<sector>/catalogo-plantillas.md` (con 4 plantillas completas cada uno = 28 plantillas listas para producción).
  - **4.3 Verificación Final y Refactor (GREEN)**: Ejecutar `npm test` para validar el 100% de los contratos y archivos del repositorio.
