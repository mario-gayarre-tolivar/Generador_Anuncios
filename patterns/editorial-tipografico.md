# Patrón de Lenguaje Visual: Editorial Tipográfico

Estilo heredero de la **Escuela Suiza (Estilo Tipográfico Internacional)** reinterpretado con rigor contemporáneo: la tipografía no decora una imagen, sino que **construye la arquitectura completa del cartel**. La fuerza expresiva nace de la tensión entre masa tipográfica monumental, silencio del papel y una retícula matemática que el ojo percibe incluso cuando se rompe de forma controlada.

---

## 1. Principios Compositivos y Jerarquía Visual

- **Principio rector:** Contraste extremo de escala, alineación rigurosa a bandera izquierda (`flush-left, ragged-right`) y uso estructural de filetes finos o bloques de color plano como separadores de módulo.
- **1 foco principal único:** El foco es siempre el **titular tipográfico de Nivel 1** (o una única cifra/palabra ancla gigante que ocupa entre el `35%` y el `55%` del área útil) o su cruce inmediato con un único bloque gráfico geométrico. Nunca compiten dos titulares ni una foto protagonista contra una tipografía gigante.
- **Máximo 3 niveles de lectura:**
  - **Nivel 1 (Impacto inmediato / 0–2 s):** Titular principal o dato numérico en cuerpo monumental, con kerning óptico apretado y corte de línea intencionado para crear ritmo de lectura.
  - **Nivel 2 (Contexto / Bajada):** Subtítulo o propuesta concreta en una línea o párrafo breve alineado a la misma columna eje del titular o desplazado exactamente un módulo de retícula.
  - **Nivel 3 (Anclaje técnico / Metadato):** Fecha, lugar, URL, especificación técnica o firma de marca agrupados en bloque compacto en un margen inferior o esquina modular, sin competir jamás con el Nivel 1.

---

## 2. Estructura de Retícula

- **Columnas y módulos:** Retícula suiza modular de **4, 6 u 8 columnas verticales** combinadas con **6 a 12 filas horizontales** (módulos rectangulares proporcionales al formato base, por ejemplo `1:1.414` en ISO 216 o `4:5` en social).
- **Proporciones de masa vs. vacío:** `55%–65%` área ocupada por tipografía/módulos activos y `35%–45%` de contramasa limpia en papel/fondo para que el bloque titular respire.
- **Márgenes:** Márgenes exteriores generosos y constantes (`8%–12%` del ancho menor en impresión editorial; mínimo `60–90 px` en `1080 px` digital y `40–60 mm` en MUPI `[uncertain]`). Los filetes horizontales (`0.5–1 pt` o `1 px`) pueden sangrar o anclarse estrictamente al ancho de columna.
- **Distribución asimétrica:** Prohibido el centrado simétrico clásico de tarjeta de invitación. Colocar el Nivel 1 anclado a columnas `1–4` (izquierda) y desplazar el Nivel 2 y Nivel 3 a columnas `3–6` o `5–6` dejando columnas vacías activas como contrapeso diagonal.

---

## 3. Guía de Color y Contraste

Paleta de imprenta de tintas planas o cuatricromía limpia, sin brillos plásticos ni degradados digitales:

| Rol Cromático | Muestra / Referencia | HEX | CMYK de referencia `[uncertain]` | Ratio de contraste real (WCAG 2.1) | Uso permitido |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Fondo base** | Papel hueso / estucado mate | `#F4F1EA` | `3C 4M 8Y 0K` | Base | Superficie principal de lectura; evita el blanco puro `#FFFFFF` cegador en pantalla |
| **Tinta principal** | Negro carbón | `#121212` | `0C 0M 0Y 100K` (o negro enriquecido `40C 30M 30Y 100K` en masas `[uncertain]`) | **`16.61:1`** sobre `#F4F1EA` (AAA) | Titulares Nivel 1, cuerpo Nivel 2, filetes estructurales |
| **Acento único** | Rojo señal suizo / Bermellón | `#D9381E` | `5C 88M 95Y 0K` (o Pantone 485 / Warm Red `[uncertain]`) | **`4.11:1`** sobre `#F4F1EA` | Solo titulares grandes (`>= 18 pt` / `>= 24 px`), pastillas geométricas o numeración; **no usar en texto pequeño** |
| **Tinta terciaria** | Gris pizarra técnico | `#57534E` | `58C 52M 55Y 30K` | **`6.76:1`** sobre `#F4F1EA` (AA/AAA) | Nivel 3, cotas de retícula, notas al pie |

- **Acabados matéricos:** Papel offset o estucado mate sin brillo (`130–250 g/m²` en cartel/flyer `[uncertain]`) que absorbe la tinta sin reflejos. Prohibidos los degradados radiales, reflejos glassmorphism, sombras paralelas difuminadas (`drop shadow`) y saturaciones neón `#FF0000` o `#00FF00`.

---

## 4. Tipografía y Ritmo

- **Familias y estilos recomendados:** Neogrotescas con excelente dibujo de contraformas y kerning consistente: *Neue Haas Grotesk*, *Akzidenz-Grotesk*, *Univers*, *Helvetica Now Display* o alternativas abiertas como *Inter Display*, *Plus Jakarta Sans* o *Aktiv Grotesk* combinadas opcionalmente con una serif editorial de alto contraste (*Times Now*, *Newsreader*, *GT Super*) solo para un contraste puntual en Nivel 2.
- **Relación de escala entre niveles (escala dramática mínima `4:1` entre N1 y N2):**
  - **Nivel 1 (Titular):** Base `1.0x` (ej. `72–140 pt` en cartel A3/B2, `96–130 px` en `1080x1350 px`).
  - **Nivel 2 (Subtítulo / Cuerpo corto):** `0.20x – 0.28x` del Nivel 1 (ej. `18–26 pt` o `24–32 px`).
  - **Nivel 3 (Metadatos / Pie técnico):** `0.10x – 0.14x` del Nivel 1 (respetando mínimo legible del soporte: `>= 8.5–10 pt` en papel en mano, `>= 14–16 px` en móvil `[uncertain]`).
- **Interlineado (leading) y tracking:**
  - **Nivel 1:** Interlineado muy apretado (`0.85 – 0.95` del cuerpo) para compactar el titular como un bloque sólido; tracking ligeramente negativo (`-0.03em` a `-0.05em` / `-30` a `-50` milésimas de em) y ajuste manual de pares críticos (`AV`, `To`, `Ty`, `LT`). En OOH a distancia (`> 10 m`), relajar a `-0.01em` / `0em` para evitar empastado óptico.
  - **Nivel 2:** Interlineado `1.18 – 1.30`, tracking `0em`.
  - **Nivel 3 (si va en versalitas o mayúsculas):** Interlineado `1.25 – 1.35`, tracking positivo `+0.04em` a `+0.08em`.

---

## 5. Tono de Copy

- **Cómo suena:** Seco, declarativo, editorial y seguro de sí mismo. Comunica una idea o tensión real en pocas palabras sin adjetivos inflados.
- **Disciplina verbal:**
  - Titular Nivel 1 de **2 a 6 palabras** (máximo 1 frase cortada con intención rítmica).
  - Evitar signos de exclamación múltiples, preguntas retóricas baratas (*"¿Cansado de...?"*) y verbos huecos (*"Descubre", "Revoluciona", "Potencia tu futuro"*).
  - Nivel 3 expresado como **ficha de archivo o colofón** (`EDICIÓN 04 · 14.11.2026 · MADRID` o `SERIE LIMITADA / 300 G/M²`).

---

## 6. Reglas Anti-IA Específicas

Los generadores de imagen y maquetación por IA delatan su origen en estilo editorial por cinco fallos recurrentes:
1. **Kerning roto y glifos deformados:** Espacios desiguales entre letras y pseudo-tipografía ilegible en Nivel 3. **Corrección:** Renderizar toda la tipografía en software vectorial/maquetación real (`InDesign`, `Figma`, `Illustrator`, `HTML/CSS` tipográfico), nunca dentro del píxel de difusión; si se prototipa imagen base con IA, generar solo mancha/papel sin texto.
2. **Centrado perezoso en tarjeta:** La IA tiende a centrar cada bloque verticalmente. **Corrección:** Forzar alineación izquierda estricta a ejes de columna visibles y asimetría de bloques.
3. **Degradados "corporativos" tras el texto:** Añadir halos morados/azules detrás de tipografía suiza destruye el estilo. **Corrección:** Usar únicamente fondos planos de papel o tinta sólida con grano de papel sutil.
4. **Relleno decorativo sin función:** Líneas aleatorias, asteriscos gigantes y círculos flotantes sin relación con la retícula. **Corrección:** Cada filete o punto de color debe marcar un límite real de columna o jerarquía.
5. **Copy redundante en 5 tamaños distintos:** Repetir la misma promesa en subtítulo, badge y pie. **Corrección:** Bloquear a máximo 3 niveles con funciones excluyentes.

- **Modificadores positivos (maquetación / prompt de fondo):** `Swiss International Typographic Style grid architecture, strict asymmetric flush-left column alignment, uncoated off-white archival paper #F4F1EA, flat matte ink contrast, crisp 1px structural hairline rules, generous negative space, tactile print finish`
- **Modificadores negativos:** `centered layout, glossy 3D text, neon gradients, drop shadows, lens flare, floating abstract blobs, decorative icons, fake gibberish text, stock corporate aesthetic, glowing edges`

---

## 7. Ejemplo Aplicado

- **Contexto:** Lanzamiento de edición física / campaña gráfica para `[PRODUCT NAME]` dirigido a `[AUDIENCE]`, ejecutado en tono `[TONE]` con la voz de `[BRAND VOICE]`.
- **Composición (Retícula 6 columnas, formato A3 / `4:5`):**
  - **Nivel 1 (Foco principal, col. 1–5, `#121212`, escala `1.0x`, tracking `-0.04em`, interlineado `0.88`):**
    `MENOS RUIDO.` / `MEJOR CRITERIO.` *(o claim directo de `[PRODUCT NAME]` en 4 palabras)*
  - **Nivel 2 (Col. 3–6 desplazado hacia abajo tras filete `#121212` de `1 px`, escala `0.24x`):**
    `[PRODUCT NAME] elimina la fricción diaria para [AUDIENCE] sin atajos estéticos.` *(redactado respetando `[TONE]` y `[BRAND VOICE]`)*
  - **Nivel 3 (Col. 1–2 en margen inferior y col. 6 en pie derecho, `#57534E` y acento `#D9381E` en número de serie, escala `0.12x`, tracking `+0.05em`):**
    `01 / EDICIÓN INICIAL` · `DISPONIBLE AHORA` · `[BRAND VOICE]`
