# Especificaciones Técnicas: Gran Formato y Publicidad Exterior (OOH)

Guía técnica para soportes de vía pública, mobiliario urbano y puntos de venta/ferias (**MUPI / OPI**, **Vallas**, **Roll-ups** y **Lonas**). En gran formato el diseño se evalúa en centímetros/metros reales y por tiempo de exposición en movimiento.

---

## 1. Relación de aspecto y Dimensiones Reales

| Soporte OOH | Dimensión total estándar | Área visual visible típica | Relación de aspecto | Entorno habitual |
| :--- | :--- | :--- | :--- | :--- |
| **MUPI / OPI estándar** | `120 x 175 cm` (`1200 x 1750 mm`) | `~116 x 171 cm` (descontando marco) `[uncertain]` | `~1:1.46` (`24:35`) | Marquesinas de autobús, aceras peatonales, centros comerciales |
| **Valla publicitaria estándar** | `800 x 300 cm` (`8 x 3 m`) | `~780 x 280 cm` (según perfil/marco) `[uncertain]` | `8:3` (`2.67:1`) | Carreteras, accesos urbanos, medianas |
| **Valla urbana / Monoposte medio** | `400 x 300 cm` (`4 x 3 m`) `[uncertain]` | `~380 x 280 cm` | `4:3` (`1.33:1`) | Entornos urbanos densos |
| **Roll-up estándar** | `85 x 200 cm` (`850 x 2000 mm`) (+ cola inferior) | `85 x 200 cm` | `17:40` (`1:2.35`) | Ferias, congresos, recepción, retail interior |
| **Roll-up ancho (alternativo)** | `100 x 200 cm` o `120 x 200 cm` `[uncertain]` | `100 x 200 cm` / `120 x 200 cm` | `1:2` / `3:5` | Stands amplios |
| **Lona / Pancarta exterior** | A medida (ej. `300 x 200 cm`, `600 x 300 cm`) `[uncertain]` | Variable según ojales/vaina | `3:2`, `2:1`, etc. | Fachadas, andamios, cerramientos |

---

## 2. Resolución / DPI y Escala de Maquetación

A diferencia de la impresión en mano, los archivos de gran formato se visualizan a varios metros; imprimir a `300 DPI` a tamaño `8 x 3 m` generaría archivos innecesariamente gigantes sin mejora visual perceptible.

| Soporte | DPI reales recomendados a escala `1:1` | Equivalente práctico trabajando a escala | Notas de preimpresión |
| :--- | :--- | :--- | :--- |
| **Roll-up (`85 x 200 cm`)** | **`100 – 150 DPI`** a `1:1` `[uncertain]` | Escala `1:1` a `100–150 DPI` (o `1:2` a `200–300 DPI`) | Lectura cercana (`1.5–4 m`); exige buena nitidez en rostros y productos |
| **MUPI / OPI (`120 x 175 cm`)** | **`72 – 150 DPI`** a `1:1` `[uncertain]` | Escala `1:1` a `100–120 DPI` (o `1:5` a `500–600 DPI` / `1:10` a `1000 DPI` si es solo vectorial+foto) | En MUPI retroiluminado (backlit) la luz trasera suaviza contrastes; consultar perfil de tinta al proveedor `[uncertain]` |
| **Valla `8 x 3 m` (`800 x 300 cm`)** | **`30 – 72 DPI`** a `1:1` `[uncertain]` | Escala **`1:10`** (`80 x 30 cm`) a **`300 – 500 DPI`** (equivale a `30–50 DPI` reales) `[uncertain]` | Mantener textos y logotipos siempre en **vector** para que el RIP los rasterice a la resolución máxima del cabezal |
| **Lonas grandes (`> 5 m`)** | **`25 – 50 DPI`** a `1:1` `[uncertain]` | Escala `1:10` a `250 – 500 DPI` `[uncertain]` | Si es lona microperforada (mesh), evitar textos pequeños o tramas finas |

- **Color:** CMYK según perfil solicitado por el impresor de gran formato (habitualmente `FOGRA39` / `ISO Coated v2` o perfil propio del plotter solvente/UV `[uncertain]`). Para negros profundos en grandes masas sólidas usar negro enriquecido equilibrado según ficha del taller (ej. `40C 30M 30Y 100K` `[uncertain]`).

---

## 3. Márgenes de seguridad

| Soporte | Margen de seguridad interno | Zona muerta / mecánica específica |
| :--- | :--- | :--- |
| **MUPI / OPI (`120 x 175 cm`)** | **`40 – 60 mm`** en los 4 lados | El marco metálico/cristal del mueble tapa entre `20` y `35 mm` por lado `[uncertain]` |
| **Valla `8 x 3 m`** | **`100 – 150 mm`** en los 4 lados | En vallas de papel por paños o lona tensada, los bordes sufren solapes, molduras o sombras del marco |
| **Roll-up (`85 x 200 cm`)** | **`50 mm`** laterales y superior; **`100 – 150 mm`** libres abajo | La parte inferior queda cerca del suelo y del rodillo tensor; evitar colocar ahí URLs o texto legal importante `[uncertain]` |
| **Lonas con ojales / vainas** | **`80 – 120 mm`** en los lados con ojales/vaina `[uncertain]` | Los ojales metálicos perforan cada `~50 cm` a `30–50 mm` del borde; nunca poner texto en esa franja |

---

## 4. Sangrado (Bleed)

- **MUPI / OPI (`120 x 175 cm`):** **`10 – 25 mm`** perimetrales `[uncertain]` según sistema de impresión (papel blueback/citylight o vinilo). Algunos circuitos piden el archivo al corte exacto `1200 x 1750 mm` porque el propio marco actúa de reserva; verificar con el exclusivista `[uncertain]`.
- **Valla `8 x 3 m`:** **`20 – 50 mm`** perimetrales (si es lona tensada o vinilo, añadir además `50–100 mm` de refuerzo perimetral/bolsa si lo pide el montador `[uncertain]`).
- **Roll-up (`85 x 200 cm`):** **`10 mm`** superior/laterales + **`100 – 150 mm` de cola inferior** (fondo extendido sin texto ni elementos clave que queda oculta dentro del cartucho enrollador) `[uncertain]`.
- **Lonas exteriores:** **`30 – 50 mm`** de sangrado + exceso para soldadura térmica/vaina si aplica `[uncertain]`.

---

## 5. Distancia de lectura y legibilidad

En vía pública el observador suele estar en movimiento (peatón a `~4–5 km/h`, vehículo a `30–100 km/h`). La regla de oro es **un único foco visual y una sola idea**.

| Soporte | Distancia típica de lectura | Altura mínima de letra Titular (escala `1:1`) | Altura mínima Subtítulo / URL / Marca | Máximo de palabras recomendadas por impacto |
| :--- | :--- | :--- | :--- | :--- |
| **Roll-up (`85 x 200 cm`)** | `1.5 – 4 m` | **`35 – 60 mm`** (`~100–170 pt`) | **`15 – 25 mm`** (`~42–70 pt`); cuerpo mín. `10–12 mm` | `8 – 15 palabras` (ubicar el mensaje principal en el tercio superior, a altura de ojos `130–180 cm` del suelo) |
| **MUPI (`120 x 175 cm`)** | `2 – 10 m` | **`45 – 80 mm`** (`~130–230 pt`) | **`20 – 35 mm`** (`~56–100 pt`); legal mín. `10–12 mm` | `6 – 10 palabras` |
| **Valla Urbana (`4 x 3 m`)** | `10 – 30 m` | **`150 – 250 mm`** (`15 – 25 cm`) | **`70 – 110 mm`** (`7 – 11 cm`) | `5 – 8 palabras` |
| **Valla Carretera (`8 x 3 m`)** | `20 – 60+ m` | **`250 – 450 mm`** (`25 – 45 cm`) | **`100 – 180 mm`** (`10 – 18 cm`); evitar texto de cuerpo | `5 – 8 palabras` (lectura completa en `< 2–3 segundos`) |

- **Regla tipográfica OOH:** Evitar fuentes caligráficas complejas, trazos muy finos (`Light`) o interletrajes apretados (`tracking` negativo), porque a distancia y con luz solar directa o lluvia los contornos se funden y pierden legibilidad. Priorizar alto contraste cromático entre figura, texto y fondo.
