# Patrón de Lenguaje Visual: Collage y Textura Física

Lenguaje táctil construido como un **montaje analógico sobre mesa de luz o escáner plano (*flatbed scanner*)**: recortes de papel con fibra blanca expuesta al rasgar, fotografía impresa con trama *halftone*, cinta adhesiva traslúcida o de carrocero, sellos de goma y **sombras de contacto reales** producidas por el grosor físico del papel (`0.2–0.5 mm`), jamás por un `drop-shadow` difuminado de CSS genérico.

---

## 1. Principios Compositivos y Jerarquía Visual

- **Principio rector:** Superposición física de capas con profundidad tangible (escala real entre papel base, recorte protagonista, cinta de sujeción y etiqueta tipográfica). Cada capa debe parecer cortada con cúter o rasgada a mano en la realidad, con bordes ligeramente irregulares y dirección coherente de luz rasante.
- **1 foco principal único:** Un **recorte o ensamblaje central dominante** (por ejemplo, una fotografía en blanco y negro o semitono pegada con cinta real y atravesada o coronada por la pieza titular). Prohibido esparcir 15 recortes del mismo tamaño por todo el cartel sin centro de gravedad.
- **Máximo 3 niveles de lectura:**
  - **Nivel 1 (Impacto / 0–2 s):** El recorte protagonista + titular en tira de papel contrastada o tipografía de sello/esténcil de alto impacto.
  - **Nivel 2 (Bloque editorial):** Nota o etiqueta mecanografiada/impresa pegada en una capa lateral que explica `[PRODUCT NAME]` y su propuesta.
  - **Nivel 3 (Metadato de archivo):** Sello de goma, número de archivo o dirección en etiqueta inferior, agrupado como pieza de cierre.

---

## 2. Estructura de Retícula

- **Columnas y módulos:** Retícula subyacente de **4 o 6 columnas** que ordena la posición de los bloques principales aunque cada recorte tenga una ligera rotación orgánica (`1° a 4°` máximo; nunca giros caóticos de `35°` en todas direcciones).
- **Superposición controlada:** Permitir que el recorte de Nivel 1 solape `10%–20%` el borde del fondo o de una forma secundaria de color, creando lectura en profundidad Z sin tapar jamás el texto de Nivel 2 ni Nivel 3.
- **Márgenes:** Márgenes exteriores firmes (`6%–10%` del ancho menor `[uncertain]`) o composición a sangre donde los recortes secundarios salen por el borde físico del escáner mientras la tipografía permanece estrictamente dentro de la zona segura.
- **Distribución asimétrica:** Anclar el bloque fotográfico/collage principal en 3 columnas desplazadas (ej. centro-izquierda) y fijar la etiqueta tipográfica de Nivel 2 en la columna contraria sujeta visualmente por un trozo de cinta o grapa real.

---

## 3. Guía de Color y Contraste

Paleta de archivo físico: cartulina kraft o papel envejecido, tinta offset desgastada, trama *halftone* y acentos de papelería real (cinta de carrocero, tinta de tampón):

| Rol Cromático | Muestra / Referencia | HEX | CMYK de referencia `[uncertain]` | Ratio de contraste real (WCAG 2.1) | Uso permitido |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Fondo base** | Cartón kraft claro / papel archivo | `#E8DEC8` | `8C 12M 24Y 0K` | Base | Superficie de mesa/papel sobre la que descansan los recortes |
| **Tinta principal** | Tinta offset negra desgastada | `#1C1B19` | `65C 60M 62Y 85K` (evitar negro puro `#000000` sintético) | **`12.88:1`** sobre `#E8DEC8` (AAA) | Titulares, recorte en semitono, bloques tipográficos de alto contraste |
| **Acento papelería** | Cinta carrocero / Amarillo archivo | `#D9B44A` | `12C 25M 82Y 0K` | **`8.67:1`** (texto `#1C1B19` sobre `#D9B44A`) (AAA) | Tiras de cinta adhesiva, etiquetas destacadas con texto oscuro `#1C1B19` encima |
| **Acento tampón** | Magenta imprenta / Sello correo | `#B02A4A` | `15C 90M 50Y 5K` | **`4.80:1`** sobre `#E8DEC8` (AA) | Sellos de goma, subrayados gruesos, titulares grandes o detalles de Nivel 3 |

- **Sombras de contacto reales:** El papel pegado sobre otro papel genera una **sombra dura y estrecha (`1–3 px` de desplazamiento lateral con mínima difusión `0.5–1.5 px` y opacidad `25%–40%` en tono cálido `#1C1B19`)**, nunca una sombra negra difuminada de `30 px` de radio tipo modal web.
- **Acabados matéricos:** Fibras blancas visibles en los bordes rasgados (*deckled/torn paper edge*), micro-motas de polvo de escáner contenidas (sin ensuciar texto), tramas de semitono (*halftone* a `45°` en `35–65 LPI` `[uncertain]`) en fotografías recortadas.

---

## 4. Tipografía y Ritmo

- **Familias y estilos recomendados:**
  - Titulares de recorte/fanzine: Grotescas condensadas robustas (*Druk*, *Impact* editorial tratado, *Alternate Gothic*, *Oswald*) o *ransom-note* muy contenido (máximo 2 estilos tipográficos, nunca cada letra de una fuente distinta).
  - Nivel 2 y Nivel 3: Monoespaciada de máquina de escribir (*Courier Prime*, *IBM Plex Mono*, *Space Mono*) o sans técnica tipo etiqueta Dymo/archivo.
- **Relación de escala:**
  - **Nivel 1 (Titular):** `1.0x` (`54–100 pt` en A3, `68–104 px` en `1080x1350 px`).
  - **Nivel 2 (Nota / Bajada):** `0.30x – 0.38x` del Nivel 1 (`16–24 pt` o `22–30 px`).
  - **Nivel 3 (Sello / Pie):** `0.18x – 0.24x` del Nivel 1 (`>= 9–10 pt` en impreso, `>= 14–16 px` en móvil `[uncertain]`).
- **Interlineado y tracking:**
  - **Nivel 1:** Interlineado `0.92 – 1.02`, tracking `-0.02em`. Si va en tiras recortadas por línea, cada tira lleva ligero relleno (`padding`) asimétrico.
  - **Nivel 2:** Interlineado `1.30 – 1.40`, tracking `0em`.
  - **Nivel 3:** Interlineado `1.25`, tracking `+0.05em`.

---

## 5. Tono de Copy

- **Cómo suena:** Crudo, cultural, directo, con nervio de fanzine, editorial independiente o campaña callejera con discurso propio.
- **Disciplina verbal:**
  - Frases cortas que suenen a manifiesto tangible, nota al margen o recorte de prensa real.
  - Prohibido el lenguaje corporativo pulido (*"Impulsamos tu transformación digital"* sobre papel rasgado genera disonancia ridícula).
  - Funciona muy bien contrastar una afirmación humana en Nivel 1 con un dato frío de ficha en Nivel 2.

---

## 6. Reglas Anti-IA Específicas

El "collage de IA" suele fracasar porque la IA pega elementos flotando en el espacio con estética de *scrapbook* de plástico:
1. **Sombras CSS genéricas difuminadas:** Halos negros gigantes alrededor de los recortes que los hacen parecer pegatinas digitales flotando a 5 cm del fondo. **Corrección:** Sombras de contacto finas, pegadas al borde del papel, siguiendo un único ángulo de luz de escáner o lámpara lateral.
2. **Bordes de papel rasgado idénticos y falsos:** Ondas vectoriales repetidas sin fibra blanca interna. **Corrección:** Mostrar la **capa de pulpa blanca/crema expuesta** en el desgarro del papel estucado o fotográfico.
3. **Saturación neón y mezcla surrealista sin sentido:** Ojos flotantes, mariposas brillantes y estatuas griegas *vaporwave*. **Corrección:** Usar **material fotográfico coherente con el producto y audiencia**, en escala de grises *halftone* o color lavado de imprenta.
4. **Cinta adhesiva opaca dibujada como rectángulo amarillo:** Cinta sin transparencia ni arrugas. **Corrección:** Cinta de carrocero con textura crepada o *washi/scotch* semitransparente que deja ver el papel inferior.
5. **Tipografía ilegible deformada sobre textura:** Letras distorsionadas por el grano del papel. **Corrección:** Componer la tipografía nítida sobre tiras de papel planas con contraste verificado (`>= 4.5:1` / `12.88:1` en `#1C1B19` sobre `#E8DEC8`).

- **Modificadores positivos:** `analog flatbed scanner collage, real torn paper edges showing white paper fibers, tight realistic contact shadows along paper thickness, halftone newspaper print grain, semi-transparent masking tape #D9B44A, off-white archival cardboard #E8DEC8, stamp ink #B02A4A, tactile zine art direction`
- **Modificadores negativos:** `CSS drop shadow, floating stickers, vaporwave surrealism, Greek statue aesthetic, neon glowing collage, smooth digital gradients, glossy scrapbook, illegible warped text, clean white vector background`

---

## 7. Ejemplo Aplicado

- **Contexto:** Pieza collage (`A3` o `4:5`) para `[PRODUCT NAME]` dirigido a `[AUDIENCE]`, con tono `[TONE]` y voz `[BRAND VOICE]`.
- **Composición:** Base `#E8DEC8` escaneada; recorte fotográfico en trama *halftone* (`#1C1B19`) rasgado a mano con fibra blanca expuesta en bordes, sujeto por dos tiras cortas de cinta `#D9B44A` en esquinas opuestas con sombra de contacto mínima (`2 px`).
- **Nivel 1 (Foco principal: recorte + tira titular rasgada superior en `#1C1B19` con texto `#E8DEC8` o invertido, escala `1.0x`):**
  `SIN FILTROS DE CATÁLOGO.` *(o titular directo de `[PRODUCT NAME]`)*
- **Nivel 2 (Etiqueta mecanografiada lateral en `#E8DEC8` con sombra de contacto real, texto `#1C1B19`, escala `0.34x`):**
  `[PRODUCT NAME] pensado para [AUDIENCE]. Material real, cero maquillaje.` *(adaptado a `[TONE]` y `[BRAND VOICE]`)*
- **Nivel 3 (Sello inferior derecho en tinta `#B02A4A` sobre base clara, escala `0.20x`, tracking `+0.05em`):**
  `DOC. 04 · [BRAND VOICE] · EDICIÓN ACTIVA`
