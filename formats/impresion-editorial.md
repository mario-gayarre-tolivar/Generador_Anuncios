# Especificaciones Técnicas: Impresión Editorial y Papelería (ISO 216 / Prensa)

Guía técnica de preimpresión para piezas impresas de lectura cercana y media distancia bajo norma internacional **ISO 216** (series A y B), formatos comerciales estándar y prensa periódica.

---

## 1. Relación de aspecto y Dimensiones Físicas

| Formato | Dimensiones finales cortadas | Relación de aspecto | Soporte habitual |
| :--- | :--- | :--- | :--- |
| **ISO A6** | `105 x 148 mm` (`10.5 x 14.8 cm`) | `1:1.414` (`1:√2`) | Postal, flyer de bolsillo, invitación |
| **ISO A5** | `148 x 210 mm` (`14.8 x 21.0 cm`) | `1:1.414` (`1:√2`) | Flyer estándar, programa de mano, octavilla |
| **ISO A4** | `210 x 297 mm` (`21.0 x 29.7 cm`) | `1:1.414` (`1:√2`) | Hoja corporativa, catálogo, cartel interior cercano, inserto revista |
| **ISO A3** | `297 x 420 mm` (`29.7 x 42.0 cm`) | `1:1.414` (`1:√2`) | Cartel escaparate / interior, díptico A4 cerrado |
| **ISO A2** | `420 x 594 mm` (`42.0 x 59.4 cm`) | `1:1.414` (`1:√2`) | Cartel cultural / comercial de pared |
| **ISO B2** | `500 x 700 mm` (`50.0 x 70.0 cm`) `[uncertain]` | `5:7` (`1:1.4`, cercano a `1:√2`) | Póster editorial / cartel de eventos |
| **ISO B1** | `700 x 1000 mm` (`70.0 x 100.0 cm`) `[uncertain]` | `7:10` (`1:1.428`) | Cartel gran sala / marquesina interior |
| **Flyer DL** | `99 x 210 mm` (o `100 x 210 mm` `[uncertain]`) | `~1:2.12` | Tríptico A4 cerrado, sobre americano, buzoneo |
| **Página Revista / Prensa** | Según cabecera (típico revista `210 x 297 mm` o `200 x 275 mm`; prensa tabloide/berliner varía) `[uncertain]` | Variable (`~1:1.35 – 1:1.45`) | Inserción publicitaria editorial |

---

## 2. Resolución / DPI y Preimpresión

- **Resolución mínima obligatoria:** **`300 DPI`** reales a tamaño final (`1:1`) para imágenes rasterizadas (fotografías, fondos, texturas).
  - Equivalente en píxeles para **A4 (`210 x 297 mm`) a 300 DPI**: `2480 x 3508 px` (sin sangrado) / `2551 x 3579 px` (con `3 mm` de sangrado).
  - Equivalente en píxeles para **A3 (`297 x 420 mm`) a 300 DPI**: `3508 x 4961 px` (sin sangrado).
- **Line Art / 1-bit:** `600 – 1200 DPI` si se incluyen grabados o tipografía rasterizada en blanco y negro puro.
- **Prensa diaria (papel periódico):** `170 – 200 DPI` efectivos (lineatura `85–100 LPI`) `[uncertain]` según rotativa y ganancia de punto del papel prensa.
- **Color y archivo final:**
  - Modo **CMYK**; perfiles habituales en Europa: `ISO Coated v2 (ECI)` / `FOGRA39` o `PSO Coated v3 / FOGRA51` para papel estucado, `FOGRA47` / `FOGRA52` para offset sin estucar `[uncertain]` según especificación de la imprenta.
  - **Límite de cobertura de tinta (TAC):** Máximo `300%` en estucado y `240–260%` en prensa/no estucado `[uncertain]`.
  - **Negro tipográfico:** Textos pequeños y cuerpos en negro puro **`0C 0M 0Y 100K`** (con sobreimpresión en cuerpos `< 14 pt`), nunca negro enriquecido (`4 tintas`), para evitar halos por desajuste de registro.
  - Exportar en **`PDF/X-1a:2001`** o **`PDF/X-4`** con fuentes incrustadas/trazadas y marcas de corte fuera del sangrado.

---

## 3. Márgenes de seguridad

Los márgenes internos protegen textos, logotipos y marcos contra tolerancias mecánicas de guillotina (`±1–2 mm`) o pérdida en el lomo de publicaciones encuadernadas:

| Soporte | Margen de seguridad interno desde línea de corte | Consideraciones adicionales |
| :--- | :--- | :--- |
| **Tarjetas / Flyers A6, A5, DL** | **`5 mm`** mínimo (recomendado `6 – 8 mm`) | No colocar marcos finos paralelos a menos de `5 mm` del borde (delatan cualquier desvío de corte) |
| **A4 / Folletos / Catálogos** | **`8 – 12 mm`** en bordes exteriores; **`15 – 20 mm`** en margen interior (lomo) | En encuadernación fresada/rústica dejar mínimo `15 mm` libres en el lomo `[uncertain]` |
| **Carteles A3, A2, B2, B1** | **`10 – 15 mm`** perimetrales | Respetar retícula editorial amplia (`15–25 mm`) si lleva filetes perimetrales |
| **Prensa / Revistas** | **`10 – 15 mm`** desde el corte (sangre) o caja interior definida por el medio `[uncertain]` | Consultar ficha técnica exacta de la cabecera antes de cerrar arte |

---

## 4. Sangrado (Bleed)

- **Estándar general de papelería y flyers (A6, A5, A4, DL):** **`3 mm`** en cada uno de los cuatro lados (ej. A4 `210 x 297 mm` → documento con sangrado `216 x 303 mm`).
- **Revistas, catálogos gruesos y cartelería editorial (A3, A2, B2, B1):** **`3 mm` a `5 mm`** según requerimiento de guillotina o encuadernación de la imprenta `[uncertain]`.
- **Prensa periódica:**
  - Anuncios en caja modular: **`0 mm`** (encajados en columna).
  - Anuncios a sangre (página completa): **`5 mm`** `[uncertain]` según cabecera.
- **Regla de oro:** Toda fotografía, fondo de color o filete que toque el borde final del papel debe extenderse exactamente hasta el límite exterior del sangrado.

---

## 5. Distancia de lectura y legibilidad

- **En mano (`30 – 45 cm`):** Flyers A6/A5/DL, catálogos A4, revistas y prensa.
- **Cartelería interior (`0.8 – 3 m`):** Carteles A3, A2, B2 y B1 en escaparates, salas o pasillos.

| Soporte y Distancia | Titular mínimo (`pt`) | Subtítulo (`pt`) | Cuerpo de texto (`pt`) | Legal / Nota al pie (`pt`) | Máximo de palabras recomendadas por impacto |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Flyer / A5 / A4 (`30 – 45 cm`)** | `18 – 36 pt` | `12 – 16 pt` | `9 – 11 pt` (mínimo `8.5 pt`) | `6.5 – 7.5 pt` (en K100%, nunca en negativo calado sobre 4 tintas) | Anverso flyer: `15 – 35` palabras · Reverso informativo: `60 – 150` palabras |
| **Prensa / Revista (`35 – 45 cm`)** | `24 – 48 pt` | `13 – 18 pt` | `9 – 10.5 pt` | `6.5 – 7 pt` | Anuncio página: `20 – 60` palabras totales |
| **Cartel A3 / A2 (`1 – 2 m`)** | `48 – 96 pt` (`17–34 mm`) | `22 – 36 pt` | `14 – 18 pt` (si hay detalle cercano) | `10 – 12 pt` | `10 – 25` palabras visibles a distancia + bloque breve de fecha/lugar |
| **Cartel B2 / B1 (`2 – 4 m`)** | `72 – 150 pt` (`25–53 mm`) | `30 – 48 pt` | `18 – 24 pt` | `12 – 14 pt` | `8 – 18` palabras principales |

- **Tipografía en negativo (texto blanco sobre fondo oscuro):** Aumentar el cuerpo al menos `+0.5` a `+1 pt` y evitar serifas muy finas (`Hairline`), ya que la expansión de tinta en papel cierra los blancos internos de la letra.
