# Generador de Anuncios y Dirección de Arte Anti-IA

Sistema modular de dirección de arte, formatos técnicos, lenguajes visuales, plantillas sectoriales y protocolo de entrevista (`/grill-me`) para diseñar **carteles y anuncios de cualquier dimensión** con oficio humano auténtico, jerarquía clara y cero estética sintética de IA.

---

## 1. Mapa Completo del Repositorio

```text
Generador_Anuncios/
├── README.md                                      # Índice maestro del sistema y flujo combinatorio
├── package.json                                   # Scripts de validación (Vitest + TypeScript)
├── tsconfig.json                                  # Configuración TypeScript estricta
├── rules/
│   └── anti-ai-aesthetic.md                       # Constitución Anti-IA (7 leyes + negativos + test 10s)
├── workflows/
│   └── grill-me-anuncio.md                        # Protocolo de entrevista /grill-me en 5 bloques
├── formats/                                       # Biblioteca técnica multi-soporte
│   ├── _index.md                                  # Tabla maestra y fórmulas de distancia de lectura
│   ├── redes-sociales.md                          # 1:1, 4:5, 9:16, 16:9, carruseles y zonas seguras UI
│   ├── web-banners.md                             # Estándares IAB y formatos hero web
│   ├── impresion-editorial.md                     # ISO 216 (A5, A4, A3, B2), flyers y prensa
│   └── gran-formato-ooh.md                        # MUPI/OPI, vallas y roll-ups
├── patterns/                                      # Lenguajes visuales y sistemas compositivos
│   ├── editorial-tipografico.md                   # Retícula suiza/editorial y contraste de escala
│   ├── fotografia-organica.md                     # Luz física real, grano óptico y acción en curso
│   ├── ilustracion-artesanal.md                   # Serigrafía, risografía y trazo manual
│   ├── minimalismo-funcional.md                   # Espacio negativo activo y foco único
│   ├── collage-textura-fisica.md                  # Papel rasgado, escáner y sombras de contacto
│   └── brutalismo-controlado.md                   # Estructura expuesta y contraste tipográfico crudo
├── templates/                                     # Catálogos de plantillas por propósito/sector
│   ├── retail-producto/catalogo-plantillas.md
│   ├── eventos-cultura/catalogo-plantillas.md
│   ├── servicios-b2b/catalogo-plantillas.md
│   ├── gastronomia/catalogo-plantillas.md
│   ├── tecnologia/catalogo-plantillas.md
│   ├── causas-sociales/catalogo-plantillas.md
│   └── lanzamientos/catalogo-plantillas.md
├── output/                                        # Entregables generados (aislado e ignorado en Git)
│   └── <slug-del-cartel>/                         # Subcarpeta dedicada por cartel (ej: clases-particulares-mario/)
│       ├── cartel.html                            # Maqueta HTML interactiva imprimible A4 / adaptable 4:5
│       └── [recursos locales]                     # SVGs, QRs, imágenes o brief asociado
├── src/
│   └── validator.ts                               # Motor de validación de contratos documentales y bundles
├── tests/
│   └── validator.test.ts                          # Suite TDD de auditoría estructural y anti-IA
└── docs/
    └── plans/
        └── 2026-11-23-sistema-generador-anuncios.md
```

---

## 2. Flujo de Trabajo Combinatorio (Paso a Paso)

El sistema no produce anuncios rígidos ni copias en serie: combina **4 capas ortogonales** auditadas por una constitución común.

```text
[1. Entrevista (/grill-me)] ──▶ [2. Formato (formats/)] ──▶ [3. Lenguaje (patterns/)] ──▶ [4. Plantilla (templates/)]
                                                                                                       │
                                                       [5. Filtro Final: rules/anti-ai-aesthetic.md] ◀─┘
```

### Paso 1 — Entrevista de Encuadre (`workflows/grill-me-anuncio.md`)
Ejecuta el protocolo `/grill-me` antes de diseñar. Recorre los 5 bloques obligatorios para definir la **emoción en 2 segundos**, el **público real y contexto**, la **jerarquía estricta (1-2-3)** con un único foco, los parámetros del soporte y el filtro Anti-IA. Al terminar, genera el Artefacto de Salida con `[PRODUCT NAME]`, `[AUDIENCE]`, `[TONE]` y `[BRAND VOICE]`.

### Paso 2 — Selección de Formato Técnico (`formats/`)
Consulta `formats/_index.md` y el documento específico de tu canal (`redes-sociales.md`, `web-banners.md`, `impresion-editorial.md` o `gran-formato-ooh.md`). Bloquea **relación de aspecto, resolución/DPI, sangrado, márgenes de seguridad y distancia de lectura** antes de elegir composición.  
*(Nota: Las tolerancias finales de sangrado, perfiles de color CMYK por papel o zonas superpuestas por actualizaciones de interfaz varían según imprenta, circuito o plataforma `[uncertain]`.)*

### Paso 3 — Elección de Lenguaje Visual (`patterns/`)
Elige un único patrón rector acorde al `[TONE]` definido en `/grill-me`:
- Mensaje de autor, cartel cultural o venta por autoridad verbal → `editorial-tipografico.md`
- Producto táctil, comida, oficio humano o retrato con alma → `fotografia-organica.md`
- Eventos independientes, gastronomía cálida o marca con carácter gráfico → `ilustracion-artesanal.md`
- Producto premium o mensaje directo que necesita silencio visual → `minimalismo-funcional.md`
- Campañas culturales, lanzamientos editoriales o crítica social → `collage-textura-fisica.md`
- Tecnología sin humo, conciertos, manifiestos o lanzamientos disruptivos reales → `brutalismo-controlado.md`

### Paso 4 — Adaptación de Plantilla Sectorial (`templates/`)
Abre `templates/<sector>/catalogo-plantillas.md`, selecciona la plantilla que encaje con tu objetivo y sustituye los marcadores `[PRODUCT NAME]`, `[AUDIENCE]`, `[TONE]` y `[BRAND VOICE]` respetando siempre **1 foco principal** y **máximo 3 niveles de jerarquía**.

### Paso 5 — Auditoría Anti-IA (`rules/anti-ai-aesthetic.md`)
Antes de dar la pieza por terminada, comprueba las **7 Leyes de Prohibición** (sin simetrías robóticas, sin degradados genéricos, sin saturación artificial, sin poses o expresiones plásticas, sin exceso de texto, sin clichés visuales y sin copy vacío), aplica los **Prompts Negativos** si usas generación como base visual y supera el **Test de Auditoría Humana en 10 Segundos**.

---

## 3. Tabla de Referencia Rápida del Sistema

| Capa | Archivo | Propósito Principal | Cuándo Consultarlo |
| :--- | :--- | :--- | :--- |
| **Núcleo** | [`rules/anti-ai-aesthetic.md`](rules/anti-ai-aesthetic.md) | 7 leyes anti-IA, diccionario de negativos y Test de 10 s | Siempre (como regla base y auditoría final) |
| **Proceso** | [`workflows/grill-me-anuncio.md`](workflows/grill-me-anuncio.md) | Interrogatorio `/grill-me` en 5 bloques + plantilla de brief | Al recibir cualquier idea nueva de cartel o anuncio |
| **Formatos** | [`formats/_index.md`](formats/_index.md) | Índice maestro y fórmulas de legibilidad por distancia | Para elegir el soporte adecuado según uso |
| **Formatos** | [`formats/redes-sociales.md`](formats/redes-sociales.md) | Proporciones 1:1, 4:5, 9:16, 16:9, carruseles y zonas UI | Campañas en feeds, stories o reels |
| **Formatos** | [`formats/web-banners.md`](formats/web-banners.md) | Formatos estándar IAB y cabeceras hero | Display web, newsletters y portadas |
| **Formatos** | [`formats/impresion-editorial.md`](formats/impresion-editorial.md) | ISO 216 (A5–B2), flyers, prensa, 300 DPI y sangrados | Cartelería interior, folletos y papel |
| **Formatos** | [`formats/gran-formato-ooh.md`](formats/gran-formato-ooh.md) | MUPI/OPI, vallas exteriores y roll-ups | Vía pública, ferias y exterior |
| **Patrones** | [`patterns/editorial-tipografico.md`](patterns/editorial-tipografico.md) | Retícula suiza/editorial y tensión tipográfica | Piezas donde la palabra y la escala lideran |
| **Patrones** | [`patterns/fotografia-organica.md`](patterns/fotografia-organica.md) | Luz real, encuadre imperfecto y grano óptico | Retratos, producto real y gastronomía |
| **Patrones** | [`patterns/ilustracion-artesanal.md`](patterns/ilustracion-artesanal.md) | Serigrafía, risografía, tinta plana y trazo manual | Cultura, editorial y marcas con oficio ilustrativo |
| **Patrones** | [`patterns/minimalismo-funcional.md`](patterns/minimalismo-funcional.md) | ≥60 % espacio negativo activo y foco único | Lujo silencioso, diseño industrial y síntesis |
| **Patrones** | [`patterns/collage-textura-fisica.md`](patterns/collage-textura-fisica.md) | Papel rasgado, escáner, tramas y sombras reales | Música, exposiciones, causas y campañas editoriales |
| **Patrones** | [`patterns/brutalismo-controlado.md`](patterns/brutalismo-controlado.md) | Retícula vista, contraste crudo y monoespaciadas | Lanzamientos técnicos, escena urbana y manifiestos |
| **Plantillas** | [`templates/retail-producto/catalogo-plantillas.md`](templates/retail-producto/catalogo-plantillas.md) | Plantillas listas para producto físico y comercio | Tiendas, lanzamientos de catálogo, moda, objetos |
| **Plantillas** | [`templates/eventos-cultura/catalogo-plantillas.md`](templates/eventos-cultura/catalogo-plantillas.md) | Plantillas para festivales, exposiciones, teatro y cine | Agenda cultural, conciertos y carteles de sala |
| **Plantillas** | [`templates/servicios-b2b/catalogo-plantillas.md`](templates/servicios-b2b/catalogo-plantillas.md) | Plantillas sobrias para consultoría, industria y B2B | Servicios profesionales sin clichés corporativos |
| **Plantillas** | [`templates/gastronomia/catalogo-plantillas.md`](templates/gastronomia/catalogo-plantillas.md) | Plantillas para hostelería, café, vino y alimentación | Cartas, aperturas locales y producto artesanal |
| **Plantillas** | [`templates/tecnologia/catalogo-plantillas.md`](templates/tecnologia/catalogo-plantillas.md) | Plantillas para software, hardware e ingeniería | Productos digitales y hardware sin estética neón |
| **Plantillas** | [`templates/causas-sociales/catalogo-plantillas.md`](templates/causas-sociales/catalogo-plantillas.md) | Plantillas para ONG, campañas cívicas y divulgación | Carteles reivindicativos y conciencia pública |
| **Plantillas** | [`templates/lanzamientos/catalogo-plantillas.md`](templates/lanzamientos/catalogo-plantillas.md) | Plantillas para estrenos, preventas y novedades | Campañas de lanzamiento con fecha concreta |
| **Validación** | [`src/validator.ts`](src/validator.ts) y [`tests/validator.test.ts`](tests/validator.test.ts) | Validador de contratos documentales y suite Vitest | Tras añadir o editar cualquier documento del sistema |

---

## 4. Validación de Contratos (`npm test`)

Todos los archivos del repositorio están sometidos a verificación automática mediante **Vitest** y **TypeScript** (`src/validator.ts`). Las pruebas comprueban que las reglas anti-IA, las 5 fases de `/grill-me`, las especificaciones de formatos, la jerarquía de patrones y los marcadores obligatorios de las plantillas permanecen intactos.

```bash
# Ejecutar la suite completa de validación de contratos
npm test

# Alias equivalente configurado en package.json
npm run validate
```

### Principios de Veracidad Técnica del Sistema
- Las dimensiones de impresión emplean estándares **ISO 216** reales y las referencias web siguen tamaños estándar **IAB**; cualquier valor dependiente de imprenta, proveedor local o red publicitaria se marca con `[uncertain]`.
- El sistema prohíbe inventar métricas de conversión, tasas de clic (CTR) o estadísticas no verificadas dentro de plantillas, guías o briefs.
