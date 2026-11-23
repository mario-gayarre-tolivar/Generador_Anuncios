# Especificaciones Técnicas: Web Banners y Display (Estándares IAB)

Guía técnica para banners publicitarios display basados en especificaciones del **IAB (Interactive Advertising Bureau)** y cabeceras web (`Hero`). Todos los formatos operan exclusivamente en entorno digital.

---

## 1. Relación de aspecto y Dimensiones Estándar IAB

| Nombre del Formato | Dimensiones (`@1x`) | Dimensiones Retina (`@2x`) | Relación de aspecto | Dispositivo / Ubicación habitual |
| :--- | :--- | :--- | :--- | :--- |
| **Leaderboard** | `728 x 90 px` | `1456 x 180 px` | `8.09:1` (`728:90`) | Cabecera superior escritorio |
| **Medium Rectangle (MPU / Robapáginas)** | `300 x 250 px` | `600 x 500 px` | `6:5` (`1.2:1`) | Columna lateral o integrado en contenido (escritorio y móvil) |
| **Wide Skyscraper (Rascacielos)** | `160 x 600 px` | `320 x 1200 px` | `4:15` (`1:3.75`) | Barra lateral vertical escritorio |
| **Half Page (Doble MPU)** | `300 x 600 px` | `600 x 1200 px` | `1:2` (`0.5:1`) | Columna lateral de alto impacto escritorio |
| **Billboard** | `970 x 250 px` | `1940 x 500 px` | `3.88:1` (`97:25`) | Cabecera principal de ancho completo escritorio |
| **Mobile Banner** | `320 x 50 px` | `640 x 100 px` | `32:5` (`6.4:1`) | Franja superior o inferior en web móvil |
| **Large Mobile Banner** | `320 x 100 px` | `640 x 200 px` | `16:5` (`3.2:1`) | Franja móvil ampliada |
| **Web Hero Banner (Escritorio)** | `1920 x 1080 px` / `1440 x 600 px` `[uncertain]` | `3840 x 2160 px` / `2880 x 1200 px` | `16:9` / `12:5` | Cabecera principal de landing page (adaptable/responsive) |

---

## 2. Resolución / DPI

- **Resolución de pantalla:** Dimensiones exactas en píxeles (`px`) a escala `1:1` (`@1x`) o doble densidad (`@2x`) para pantallas HiDPI/Retina.
- **DPI nominal:** `72 PPI / DPI` o `96 PPI / DPI` (la densidad física depende del monitor del usuario; en web solo cuentan las dimensiones exactas en píxeles).
- **Peso de archivo y perfil:**
  - Perfil de color `sRGB IEC61966-2.1`.
  - Peso máximo habitual según guía IAB y redes programáticas: `150 KB` para carga inicial en formatos estándar (`300x250`, `728x90`, `160x600`, `320x50`) y hasta `200–250 KB` en formatos grandes (`300x600`, `970x250`) `[uncertain]` según ad server / DSP.
  - Formatos de entrega: `WebP`, `JPG`, `PNG` o `HTML5` (`zip` autocontenido sin peticiones externas no autorizadas).

---

## 3. Márgenes de seguridad

En banners IAB el espacio es muy reducido y las plataformas pueden añadir un icono de cierre o etiqueta de privacidad (`AdChoices` / `Info`, normalmente `~15x15 px` a `20x20 px` en una esquina superior `[uncertain]`).

| Formato | Margen interno de seguridad | Reglas de borde y zonas reservadas |
| :--- | :--- | :--- |
| **`320 x 50 px` y `728 x 90 px`** | `8 – 12 px` perimetrales | Evitar colocar texto crítico en la esquina superior derecha (`20 x 20 px`) reservada al icono `AdChoices` `[uncertain]` |
| **`320 x 100 px` y `160 x 600 px`** | `12 – 16 px` perimetrales | Mantener botón CTA y logotipo con aire mínimo de `12 px` respecto al borde |
| **`300 x 250 px` y `300 x 600 px`** | `16 – 24 px` perimetrales | Dejar esquina superior derecha despejada (`24 x 24 px`) |
| **`970 x 250 px` (Billboard)** | `24 – 36 px` perimetrales | Separar claramente zona visual de la zona tipográfica y CTA |
| **Web Hero (`1920 x 1080` / `1440 x 600`)** | `80 – 160 px` laterales, `60 – 100 px` sup./inf. | Centrar contenido crítico en un contenedor seguro (`1140–1200 px` de ancho) para resistir recortes responsive en móvil y tablet |

- **Regla de contorno IAB:** Si el fondo del banner es blanco o muy claro, añadir un borde interior de `1 px` sólido en gris medio/oscuro (`#CCCCCC` o `#333333`) para delimitar el anuncio del contenido editorial de la página.

---

## 4. Sangrado

- **Sangrado:** `0 mm (No aplica en soporte pantalla, usar margen de seguridad interno)`.
- Los banners web se renderizan en contenedores `<iframe>` o etiquetas `<img>` recortadas exactamente al píxel declarado; no existe guillotina ni exceso de corte.

---

## 5. Distancia de lectura y legibilidad

- **Distancia de lectura:** `45 – 70 cm` en monitor de escritorio; `30 – 45 cm` en teléfono móvil.
- **Tamaños mínimos tipográficos en píxeles (`@1x`) y máximo de palabras:**

| Formato | Titular mínimo (`px`) | Subtítulo / Cuerpo (`px`) | CTA / Legal mínimo (`px`) | Máximo de palabras recomendadas por impacto |
| :--- | :--- | :--- | :--- | :--- |
| **`320 x 50 px`** | `15 – 18 px` | Omitir o `11 – 12 px` (máx. 1 línea) | CTA `12 px` · Legal: evitar | `3 – 6 palabras` (titular + CTA) |
| **`728 x 90 px`** | `18 – 26 px` | `12 – 14 px` | CTA `13 – 14 px` · Legal `10 px` | `5 – 8 palabras` |
| **`320 x 100 px`** | `18 – 24 px` | `12 – 13 px` | CTA `12 – 14 px` · Legal `10 px` | `5 – 8 palabras` |
| **`160 x 600 px`** | `20 – 26 px` | `13 – 15 px` | CTA `13 – 14 px` · Legal `10 px` | `6 – 10 palabras` (líneas cortas, máx. 2–3 palabras/línea) |
| **`300 x 250 px`** | `22 – 30 px` | `13 – 16 px` | CTA `13 – 15 px` · Legal `10 px` | `6 – 10 palabras` |
| **`300 x 600 px`** | `28 – 38 px` | `15 – 18 px` | CTA `14 – 16 px` · Legal `10 – 11 px` | `8 – 14 palabras` |
| **`970 x 250 px`** | `32 – 44 px` | `16 – 20 px` | CTA `15 – 16 px` · Legal `11 px` | `8 – 14 palabras` |
| **Web Hero (`1440–1920 px`)** | `48 – 72 px` | `18 – 24 px` | CTA `16 – 18 px` · Legal `12 px` | `10 – 18 palabras` (titular ≤ 7 palabras + subtítulo breve) |

- **Regla de claridad:** En formatos estrechos (`160x600`, `728x90`, `320x50`) está prohibido usar tipografías ultracondensadas o trazos finos (`Light`/`Thin` `< 16 px`), ya que el subpixel rendering los vuelve ilegibles.
