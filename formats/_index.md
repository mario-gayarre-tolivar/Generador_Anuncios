# Biblioteca Técnica de Formatos y Dimensiones (Índice Maestro)

Referencia técnica unificada para diseño gráfico, publicidad digital, preimpresión editorial y gran formato exterior (OOH). Todo formato seleccionado en el flujo del sistema debe respetar estos cinco ejes obligatorios: **Relación de aspecto**, **Resolución / DPI**, **Márgenes de seguridad**, **Sangrado** y **Distancia de lectura y legibilidad**.

---

## Catálogo de Guías por Soporte

| Guía Técnica | Ámbito | Formatos Principales | Archivo |
| :--- | :--- | :--- | :--- |
| **Redes Sociales** | Vídeo vertical, feed y carruseles | `1:1`, `4:5`, `9:16`, `16:9` (1080 px base) | [redes-sociales.md](./redes-sociales.md) |
| **Web y Display Banners** | Estándares IAB y cabeceras web | `728x90`, `300x250`, `160x600`, `300x600`, `970x250`, Hero | [web-banners.md](./web-banners.md) |
| **Impresión Editorial** | Estándar ISO 216, flyers y prensa | `A6`, `A5`, `A4`, `A3`, `A2`, `B2`, `DL`, prensa | [impresion-editorial.md](./impresion-editorial.md) |
| **Gran Formato y OOH** | Exterior, mobiliario urbano y PLV | `MUPI 120x175 cm`, `Valla 8x3 m`, `Roll-up 85x200 cm`, lonas | [gran-formato-ooh.md](./gran-formato-ooh.md) |

---

## Tabla Maestra Comparativa

| Soporte / Formato | Relación de aspecto | Resolución / DPI | Márgenes de seguridad | Sangrado | Distancia de lectura y legibilidad |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Social Feed (4:5)** | `4:5` (`0.8:1`) | `1080 x 1350 px` (pantalla sRGB) | `60–90 px` internos | `0 mm` (No aplica en soporte pantalla, usar margen de seguridad interno) | `0.3–0.5 m` · Titular `≥ 64 px` · Máx. `8–15` palabras |
| **Reels / TikTok / Stories** | `9:16` (`0.5625:1`) | `1080 x 1920 px` (pantalla sRGB) | Sup. `250 px`, Inf. `380–420 px`, Der. `140 px` `[uncertain]` | `0 mm` (No aplica en soporte pantalla, usar margen de seguridad interno) | `0.3–0.5 m` · Titular `≥ 68 px` · Máx. `6–12` palabras |
| **IAB Robapáginas** | `6:5` (`1.2:1`) | `300 x 250 px` (`600 x 500 px` `@2x`) | `16–20 px` internos | `0 mm` (No aplica en soporte pantalla, usar margen de seguridad interno) | `0.4–0.7 m` · Titular `≥ 24 px` · Máx. `5–10` palabras |
| **IAB Leaderboard** | `8.09:1` | `728 x 90 px` (`1456 x 180 px` `@2x`) | `8–12 px` internos | `0 mm` (No aplica en soporte pantalla, usar margen de seguridad interno) | `0.5–0.7 m` · Titular `≥ 18 px` · Máx. `4–8` palabras |
| **ISO 216 (A5 / A4 / A3)** | `1:1.414` (`1:√2`) | `300 DPI` reales (CMYK 1:1) | `5–12 mm` desde línea de corte | `3 mm` (`5 mm` en catálogos/cartel `[uncertain]`) | `0.3–1.5 m` · Cuerpo `≥ 8.5–10 pt` · Titular `18–72 pt` |
| **MUPI / OPI** | `~1:1.46` (`24:35`) | `120 x 175 cm` a `100–150 DPI` reales `[uncertain]` | `40–60 mm` perimetrales (marco) | `10–25 mm` `[uncertain]` | `2–10 m` · Titular `≥ 45–70 mm` · Máx. `6–10` palabras |
| **Roll-up Estándar** | `17:40` (`1:2.35`) | `85 x 200 cm` a `100–150 DPI` reales `[uncertain]` | `50 mm` lat./sup., `120–150 mm` inf. | `10 mm` sup./lat. + `150 mm` cola inf. `[uncertain]` | `1.5–4 m` · Titular `≥ 35–60 mm` · Máx. `8–15` palabras |
| **Valla Publicitaria** | `8:3` (`2.67:1`) | `800 x 300 cm` a `30–72 DPI` reales (o 1:10 a `300 DPI`) `[uncertain]` | `100–150 mm` perimetrales | `20–50 mm` según montaje `[uncertain]` | `15–60 m` · Titular `≥ 250–400 mm` · Máx. `5–8` palabras |

---

## Fórmulas de Distancia de Lectura y Legibilidad

Para garantizar legibilidad óptica real sin depender de suposiciones estéticas:

### 1. Altura mínima tipográfica según distancia física (Impresión y OOH)

La altura de letra mayúscula ($H_{\min}$) requerida para lectura cómoda bajo iluminación normal y alto contraste sigue la proporción ergonómica estándar de señalética:

$$H_{\min}\text{ (mm)} \approx \frac{\text{Distancia de lectura (mm)}}{250}$$

*Regla práctica equivalente:* **`~4 mm` de altura de carácter por cada `1 metro` de distancia** para titulares principales (umbral límite de agudeza visual en torno a `2.5–3 mm/m`; para lectura en movimiento o bajo contraste moderado se recomienda subir a `5–8 mm/m` `[uncertain]`).

| Distancia de lectura ($D$) | Altura mínima cuerpo / secundario | Altura recomendada titular principal | Tiempo de exposición típico | Máximo de palabras por impacto |
| :--- | :--- | :--- | :--- | :--- |
| **`0.3 – 0.5 m`** (mano / móvil / escritorio) | `8.5 – 10 pt` (`~3 – 3.5 mm`) / `13–16 px` | `18 – 36 pt` (`~6.3 – 12.7 mm`) / `24–64 px` | `3 – 15 s` | `10 – 25` palabras (feed/flyer) |
| **`1 – 2 m`** (cartel A3/B2, roll-up cercano) | `24 – 36 pt` (`8.5 – 13 mm`) | `72 – 140 pt` (`25 – 50 mm`) | `2 – 5 s` | `8 – 15` palabras |
| **`3 – 8 m`** (MUPI peatonal, escaparate) | `15 – 25 mm` | `45 – 80 mm` | `2 – 4 s` | `6 – 10` palabras |
| **`15 – 50 m`** (valla 8x3 m, lona tráfico) | `80 – 150 mm` (evitar cuerpo largo) | `250 – 500 mm` | `1.5 – 3 s` | `5 – 8` palabras |

### 2. Escala y Resolución efectiva en Preimpresión vs Gran Formato

$$\text{Píxeles necesarios} = \frac{\text{Dimensión física (cm)}}{2.54} \times \text{DPI objetivo}$$

- **Lectura en mano (`< 0.5 m`):** `300 DPI` a tamaño final (`1:1`).
- **Cartelería de media distancia (`1 – 5 m`):** `100 – 150 DPI` a tamaño final (`1:1`).
- **Gran formato lejano (`> 10 m`):** `30 – 72 DPI` a tamaño final (`1:1`), habitualmente trabajado a escala `1:10` a `300 – 600 DPI` en el archivo maestro `[uncertain]` según especificaciones del RIP de la imprenta.

---

## Criterios Transversales de Sangrado y Márgenes

- **Relación de aspecto:** Nunca estirar ni recortar un arte maestro sin recomponer su retícula. Adaptar un `16:9` a `9:16` exige redistribuir jerarquía y foco, no hacer zoom destructivo.
- **Resolución / DPI:** En pantalla mandan las dimensiones exactas en píxeles (`px`) y perfil `sRGB IEC61966-2.1`. En impresión manda la densidad (`DPI`) al tamaño físico final en perfil CMYK acordado con imprenta.
- **Márgenes de seguridad:** Todo texto, logotipo y elemento crítico debe quedar dentro de la zona segura para evitar guillotina irregular, marcos físicos o botones de interfaz móvil.
- **Sangrado:** Toda gráfica impresa con fondo o imagen a sangre debe extender el fondo más allá de la línea de corte (`3–5 mm` en editorial; `10–25 mm` o más en OOH `[uncertain]`). En formatos digitales se declara explícitamente `0 mm (No aplica en soporte pantalla, usar margen de seguridad interno)`.
