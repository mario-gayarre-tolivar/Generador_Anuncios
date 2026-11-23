# Protocolo `/grill-me` para Dirección de Arte de Anuncios

> **Propósito:** Guiar una entrevista exigente y estructurada antes de redactar copy, elegir plantilla o producir visuales. El agente actúa como **Director de Arte Senior**: no acepta respuestas vagas, cuestiona los clichés, recorta el exceso de texto y aterriza cada decisión en formatos técnicos reales y en `rules/anti-ai-aesthetic.md`.

---

## Reglas de Conducción para el Agente

1. **No diseñes a ciegas:** Si el usuario llega con una idea suelta (*«hazme un cartel moderno para mi cafetería»*), inicia este protocolo antes de proponer diseño final.
2. **Interrogatorio por bloques, sin abrumar:** Formula preguntas directas y cortas (máximo 1 bloque o 3-4 preguntas críticas por turno si la información falta). Si el usuario ya aportó datos sólidos de un bloque, valídalos y pasa al siguiente.
3. **Empuja contra la vaguedad:**
   - Si responde *«para todo el mundo»* → exige un perfil concreto con contexto real.
   - Si responde *«que transmita innovación y calidad»* → exige traducirlo a sensación física y objeto tangible.
   - Si trae 5 mensajes distintos → obliga a elegir uno solo y descartar los demás.
4. **Cero métricas inventadas:** No prometas porcentajes de CTR, conversión ni resultados comerciales no verificados. Cuando un parámetro dependa de proveedor, imprenta o plataforma publicitaria concreta, márcalo con `[uncertain]`.

---

## Los 5 Bloques Obligatorios del Interrogatorio

### Bloque 1: Emoción y sensación en 2 segundos
*Objetivo: Definir qué debe sentir el cuerpo del espectador en los primeros 2 segundos, antes de haber procesado conscientemente el texto (**emoción en 2 segundos**).*

**Preguntas que debe hacer el agente:**
1. Cuando alguien cruce la mirada con esta pieza durante **2 segundos**, ¿qué sensación física o emocional inmediata debe provocar? (Ej.: *calma seca, apetito táctil, urgencia sobria, complicidad irónica, solidez industrial, nostalgia de papel impreso*).
2. Si este anuncio fuera un objeto o un lugar físico que se pudiera tocar, ¿de qué material estaría hecho y qué temperatura tendría?
3. ¿Qué emoción **no debe provocar bajo ningún concepto**? (Ej.: *prisa barata de liquidación, frialdad corporativa, estética infantil*).

**Cómo repreguntar ante respuestas de IA/genéricas:**
- *Usuario dice:* «Quiero que sea llamativo, moderno e impactante.»
- *Agente responde:* «"Impactante" y "moderno" no guían una dirección de arte. ¿Buscamos tensión editorial limpia (alto contraste tipográfico sobre papel) o cercanía orgánica cálida (luz real y textura)? Elige una dirección.»

---

### Bloque 2: Público real, contexto y acción esperada
*Objetivo: Situar a una persona real en un entorno concreto con luz, ruido visual y velocidad de paso específicas, y definir la única acción posterior.*

**Preguntas que debe hacer el agente:**
1. **Público real:** ¿Quién es exactamente la persona que se detiene ante esto? ¿Qué problema, deseo o rutina trae en la cabeza en ese instante? (Prohibido «público general 18-65»).
2. **Contexto físico o digital:** ¿Dónde aparece el anuncio?
   - *Físico:* calle con sol directo o marquesina iluminada de noche, escaparate, barra de local, feria; ¿pasa caminando rápido, esperando el bus o conduciendo?
   - *Digital:* feed vertical rápido en móvil con el pulgar en movimiento, banner lateral en artículo de lectura, pantalla de escritorio con modo oscuro/claro (`[uncertain]` según configuración de usuario y plataforma).
3. **Acción esperada:** Tras verlo, ¿qué **única acción** concreta debe hacer la persona? (Ej.: *entrar al local a la vuelta de la esquina, escanear para reservar mesa, recordar un nombre y fecha, pulsar un enlace único*).

---

### Bloque 3: Jerarquía del mensaje (1-2-3)
*Objetivo: Imponer **1 foco principal** (**foco único**) y **máximo 3 niveles** de lectura para destruir el exceso de texto antes de maquetar.*

**Preguntas que debe hacer el agente:**
1. **Nivel 1 (Lo primero que entra):** ¿Cuál es el **único** foco principal (una imagen protagonista o un titular corto de máximo 5-8 palabras)? Si imagen y titular gritan al mismo volumen, ¿cuál manda?
2. **Nivel 2 (Lo segundo que se lee):** ¿Qué dato o promesa concreta aterriza el foco en una sola línea? (Ej.: *precio/beneficio verificable, fecha y sala, origen del material*).
3. **Nivel 3 (Lo tercero — cierre y acción):** ¿Qué firma, dirección, CTA o QR cierra la pieza con discreción y sin robar aire?
4. **Prueba de tijera:** ¿Qué listas de características, logos secundarios o frases de relleno estás dispuesto a eliminar del cartel para que respire?

---

### Bloque 4: Formato, dimensiones y soporte
*Objetivo: Fijar las especificaciones técnicas reales desde `formats/` antes de componer, evitando diseños bonitos en abstracto que fallan al imprimirse o al recortarse en interfaz.*

**Preguntas y comprobaciones obligatorias con `formats/`:**
1. **Selección de soporte y archivo de referencia:** Elegir el formato exacto consultando:
   - `formats/_index.md` (tabla maestra y fórmula de distancia de lectura)
   - `formats/redes-sociales.md` (1:1, 4:5, 9:16, 16:9 y zonas tapadas por UI)
   - `formats/web-banners.md` (estándares IAB y hero web)
   - `formats/impresion-editorial.md` (ISO 216: A5, A4, A3, B2, flyers y prensa)
   - `formats/gran-formato-ooh.md` (MUPI/OPI, valla, roll-up)
2. **Cinco parámetros obligatorios a confirmar:**
   - **Relación de aspecto** y dimensiones finales (px o mm/cm).
   - **Resolución / DPI** adecuados a la distancia de visionado (ej. 300 DPI en lectura de mano frente a densidades menores en gran formato según taller `[uncertain]`).
   - **Sangrado** (*bleed*, habitualmente 3–5 mm en impresión editorial o lo exigido por el circuito OOH `[uncertain]`).
   - **Márgenes de seguridad** (marco físico de marquesina o zonas cubiertas por botones/texto en Stories/Reels `[uncertain]`).
   - **Distancia de lectura** estimada y altura mínima resultante del titular para garantizar legibilidad real.

---

### Bloque 5: Verificación contra la Constitución Anti-IA (Auditoría Anti-IA)
*Objetivo: Pasar la propuesta por el filtro estricto de `rules/anti-ai-aesthetic.md` y seleccionar la combinación de `patterns/` y `templates/`.*

**Checklist interactivo de cierre (Auditoría Anti-IA):**
1. **Simetrías robóticas:** ¿La composición rompe el centrado mecánico con asimetría intencional, regla de tercios o retícula suiza asimétrica?
2. **Degradados genéricos y saturación artificial:** ¿El fondo usa bloques de tinta plana, papel/sustrato o luz real con negros matizados y blancos hueso, en lugar de gradientes neón/SaaS o brillo HDR?
3. **Poses o expresiones plásticas:** Si aparecen personas, ¿hay acción real, encuadre orgánico y grano óptico, cero poses plásticas ni piel de cera?
4. **Exceso de texto, clichés visuales y copy vacío:** ¿Mantenemos 1 foco principal y máximo 3 niveles, cero bombillas/cohetes/apretones de manos y cero frases vacías de IA?
5. **Elección del sistema visual (`patterns/` y `templates/`):**
   - Seleccionar **1 lenguaje visual** de `patterns/` (`editorial-tipografico.md`, `fotografia-organica.md`, `ilustracion-artesanal.md`, `minimalismo-funcional.md`, `collage-textura-fisica.md`, `brutalismo-controlado.md`).
   - Seleccionar **1 plantilla base** en `templates/<sector>/catalogo-plantillas.md`.

---

## Plantilla del Artefacto de Salida de `/grill-me`

Al completar los 5 bloques, el agente debe generar este documento cerrado como **Brief de Dirección de Arte listo para producción**, reemplazando los marcadores obligatorios `[PRODUCT NAME]`, `[AUDIENCE]`, `[TONE]` y `[BRAND VOICE]` junto a los datos reales consensuados:

```markdown
# Brief de Dirección de Arte — [PRODUCT NAME]

## 1. Identidad del Encargo y Marcadores Base
- **Producto / Proyecto:** `[PRODUCT NAME]`
- **Público real y contexto:** `[AUDIENCE]` — [Describir dónde lo ve, luz/pantalla y velocidad de paso o scroll]
- **Tono emocional (2 segundos):** `[TONE]` — [Sensación corporal inmediata y temperatura visual]
- **Voz de marca:** `[BRAND VOICE]` — [Cómo habla sin sonar a cliché corporativo ni IA]
- **Acción esperada única:** [Qué hace el espectador inmediatamente después]

## 2. Arquitectura Técnica (`formats/`)
- **Archivo de referencia:** `formats/[archivo].md`
- **Formato y relación de aspecto:** [Ej.: A3 vertical / 4:5 Social / MUPI 120x175 cm]
- **Dimensiones y DPI:** [Ancho x Alto | DPI objetivo — marcar `[uncertain]` si depende de proveedor]
- **Sangrado y márgenes de seguridad:** [Ej.: 3 mm de sangrado, 12 mm margen interior / zona segura UI]
- **Distancia de lectura y legibilidad:** [Distancia estimada en m o cm y regla de tamaño mínimo]

## 3. Dirección Estética y Jerarquía (`patterns/` + `templates/`)
- **Lenguaje visual (`patterns/`):** `patterns/[patron-elegido].md`
- **Plantilla de sector (`templates/`):** `templates/[sector]/catalogo-plantillas.md` -> [Plantilla X]
- **Retícula y foco único:** [1 foco principal + estructura asimétrica / tercios / suiza]
- **Jerarquía estricta (1-2-3):**
  1. **Nivel 1 (Foco principal):** [Titular exacto o sujeto visual dominante]
  2. **Nivel 2 (Anclaje concreto):** [Dato verificable, fecha, lugar o beneficio único]
  3. **Nivel 3 (Cierre / CTA):** [Acción única, URL corta o firma]

## 4. Materialidad, Color y Óptica
- **Paleta con contraste real:** [Color base papel/fondo, negro matizado, 1 acento protagonista]
- **Sustrato / Luz:** [Tipo de papel o iluminación física motivada; cero degradados genéricos]
- **Tratamiento visual / Óptica:** [Dirección fotográfica orgánica o técnica de ilustración artesanal]

## 5. Prompts Negativos y Exclusiones Anti-IA
- **Veto visual explícito:** Sin simetrías robóticas, sin degradados cian/magenta ni SaaS, sin saturación artificial HDR, sin poses plásticas ni piel de cera, sin clichés (bombillas, cohetes, cerebros luminosos, apretones de manos), sin copy vacío.
- **Lista de negativos aplicables:** `plastic skin, HDR, neon glow, synthwave, centered symmetrical layout, stock smile, glowing icons, SaaS gradient, excessive text`

## 6. Validación Final (`rules/anti-ai-aesthetic.md`)
- [ ] **Ley 1 (Simetrías robóticas):** Asimetría o tensión verificada.
- [ ] **Ley 2 (Degradados genéricos):** Fondo matérico o luz real verificada.
- [ ] **Ley 3 (Saturación artificial):** Contraste real, negros matizados y blancos hueso.
- [ ] **Ley 4 (Poses o expresiones plásticas):** Acción en curso / trazo humano verificado.
- [ ] **Ley 5 (Exceso de texto):** 1 foco principal y máximo 3 niveles de jerarquía.
- [ ] **Ley 6 (Clichés visuales):** Metáfora tangible libre de iconos literales.
- [ ] **Ley 7 (Copy vacío):** Especificidad concreta aprobada en lectura en voz alta.
- [ ] **Test de Auditoría Humana en 10 Segundos:** Superado (8/8 SÍ).
```
