# Especificaciones Técnicas: Redes Sociales

Guía técnica para piezas publicitarias y orgánicas en plataformas sociales (Instagram, TikTok, Facebook, LinkedIn, YouTube y X). Todas las medidas responden a visualización en pantalla móvil y escritorio.

---

## 1. Relación de aspecto y Dimensiones

| Formato / Ubicación | Relación de aspecto | Dimensiones base (px) | Orientación | Uso recomendado |
| :--- | :--- | :--- | :--- | :--- |
| **Feed Vertical / Retrato (IG / FB / LinkedIn)** | `4:5` (`0.8:1`) | `1080 x 1350 px` | Vertical | Pieza principal de feed con mayor superficie vertical en pantalla móvil |
| **Feed Cuadrado (Multired / Carrusel)** | `1:1` | `1080 x 1080 px` | Cuadrada | Carruseles simétricos y compatibilidad universal |
| **Stories / Reels / TikTok / YT Shorts** | `9:16` (`0.5625:1`) | `1080 x 1920 px` | Vertical completa | Anuncios a pantalla completa y vídeo vertical corto |
| **Carrusel Continuo 4:5 (ej. 4 láminas)** | `16:5` (`3.2:1` total) | `4320 x 1350 px` (cortar en `1080 x 1350 px`) | Panorámica segmentada | Narrativa editorial continua entre diapositivas |
| **Link Ad / Feed Horizontal (FB / LinkedIn / X)** | `1.91:1` | `1200 x 628 px` | Horizontal | Anuncios con enlace externo y tarjetas Open Graph |
| **Vídeo / Miniatura Horizontal (YouTube / X)** | `16:9` | `1920 x 1080 px` (mín. `1280 x 720 px`) | Horizontal | Pre-roll, vídeo in-stream y miniaturas |

---

## 2. Resolución / DPI

- **Resolución en pantalla:** En medios digitales no existe conversión física fija por impresión; el estándar se define por **dimensiones exactas en píxeles (`px`)** con base de ancho `1080 px` (o `1920 px` en `16:9`).
- **DPI de exportación:** `72 PPI / DPI` (valor nominal de metadato web; no altera el tamaño en pantalla si se respetan los píxeles exactos). Para piezas editoriales muy nítidas en carruseles estáticos se puede exportar a `1440 x 1800 px` (`4:5`) o `2160 x 2160 px` (`1:1`) siempre respetando el límite de peso de la plataforma `[uncertain]`.
- **Espacio de color y formato:** `sRGB IEC61966-2.1` (8 bits). Exportar estáticos en `PNG` (gráfica vectorial/tipografía plana) o `JPG` calidad `85–92%` (fotografía) para evitar artefactos de recompresión agresiva de Meta/TikTok `[uncertain]`.

---

## 3. Márgenes de seguridad (Safe Zones y Zonas Muertas de UI)

Las interfaces de Stories, Reels y TikTok superponen avatares, botones de interacción, descripciones y barras de sistema sobre el lienzo `1080 x 1920 px`. Ningún texto, logotipo ni rostro clave debe invadir estas zonas muertas `[uncertain]` (varían ligeramente según versión de app y relación de pantalla del dispositivo):

| Formato | Margen superior | Margen inferior | Margen izquierdo | Margen derecho | Zona útil segura resultante |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Instagram / FB Stories (`9:16`)** | `250 px` (perfil y barra progreso) | `340 px` (respuesta / sticker enlace) | `60 px` | `60 px` | `960 x 1330 px` |
| **Instagram Reels (`9:16`)** | `220 px` | `420 px` (usuario, caption, audio) | `60 px` | `140 px` (like, comentar, compartir) | `880 x 1280 px` |
| **TikTok In-Feed (`9:16`)** | `200 px` (pestañas Siguiendo/Para ti) | `440–480 px` (caption, música, CTA) `[uncertain]` | `60 px` | `150 px` (columna de iconos) | `870 x 1240 px` |
| **YouTube Shorts (`9:16`)** | `220 px` | `400 px` | `60 px` | `140 px` | `880 x 1280 px` |
| **Feed `4:5` (`1080 x 1350 px`)** | `72 px` | `72 px` | `72 px` | `72 px` | `936 x 1206 px` (si se recorta a `1:1` en perfil, mantener foco en centro `1080 x 1080 px`) |
| **Feed `1:1` (`1080 x 1080 px`)** | `64 px` | `64 px` | `64 px` | `64 px` | `952 x 952 px` |
| **Horizontal `1.91:1` / `16:9`** | `60 px` | `60 px` | `80 px` | `80 px` | Área central libre de bordes |

---

## 4. Sangrado

- **Sangrado:** `0 mm (No aplica en soporte pantalla, usar margen de seguridad interno)`.
- En soportes digitales el corte coincide exactamente con los límites del lienzo en píxeles; el fondo o fotografía se lleva al 100% del borde (`0 px` de marco blanco accidental salvo diseño intencional), protegiendo la información mediante los **márgenes de seguridad** de la sección anterior.

---

## 5. Distancia de lectura y legibilidad

- **Distancia de lectura habitual:** `30 – 50 cm` (teléfono móvil en mano) a `50 – 70 cm` (portátil/monitor).
- **Regla de escala en lienzo base `1080 px` de ancho:**

| Nivel jerárquico | Tamaño mínimo recomendado (`1080 px` ancho) | Tamaño equivalente aproximado en pantalla móvil | Interlineado sugerido |
| :--- | :--- | :--- | :--- |
| **Titular principal** | `64 – 96 px` (mínimo absoluto `54 px`) | `~11 – 16 mm` en pantalla de 6" `[uncertain]` | `1.05 – 1.15` |
| **Subtítulo / Dato clave** | `36 – 48 px` | `~6 – 8 mm` | `1.2 – 1.3` |
| **Cuerpo / Nota / CTA gráfico** | `26 – 32 px` (mínimo absoluto `22 px`) | `~4.5 – 5.5 mm` | `1.3 – 1.4` |
| **Texto legal / Pie mínimo** | `18 – 22 px` (evitar si no es obligatorio) | `~3 – 3.8 mm` | `1.2` |

- **Límite de palabras recomendado por impacto:**
  - **Stories / Reels / TikTok (`9:16`):** Máximo `6 – 12 palabras` visibles simultáneamente en pantalla por golpe visual (el usuario decide en `1 – 2 s` antes de deslizar).
  - **Feed (`4:5` / `1:1`):** Máximo `8 – 15 palabras` en la imagen principal; el contexto extenso debe ir en el copy de la publicación, nunca sobrecargando el arte.
  - **Carrusel:** `1` idea por lámina, máximo `15 – 25 palabras` por diapositiva si es informativo.
- **Contraste:** Relación de contraste mínima `4.5:1` para texto estándar y `3:1` para titulares grandes sobre fotografía (usar velo de contraste localizado o reserva tipográfica limpia).
