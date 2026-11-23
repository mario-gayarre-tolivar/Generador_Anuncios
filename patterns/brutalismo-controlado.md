# Patrón de Lenguaje Visual: Brutalismo Controlado

Estética de **ingeniería gráfica e infraestructura editorial expuesta**: las costuras de la retícula no se esconden, sino que se dibujan con **filetes sólidos de `1–2 px` (o `0.75–1.5 pt` en impresión)** formando celdas, tablas técnicas y cajas de especificación visibles. Combina tipografía **monoespaciada** de consola o ficha industrial con **grotesca industrial** pesada y contraste cromático seco entre papel técnico y tinta ácida o negra.

---

## 1. Principios Compositivos y Jerarquía Visual

- **Principio rector:** Honestidad estructural absoluta ("lo que sostiene la página es visible"). Se sustituye cualquier decoración blanda por cajas ortogonales, bordes nítidos sin redondeo (`border-radius: 0`), etiquetas de índice (`[01]`, `REF //`) y tablas de datos reales. El calificativo **"controlado"** es clave: el orden matemático evita el caos ilegible del brutalismo amateur.
- **1 foco principal único:** Una **celda dominante de alto impacto** (ocupando el `45%–60%` del lienzo) que contiene o bien el titular monumental en grotesca industrial, o bien una imagen técnica cruda enmarcada en borde sólido de `2 px`, dejando el resto de celdas como soporte modular subordinado.
- **Máximo 3 niveles de lectura:**
  - **Nivel 1 (Celda protagonista / 0–2 s):** Titular industrial contundente en la celda mayor (o imagen + titular directo sin adornos).
  - **Nivel 2 (Bloque de especificación):** Subtítulo funcional o tabla breve de 2–3 filas con datos verificables de `[PRODUCT NAME]`.
  - **Nivel 3 (Celdas de metadatos / CTA):** Códigos, fecha, formato, marca y llamada a la acción en celdas inferiores separadas por líneas sólidas de `1–2 px`.

---

## 2. Estructura de Retícula

- **Columnas y módulos:** Retícula tabular visible de **4, 6 u 8 columnas** subdividida en filas desiguales (ej. fila superior `10%` de índice, fila central `55%` para foco Nivel 1, fila inferior `35%` partida en 2 o 3 celdas para Nivel 2 y Nivel 3).
- **Líneas y bordes expuestos:** Trazos rectos continuos de **`1 px` a `2 px`** (`0.5–1.5 pt` en impreso `[uncertain]`) en color `#0D0D0D`, con esquinas estrictamente en `90°` (`border-radius: 0`). Prohibidos los bordes redondeados de tarjeta SaaS o sombras difuminadas.
- **Márgenes:** Dos opciones válidas y estrictas:
  1. **Marco cerrado interior:** Margen exterior limpio de `5%–8%` (`40–60 px` en `1080 px`; `12–20 mm` en A4/A3 `[uncertain]`) rodeando una caja maestra dividida en celdas.
  2. **Retícula a sangre controlada:** Líneas que tocan los límites del soporte manteniendo margen interno (`padding`) generoso dentro de cada celda (`16–24 px` en digital; `6–10 mm` en papel) para que el texto nunca roce el borde negro.
- **Distribución asimétrica:** Romper la monotonía de tabla uniforme fusionando celdas desiguales (`col-span-3` junto a `col-span-1` apilado en 3 micro-celdas de datos) y alternando fondos papel `#EAEAE6` con una única celda activa en amarillo ácido `#E2F516` o invertida `#0D0D0D`.

---

## 3. Guía de Color y Contraste

Contraste seco de señalética industrial, formulario técnico y tinta negra sobre papel reciclado claro:

| Rol Cromático | Muestra / Referencia | HEX | CMYK de referencia `[uncertain]` | Ratio de contraste real (WCAG 2.1) | Uso permitido |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Fondo base** | Papel técnico gris cálido | `#EAEAE6` | `7C 6M 9Y 0K` | Base | Celdas principales de lectura y fondo general de retícula |
| **Tinta / Bordes** | Negro absoluto de imprenta | `#0D0D0D` | `70C 65M 65Y 92K` (o `0/0/0/100` en líneas finas `[uncertain]`) | **`16.11:1`** sobre `#EAEAE6` (AAA) | Bordes `1–2 px`, titulares Nivel 1, tablas, texto invertido (`#EAEAE6` sobre `#0D0D0D`) |
| **Acento ácido** | Amarillo señalización industrial | `#E2F516` | `15C 0M 95Y 0K` (en offset usar Pantone fluorescente/ácido para fidelidad `[uncertain]`) | **`16.02:1`** (texto `#0D0D0D` sobre `#E2F516`) (AAA) | **Fondo de una sola celda clave o botón/CTA** con texto negro `#0D0D0D` encima; nunca texto amarillo sobre papel claro |
| **Acento técnico** | Rojo sello / Error | `#C81E1E` | `10C 95M 95Y 0K` | **`4.76:1`** sobre `#EAEAE6` (AA) | Indicadores de estado, numeración crítica o alertas puntuales en Nivel 3 |

- **Acabados matéricos:** Papel reciclado mate sin estucar (`110–190 g/m²` `[uncertain]`) o interfaz digital de alto contraste sin antialiasing blando ni degradados. Prohibido el estilo "neón cyberpunk sobre negro" con resplandores (`glow`).

---

## 4. Tipografía y Ritmo

- **Familias y estilos recomendados:**
  - **Titulares (Grotesca industrial):** *Helvetica Neue / Neue Haas Grotesk Bold*, *Akzidenz-Grotesk*, *Univers 65/75*, *Space Grotesk*, *Archivo Black* o *Syne* (solo en pesos sólidos sin distorsiones ilegibles).
  - **Datos, tablas y Nivel 2/3 (Monoespaciada):** *IBM Plex Mono*, *JetBrains Mono*, *Space Mono*, *Roboto Mono* o *Courier Prime*.
- **Relación de escala:**
  - **Nivel 1 (Titular industrial):** `1.0x` (`48–100 pt` en A3, `64–108 px` en `1080x1350 px`).
  - **Nivel 2 (Especificación / Subtítulo mono):** `0.26x – 0.34x` del Nivel 1 (`14–22 pt` o `20–28 px`).
  - **Nivel 3 (Celdas tabla / Metadatos):** `0.15x – 0.20x` del Nivel 1 (`>= 8.5–10 pt` en impreso, `>= 14–16 px` en móvil `[uncertain]`).
- **Interlineado y tracking:**
  - **Nivel 1:** Interlineado `0.90 – 1.00`, tracking `-0.03em` (contundencia de bloque industrial).
  - **Nivel 2 (Monoespaciada):** Interlineado `1.25 – 1.35`, tracking `0em`.
  - **Nivel 3 (Índices / Tablas en mayúscula):** Interlineado `1.20`, tracking `+0.04em` a `+0.06em`.

---

## 5. Tono de Copy

- **Cómo suena:** Técnico, franco, anti-humo y ligeramente subversivo o utilitario. Habla en especificaciones reales, hechos verificables y verbos directos.
- **Disciplina verbal:**
  - Usar etiquetas reales de tabla (`MATERIAL:`, `PESO:`, `ENTREGA:`, `ALCANCE:`) en lugar de párrafos promocionales blandos.
  - Prohibido el lenguaje adulador (*"Pensado con amor para ti"*).
  - Funciona muy bien exponer la promesa como una **ficha técnica honesta** sin adjetivos vacíos.

---

## 6. Reglas Anti-IA Específicas

La IA confunde con frecuencia el "brutalismo controlado" con "web rota de 1996" o "cyberpunk neón":
1. **Caos ilegible sin retícula:** Textos amontonados en 6 ángulos y fuentes ilegibles que destruyen la lectura en 2 segundos. **Corrección:** Mantener **estructura ortogonal estricta (`0°` / `90°`)**, celdas alineadas y máximo 3 niveles de lectura claros.
2. **Neobrutalismo de plantilla web infantil:** Sombras negras desplazadas (`box-shadow: 6px 6px 0 #000`) en tarjetas redondeadas con colores pastel morado/rosa. **Corrección:** Eliminar sombras de botón de juguete, usar esquinas rectas `0 px` y retícula compartida de `1–2 px`.
3. **Brillo neón cyberpunk (`glow`):** Fondos negros con texto verde/rosa brillante difuminado. **Corrección:** Base clara de papel técnico `#EAEAE6` con tinta `#0D0D0D` y acento plano sólido `#E2F516`.
4. **Tablas rellenas de texto falso (`lorem` o datos inventados):** Celdas llenas de cifras sin sentido. **Corrección:** Cada celda de tabla debe aportar un dato real o marcador explícito del producto/evento.
5. **Exceso de iconos de alerta o códigos de barras falsos gigantes:** Relleno estético sin información real. **Corrección:** Si se incluye numeración o código técnico, que corresponda a edición, formato o referencia real del proyecto.

- **Modificadores positivos:** `controlled Swiss brutalism graphic design, exposed 1px and 2px solid black grid borders #0D0D0D, technical specification table layout, zero border-radius, industrial grotesk headline paired with crisp monospace metadata, matte off-white technical paper #EAEAE6, single acid yellow accent cell #E2F516, high contrast flat ink`
- **Modificadores negativos:** `cyberpunk neon glow, rounded cartoon neobrutalism cards with offset drop shadows, pastel colors, chaotic overlapping unreadable text, 3D gradients, glassmorphism, glossy finish, fake gibberish tables`

---

## 7. Ejemplo Aplicado

- **Contexto:** Pieza brutalista controlada (`4:5` o `A3` / `MUPI`) para `[PRODUCT NAME]` dirigido a `[AUDIENCE]`, con tono `[TONE]` y voz `[BRAND VOICE]`.
- **Composición:** Caja maestra en `#EAEAE6` con retícula expuesta de 4 columnas y bordes sólidos `#0D0D0D` de `2 px`:
  - **Fila superior (índice mono, `#0D0D0D`, Nivel 3):** `[REF // 2026]` | `[PRODUCT NAME]` | `ESTADO: DISPONIBLE` (`#C81E1E`)
  - **Fila central (Foco principal — Celda col. 1–3, grotesca industrial `#0D0D0D`, escala `1.0x`, Nivel 1):**
    `FUNCIONA SIN ADORNOS.` *(o titular técnico directo para `[PRODUCT NAME]`)*
  - **Celda lateral derecha (col. 4, fondo `#E2F516` con texto `#0D0D0D`, Nivel 2, mono, escala `0.30x`):**
    `PARA: [AUDIENCE]` / `USO: INMEDIATO` *(adaptado a `[TONE]` y `[BRAND VOICE]`)*
  - **Fila inferior (Tabla técnica de 2 celdas, Nivel 2/3, `#0D0D0D` sobre `#EAEAE6`):**
    `ESPECIFICACIÓN: [Resumen concreto sin humo de [PRODUCT NAME]]` | `VOZ: [BRAND VOICE] · VER FICHA`
