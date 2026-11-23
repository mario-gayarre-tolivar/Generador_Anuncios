# Patrón de Lenguaje Visual: Ilustración Artesanal

Lenguaje visual anclado en técnicas de **estampación física e imprenta de taller**: serigrafía, risografía (*RISO*), linograbado, xilografía o tinta china sobre papel poroso. Su huella humana proviene de la **economía de tintas** (2 o 3 tintas planas), el trazo manual con presión variable, el tramado orgánico y el **desajuste de registro (*misregistration* / *trap*)** propio del paso mecánico por rodillo o pantalla.

---

## 1. Principios Compositivos y Jerarquía Visual

- **Principio rector:** Síntesis gráfica por planos de tinta plana y sobreimpresión (*overprint*). Cada capa de color tiene una función estructural y se superpone generando un tercer tono natural donde se cruzan las tintas traslúcidas.
- **1 foco principal único:** Una **ilustración protagonista de contorno expresivo o masa grabada** (un símbolo, escena simplificada o personaje con carácter) que ocupa el centro óptico asimétrico del cartel (`50%–65%` del lienzo) y dialoga directamente con el titular integrado en el mismo lenguaje de tinta.
- **Máximo 3 niveles de lectura:**
  - **Nivel 1 (Impacto visual / 0–2 s):** La ilustración principal unida al titular rotulado o compuesto en la tinta de mayor contraste (`#1B365D` o `#E03C31` según peso de masa).
  - **Nivel 2 (Información clave):** Subtítulo, fecha o propuesta central en una franja limpia de papel o dentro de una reserva blanca calada sobre masa de tinta.
  - **Nivel 3 (Pie de taller / Acción):** Detalles secundarios, lugar, precio o marca compuestos como sello o colofón de imprenta en la parte inferior.

---

## 2. Estructura de Retícula

- **Columnas y módulos:** Retícula de **3 o 4 columnas** con partición vertical clásica de cartel de taller (`2/3` área ilustrada + `1/3` banda tipográfica, o composición de **cartel de bloque** con marco perimetral irregular hecho a mano).
- **Desajuste intencionado (*misregistration*):** Desplazar una de las capas de tinta `1–3 mm` (en impresión) o `2–5 px` (en `1080 px` digital) respecto a la línea clave negra/azul para reproducir la tolerancia física real de la risografía o serigrafía.
- **Márgenes:** En risografía y serigrafía el papel suele exigir **margen blanco perimetral sin tinta (`5–10 mm` en A4/A3 `[uncertain]`)** para que los rodillos de arrastre no manchen la hoja ni arrastren tinta fresca. Respetar ese marco como rasgo estético real del estilo.
- **Distribución asimétrica:** Colocar la ilustración principal cargada hacia una diagonal o apoyada en el borde izquierdo/inferior, dejando un bolso de papel crudo libre arriba a la derecha (o viceversa) donde el titular Nivel 1 respire sin chocar con trazos finos.

---

## 3. Guía de Color y Contraste

Paleta estricta de **2 a 3 tintas planas sobre papel poroso** (simulando tintas de soja de risografía o tintas opacas de serigrafía). Prohibido usar más de 4 tintas o degradados suaves tipo aerógrafo digital:

| Rol Cromático | Muestra / Referencia | HEX | CMYK / Tinta plana `[uncertain]` | Ratio de contraste real (WCAG 2.1) | Uso permitido |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Soporte papel** | Algodón crudo / Munken Print | `#F6F0E4` | `2C 4M 10Y 0K` (papel sin estucar) | Base | Papel visible, reservas en negativo y margen de rodillo |
| **Tinta clave (Base)** | Azul índigo / *RISO Federal Blue* | `#1B365D` | `95C 78M 30Y 25K` (o tinta plana RISO `[uncertain]`) | **`10.68:1`** sobre `#F6F0E4` (AAA) | Línea de dibujo principal, Nivel 1, Nivel 2 y Nivel 3 legibles |
| **Tinta de acento 1** | Bermellón / *RISO Bright Red* | `#E03C31` | `0C 85M 82Y 0K` | **`3.81:1`** sobre `#F6F0E4` | Solo titulares grandes (`>= 18 pt` / `>= 24 px`), masas ilustradas y sellos; **no usar en texto pequeño** |
| **Tinta de acento 2** | Ocre mostaza traslúcido | `#C68B2C` | `18C 45M 90Y 5K` | **`2.59:1`** sobre `#F6F0E4` | **Solo masas gráficas, fondos secundarios y sobreimpresión (`multiply`)**; prohibido para texto legible |

- **Acabados matéricos:** Textura de papel poroso sin estucar (`120–240 g/m²` `[uncertain]`), grano de trama estocástica o semitono grueso (`45–65 LPI` `[uncertain]`) en las sombras ilustradas, y efecto de sobreimpresión multiplicada donde el rojo y el ocre o el azul se cruzan.

---

## 4. Tipografía y Ritmo

- **Familias y estilos recomendados:**
  - Titulares con carácter de imprenta de madera (*woodblock*), grotescas condensadas sólidas (*Druk*, *Oswald*, *Barlow Condensed*, *Impacto editorial limpio*) o *slab-serif* robustas (*Clarendon*, *Rockwell*, *Alfa Slab*, *Courier Prime* en Nivel 3), e incluso *hand-lettering* genuino con imperfección de pincel/plumilla.
  - Evitar tipografías geométricas futuristas ultra-finas (`Thin`/`Hairline`) que desaparecerían al estampar sobre papel fibroso o al imprimir con ganancia de punto (*dot gain*).
- **Relación de escala:**
  - **Nivel 1 (Titular):** `1.0x` (`54–110 pt` en A3/B2, `72–112 px` en `1080x1350 px`).
  - **Nivel 2 (Bajada):** `0.30x – 0.40x` del Nivel 1 (`18–28 pt` o `26–36 px`).
  - **Nivel 3 (Colofón / Datos):** `0.16x – 0.22x` del Nivel 1 (`>= 10 pt` en papel poroso para compensar ganancia de punto `[uncertain]`).
- **Interlineado y tracking:**
  - **Nivel 1:** Interlineado `0.90 – 1.00`, tracking `-0.02em` a `0em`.
  - **Nivel 2:** Interlineado `1.20 – 1.30`, tracking `0em`.
  - **Nivel 3:** Interlineado `1.30`, tracking `+0.03em`.

---

## 5. Tono de Copy

- **Cómo suena:** Cercano, artesanal, con ingenio cultural o humor seco de taller. Se siente escrito por un autor o pequeño estudio independiente, nunca por un departamento de *growth marketing*.
- **Disciplina verbal:**
  - Frases cortas con ritmo oral o metáfora visual directa que dialogue con el dibujo (no repetir literalmente lo que el dibujo ya muestra).
  - Evitar tecnicismos de SaaS y clichés motivacionales vacíos.
  - En Nivel 3, incluir señas de edición o autoría real (`TINTA A 2 PASADAS`, `EDICIÓN DE TALLER`, `IMPRESO EN ...` o datos reales del evento/producto).

---

## 6. Reglas Anti-IA Específicas

La ilustración por IA suele generar un "estilo vector brillante" o "acuarela hiper-detallada" que delata de inmediato su origen algorítmico:
1. **Exceso de detalle y sombreado digital suave:** Ilustraciones con miles de líneas innecesarias y degradados suaves imposibles en serigrafía/linograbado. **Corrección:** Reducir a **formas planas cortadas por gubia o pincel**, sombras resueltas con tramas de puntos/rayado (*hatching*) y máximo 3 tintas separadas.
2. **Trazo uniforme de vector automático:** Líneas con grosor idéntico de principio a fin. **Corrección:** Exigir **presión variable**, remates ligeramente romos, pequeños cortes de tinta seca y bordes con mordida orgánica del papel.
3. **Registro perfecto imposible:** Todas las capas alineadas al subpíxel como un SVG clínico. **Corrección:** Introducir un **desajuste sutil de registro (`1–2 mm` o `2–4 px`)** y solapamiento (*trap*) entre masas de tinta.
4. **Estética infantil/Disney genérica o "Corporate Memphis":** Personajes de piernas fideo con degradados pastel. **Corrección:** Proporciones expresivas, anatomía estilizada con carácter editorial o grabado tradicional.
5. **Paletas arcoíris saturadas:** 12 colores brillantes mezclados sin criterio de imprenta. **Corrección:** Limitar estrictamente a 2 o 3 tintas planas sobre papel crudo `#F6F0E4`.

- **Modificadores positivos:** `2-color risograph and linocut print poster, visible ink misregistration trap, soy ink overprint multiply texture, rough hand-carved brush strokes with variable line pressure, porous uncoated Munken cream paper #F6F0E4, halftone dot shading, limited spot ink palette (indigo blue #1B365D and vermilion #E03C31)`
- **Modificadores negativos:** `smooth digital vector illustration, corporate memphis, airbrush gradients, glossy 3D shading, Pixar style, hyper-detailed fantasy art, neon rainbow colors, uniform stroke weight, clean digital white background`

---

## 7. Ejemplo Aplicado

- **Contexto:** Cartel ilustrado (`A3` o `4:5`) para `[PRODUCT NAME]` dirigido a `[AUDIENCE]`, ejecutado en tono `[TONE]` y voz `[BRAND VOICE]`.
- **Composición:** Marco natural de papel crudo `#F6F0E4` de `8 mm`; ilustración central asimétrica a 2 tintas (`#1B365D` + `#E03C31` + mancha base `#C68B2C` desplazada `2 px` en registro) con trama halftone en las sombras.
- **Nivel 1 (Foco principal: ilustración + titular tallado en bloque superior, `#1B365D`, escala `1.0x`):**
  `HECHO A MANO, SIN ATAJOS.` *(o lema gráfico de `[PRODUCT NAME]`)*
- **Nivel 2 (Reserva inferior izquierda, `#1B365D`, escala `0.35x`):**
  `[PRODUCT NAME] pensado para [AUDIENCE] que valora el oficio real.` *(adaptado a `[TONE]` y `[BRAND VOICE]`)*
- **Nivel 3 (Pie derecho con sello en `#E03C31` grande o filete `#1B365D`, escala `0.20x`):**
  `SERIE 01 · [BRAND VOICE] · MADRID / TALLER`
