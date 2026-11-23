# Patrón de Lenguaje Visual: Fotografía Orgánica

Dirección fotográfica basada en **luz física verificable, óptica analógica real (`35mm` y formato medio `120mm`) y materia viva sin retoque plástico**. El cartel transmite verdad documental o cercanía táctil porque captura un instante imperfecto —un gesto a mitad de frase, piel con poros, vaho en un vaso, polvo suspendido en contraluz— en lugar de un render publicitario estéril.

---

## 1. Principios Compositivos y Jerarquía Visual

- **Principio rector:** Una sola fotografía con peso documental y aire compositivo donde integrar la tipografía sin invadir el sujeto. La emoción ocurre en la luz y la textura; la tipografía actúa como pie editorial discreto o titular de anclaje en zona de baja frecuencia visual (cielo, pared, mesa desenfocada, sombra).
- **1 foco principal único:** El foco es la **escena fotográfica única** (un rostro en luz lateral, unas manos trabajando materia, un objeto en uso real sobre mesa cotidiana). Nunca usar collages de 3 o 4 fotos iguales ni insertar el producto flotando recortado sobre un escenario distinto.
- **Máximo 3 niveles de lectura:**
  - **Nivel 1 (Impacto emocional / 0–2 s):** La fotografía orgánica junto al titular corto anclado en la zona de calma de la toma (si la foto domina por sí sola, el titular ocupa un área secundaria clara pero de alto contraste).
  - **Nivel 2 (Dato narrativo):** Subtítulo breve que nombra qué es `[PRODUCT NAME]` y qué aporta sin explicar lo obvio que ya muestra la foto.
  - **Nivel 3 (Crédito / Acción):** Marca, fecha, lugar o URL en un margen limpio o franja inferior sólida para garantizar lectura aunque el fondo fotográfico tenga textura.

---

## 2. Estructura de Retícula

- **Columnas y módulos:** Retícula híbrida de **3 o 4 columnas** con regla de tercios descentrada (`38% / 62%` o `1:1.618` áurea aproximada) o formato **Polaroid / Marco Editorial** (`85%` fotografía a sangre parcial + `15%` banda inferior limpia en papel crema para niveles 2 y 3).
- **Encuadre:** Permitido el corte imperfecto en bordes (hombro cortado, elemento entrando por el lateral en primer plano ligeramente desenfocado / *foreground framing*) y horizonte con leve inclinación natural o movimiento (`1/30 s`–`1/60 s` de obturación) cuando refuerza la autenticidad.
- **Márgenes:** En foto a sangre, mantener **márgenes tipográficos de seguridad** (`8%–10%` del ancho menor en impresión; `60–90 px` en `1080 px` digital `[uncertain]`). Nunca pisar ojos, manos o el punto de luz principal de la fotografía con texto.
- **Distribución asimétrica:** Ubicar el sujeto principal en un tercio lateral (izquierda o derecha) y reservar el tercio opuesto —con menor detalle de fondo o profundidad de campo suave (`f/2.0 – f/4.0` real, sin bokeh cremoso artificial excesivo)— para alojar Nivel 1 y Nivel 2.

---

## 3. Guía de Color y Contraste

Paleta guiada por emulsiones fotográficas reales (*Kodak Portra 400*, *Cinestill*, *Ilford HP5* o color natural calibrado), con negros con detalle o sombras densas pero nunca empastadas por HDR:

| Rol Cromático | Muestra / Referencia | HEX | CMYK de referencia `[uncertain]` | Ratio de contraste real (WCAG 2.1) | Uso permitido |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Fondo / Marco papel** | Crema celulosa sin blanquear | `#EFECE6` | `5C 5M 9Y 0K` | Base | Bandas editoriales, márgenes o texto claro invertido sobre sombra oscura |
| **Tinta oscura** | Negro película | `#1A1816` | `68C 64M 66Y 85K` (ajustar límite total de tinta TAC según papel `[uncertain]`) | **`15.02:1`** sobre `#EFECE6` (AAA) | Titulares sobre marco crema o texto invertido (`#EFECE6` sobre `#1A1816`) |
| **Acento cálido** | Terracota / Óxido orgánico | `#9E472A` | `22C 76M 84Y 15K` | **`5.26:1`** sobre `#EFECE6` (AA) | Sellos, fechas, destacados puntuales de Nivel 2/3 |
| **Acento frío alternativo** | Verde oliva profundo | `#2F3E2E` | `72C 48M 75Y 45K` | **`9.63:1`** sobre `#EFECE6` (AAA) | Textos secundarios o bloques de soporte editorial sobre papel claro |

- **Regla de contraste sobre foto:** Cuando el texto va directamente sobre fotografía, **nunca** confiar en zonas de contraste variable sin verificar que el punto más claro/oscuro tras el texto mantenga al menos **`4.5:1`** (cuerpo) o **`3:1`** (titular grande). Si la foto tiene mucho ruido visual, usar una banda sólida `#EFECE6` o `#1A1816` en lugar de un degradado negro transparente genérico.
- **Acabados matéricos:** Impresión en papel satinado suave (*semi-matte* / *lustre*) o offset no estucado para mantener la respuesta orgánica del grano de película. Prohibido el filtro teal-and-orange saturado, el HDR agresivo y el suavizado de piel (*skin smoothing*).

---

## 4. Tipografía y Ritmo

- **Familias y estilos recomendados:**
  - Opción editorial cálida: Serif humanista o de transición con personalidad de revista (*Garamond Premier*, *Caslon*, *Plantin*, *Instrument Serif*, *Lora*) combinada con sans técnica discreta (*Inter*, *IBM Plex Sans*) para Nivel 3.
  - Opción documental cruda: Grotesca neutra en pesos Regular/Medium (*Univers*, *Neue Haas Grotesk*, *Aktiv Grotesk*) en caja baja o versales pequeñas, evitando tipografías Display estridentes que compitan con la fotografía.
- **Relación de escala:**
  - **Nivel 1 (Titular):** `1.0x` (más contenido que en editorial tipográfico: `32–56 pt` en A4/A3, `48–72 px` en `1080x1350 px`).
  - **Nivel 2 (Bajada):** `0.40x – 0.50x` del Nivel 1 (`14–22 pt` o `22–28 px`).
  - **Nivel 3 (Pie / Metadato):** `0.22x – 0.30x` del Nivel 1 (siempre respetando el mínimo legible del soporte `[uncertain]`).
- **Interlineado y tracking:**
  - **Nivel 1:** Interlineado `1.02 – 1.12`, tracking `-0.02em` a `0em` (sin apretar en exceso si el texto descansa sobre textura).
  - **Nivel 2:** Interlineado `1.30 – 1.45`, tracking `0em`.
  - **Nivel 3:** Interlineado `1.35`, tracking `+0.03em` (estilo pie de foto de revista impresa).

---

## 5. Tono de Copy

- **Cómo suena:** Íntimo, observacional, específico y humano. Habla como alguien que estaba allí cuando se hizo la foto, no como un locutor comercial.
- **Disciplina verbal:**
  - Frases cortas con detalle concreto (hora del día, material, olor, temperatura, gesto real) vinculadas al beneficio real de `[PRODUCT NAME]`.
  - Prohibidas las promesas grandilocuentes (*"La perfección existe"*, *"Vive la mejor experiencia de tu vida"*).
  - Funciona muy bien el **titular en forma de observación o confesión honesta** + un pie técnico sobrio con nombre y acción.

---

## 6. Reglas Anti-IA Específicas

La "fotografía de IA" es instantáneamente reconocible por su piel de cera, iluminación de estudio imposible y simetría de pose:
1. **Piel de silicona y dientes perfectos:** Rostros sin poros, brillos uniformes en la frente y sonrisas simétricas mirando al vacío. **Corrección:** Exigir textura dérmica real, arrugas de expresión asimétricas, mechones sueltos y mirada no posada o fuera de eje.
2. **Iluminación HDR omni-direccional:** Sombras rellenas mágicamente por todas partes + *rim light* naranja/azul de neón sin fuente física. **Corrección:** Definir una única fuente física clara (ventana lateral nublada, sol bajo de tarde a 20°, o **flash directo crudo en cámara** `on-camera direct flash` con sombra dura pegada detrás del sujeto).
3. **Bokeh cremoso artificial y fondos de postal:** Desenfoque gaussiano falso que recorta al sujeto como un croma. **Corrección:** Disparar con diafragmas medios realistas (`f/4` a `f/8` en 35mm) donde el entorno conserva estructura reconocible y grano homogéneo en todo el plano.
4. **Manos/objetos fundidos o flotantes:** Dedos extra o tazas sin gravedad. **Corrección:** Composición simple con manos en pose natural y revisión 100% al detalle antes de aprobar arte.
5. **Color teal-and-orange saturado:** Saturación digital irreal en cielos y tonos de piel. **Corrección:** Tono neutro-cálido analógico con verdes contenidos y blancos ligeramente cálidos.

- **Modificadores positivos:** `candid 35mm film photography, Kodak Portra 400 grain, single natural window light or harsh on-camera direct flash with hard contact shadow, unretouched skin pores and fabric texture, imperfect off-center framing, subtle motion blur, authentic everyday environment`
- **Modificadores negativos:** `AI portrait, smooth plastic skin, studio rim lighting, teal and orange color grading, hyper-detailed HDR, fake creamy bokeh, symmetrical stock smile, airbrushed, 3D render look, glossy over-sharpened`

---

## 7. Ejemplo Aplicado

- **Contexto:** Pieza editorial / social (`4:5` o `A4`) para `[PRODUCT NAME]` dirigido a `[AUDIENCE]`, con tono `[TONE]` y voz de `[BRAND VOICE]`.
- **Composición:** Fotografía `35mm` con flash directo suave o luz lateral de mañana mostrando el uso real de `[PRODUCT NAME]` en un entorno cotidiano sin posado perfecto, encuadre asimétrico dejando aire limpio en el tercio superior derecho y franja inferior `#EFECE6`.
- **Nivel 1 (Foco principal: foto + titular en `#1A1816`, escala `1.0x`):**
  `Hecho para durar más que la temporada.` *(o titular observacional breve de `[PRODUCT NAME]`)*
- **Nivel 2 (Franja inferior izquierda, `#1A1816`, escala `0.45x`):**
  `[PRODUCT NAME] acompaña la rutina real de [AUDIENCE] sin exigir cuidados imposibles.` *(adaptado a `[TONE]` y `[BRAND VOICE]`)*
- **Nivel 3 (Esquina inferior derecha, `#9E472A` / `#2F3E2E`, escala `0.25x`, tracking `+0.04em`):**
  `ARCHIVO 2026 · [BRAND VOICE] · VER COLECCIÓN`
