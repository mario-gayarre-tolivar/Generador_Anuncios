# Patrón de Lenguaje Visual: Minimalismo Funcional

Dirección de arte basada en la **disciplina de la sustracción**: se elimina todo ornamento hasta dejar únicamente lo indispensable para que el mensaje funcione. El espacio vacío no es "espacio sobrante", sino **el material activo principal (`>= 60%` de la superficie)** que aísla el foco y obliga al ojo a detenerse en medio del ruido visual del entorno.

---

## 1. Principios Compositivos y Jerarquía Visual

- **Principio rector:** Silencio visual absoluto, mínimo **`60%` (ideal `65%–75%`) de espacio negativo activo** y tensión asimétrica hacia los márgenes o ejes excéntricos. Cada elemento añadido debe justificar su existencia; si quitarlo no rompe el mensaje, sobra.
- **1 foco principal único:** Un **único objeto físico fotográfico limpio o un único concepto gráfico/verbal** anclado en el campo vacío. Prohibido acompañar un objeto protagonista con iconos secundarios, badges promocionales, estrellas o texto explicativo flotando alrededor.
- **Máximo 3 niveles de lectura:**
  - **Nivel 1 (Anclaje conceptual / 0–2 s):** El objeto/símbolo único en solitario (o el titular breve cuando el cartel es puramente tipográfico).
  - **Nivel 2 (Resolución de idea):** Una única frase breve que nombra `[PRODUCT NAME]` y cierra el significado del foco visual.
  - **Nivel 3 (Firma discreta):** Logotipo limpio, URL o dato mínimo anclado en un margen extremo a escala pequeña pero perfectamente legible.

---

## 2. Estructura de Retícula

- **Columnas y módulos:** Retícula de **6 o 12 columnas** de alta precisión (con alto porcentaje de columnas completamente vacías) o partición por **proporción áurea / tercios extremos** (`70%` aire continuo + `30%` bloque de información concentrado).
- **Márgenes:** Márgenes exteriores amplios (`12%–16%` del ancho menor en impresión editorial; `90–120 px` en `1080 px` digital `[uncertain]`) que protegen el vacío para que el entorno no ahogue el diseño.
- **Distribución asimétrica:** Evitar poner el objeto en el centro geométrico exacto si resulta pasivo o de catálogo barato. Desplazar el objeto o el bloque de texto a una intersección excéntrica (ej. tercio inferior derecho o columna `2–3` con gran aire superior) para generar **tensión espacial en los márgenes**.

---

## 3. Guía de Color y Contraste

Paleta monomaterial casi monocromática con un único acento quirúrgico reservado al punto focal o a la firma de Nivel 3:

| Rol Cromático | Muestra / Referencia | HEX | CMYK de referencia `[uncertain]` | Ratio de contraste real (WCAG 2.1) | Uso permitido |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Espacio negativo** | Blanco tiza / papel mineral | `#F7F7F5` | `2C 2M 3Y 0K` | Base | Mínimo `60%` de la superficie total; acabado mate mineral |
| **Tinta principal** | Negro grafito | `#181818` | `65C 60M 60Y 88K` (o `0/0/0/100` en texto fino editorial `[uncertain]`) | **`16.55:1`** sobre `#F7F7F5` (AAA) | Nivel 1 tipográfico, Nivel 2 y contornos de alta precisión |
| **Tinta silenciosa** | Gris arquitectónico | `#595954` | `55C 48M 52Y 28K` | **`6.57:1`** sobre `#F7F7F5` (AA/AAA) | Nivel 3, cotas milimétricas, especificaciones discretas |
| **Acento quirúrgico** | Azul cobalto sobrio | `#1E3A8A` | `95C 80M 10Y 10K` | **`9.66:1`** sobre `#F7F7F5` (AAA) | Un único punto de llamada, palabra clave o sello de marca |

- **Acabados matéricos:** Papel mate arquitectónico de alto gramaje (`200–300 g/m²` en impreso `[uncertain]`) o fondo sRGB plano con micro-textura mineral casi imperceptible. Prohibidos los degradados suaves tipo Apple genérico de IA, reflejos de espejo debajo del producto y sombras flotantes irreales.

---

## 4. Tipografía y Ritmo

- **Familias y estilos recomendados:** Sans-serif geométrica o neogrotesca de trazo equilibrado y proporciones limpias (*Akzidenz-Grotesk*, *Univers*, *Söhne*, *Suisse Int'l*, *Inter*, *DM Sans*), o serif contemporánea refinada (*Editorial New*, *Instrument Serif*) usada con extrema contención en un solo peso (`Regular` o `Medium`, nunca `Black` estridente).
- **Relación de escala:**
  - **Nivel 1 (Titular o Concepto):** `1.0x` (moderado y preciso, sin invadir el espacio negativo: `28–48 pt` en A4/A3, `40–64 px` en `1080x1350 px`).
  - **Nivel 2 (Bajada breve):** `0.45x – 0.55x` del Nivel 1 (`14–20 pt` o `20–28 px`).
  - **Nivel 3 (Firma / Dato):** `0.28x – 0.35x` del Nivel 1 (`>= 8.5–10 pt` en papel en mano, `>= 14–16 px` en móvil `[uncertain]`).
- **Interlineado y tracking:**
  - **Nivel 1:** Interlineado `1.05 – 1.15`, tracking `-0.02em` a `-0.01em`.
  - **Nivel 2:** Interlineado `1.35 – 1.45`, tracking `0em`.
  - **Nivel 3:** Interlineado `1.30`, tracking `+0.04em`.

---

## 5. Tono de Copy

- **Cómo suena:** Preciso, destilado, intelectualmente honesto y sereno. Cada palabra pesa porque no hay más texto alrededor que la respalde.
- **Disciplina verbal:**
  - Máximo **1 frase de titular (3–7 palabras)** + **1 línea de resolución** + firma.
  - Si un adjetivo no aporta información verificable, se elimina (*"El innovador y revolucionario sistema"* -> *"Sistema modular de precisión"*).
  - Prohibido el tono urgente agresivo (*"¡Últimas horas!"*, *"Compra ya"*). La autoridad viene de la calma.

---

## 6. Reglas Anti-IA Específicas

Cuando una IA intenta hacer "minimalismo", suele producir vacío sintético de catálogo 3D sin tensión ni alma:
1. **Render 3D flotando sobre podio de plástico:** Objetos levitando sobre esferas o cilindros pastel con iluminación de estudio perfecta. **Corrección:** Apoyar el objeto sobre una superficie física real (piedra, madera, papel mate) con sombra de contacto auténtica o trabajar con objeto recortado limpiamente sobre retícula arquitectónica.
2. **Centrado simétrico sin tensión:** Objeto justo en el centro y texto centrado debajo como diapositiva automática. **Corrección:** Desplazar hacia eje asimétrico (`1/3` o margen lateral) creando recorrido visual real a través del vacío.
3. **Horror vacui disfrazado:** Añadir ondas sutiles, partículas luminosas o círculos finos para "llenar" el fondo blanco. **Corrección:** Dejar el `>= 60%` de espacio negativo completamente limpio, sin adornos fantasma.
4. **Degradados perlados o brillos Apple falsos:** Fondos gris-azulado difuminado sin textura material. **Corrección:** Usar tono sólido mineral `#F7F7F5` con luz real direccional o papel impreso mate.
5. **Copy hueco de eslogan vacío:** *"Simplicidad. Futuro. Tú."* **Corrección:** Nombrar la función concreta o tensión real de `[PRODUCT NAME]` para `[AUDIENCE]`.

- **Modificadores positivos:** `functional Swiss minimalism, over 65% active negative space, single physical object with real contact shadow on matte chalk surface #F7F7F5, asymmetric off-center tension toward margins, crisp editorial sans-serif typography, quiet natural daylight, zero clutter`
- **Modificadores negativos:** `3D pedestal render, floating glowing product, pastel gradient background, symmetrical centered slide, decorative geometric sparkles, glassmorphism, glossy reflection floor, motivational fluff, overcrowded badges`

---

## 7. Ejemplo Aplicado

- **Contexto:** Pieza minimalista (`4:5` o `A3` / `MUPI`) para `[PRODUCT NAME]` dirigido a `[AUDIENCE]`, en tono `[TONE]` y voz `[BRAND VOICE]`.
- **Composición:** `70%` de superficie libre en blanco mineral `#F7F7F5`; único objeto de `[PRODUCT NAME]` ubicado en el tercio inferior izquierdo con sombra de contacto real suave hacia la derecha.
- **Nivel 1 (Foco principal: objeto único + titular breve anclado en margen superior izquierdo, `#181818`, escala `1.0x`):**
  `Solo lo esencial.` *(o proposición sintética de 3 palabras para `[PRODUCT NAME]`)*
- **Nivel 2 (Margen superior derecho o bajo el objeto, `#181818`, escala `0.48x`):**
  `[PRODUCT NAME], diseñado para [AUDIENCE] sin ruido añadido.` *(en `[TONE]` y `[BRAND VOICE]`)*
- **Nivel 3 (Esquina inferior derecha, `#595954` con punto/código `#1E3A8A`, escala `0.30x`, tracking `+0.04em`):**
  `[BRAND VOICE] · ESPECIFICACIÓN EN WEB`
