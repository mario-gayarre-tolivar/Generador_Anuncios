  # Plan de Implementación: Organización Automática de Entregables en Subcarpetas dentro de `output/`

- **Fecha:** 2026-11-23
- **Estado:** Completado y Verificado (Fase 4 GREEN)
- **Rama:** `feature/organizacion-salida-carpetas`

---

## 1. Objetivo y Alcance

Garantizar que **cada cartel o anuncio generado** tenga su propio subdirectorio aislado dentro de `output/<slug-del-cartel>/` (por ejemplo `output/clases-particulares-mario/`), donde residan de forma autónoma todos sus artefactos asociados:
- Archivo interactivo / imprimible (`index.html` o `<slug>.html`).
- Recursos locales vinculados (assets como `qr-whatsapp.svg`, imágenes o fuentes).
- Documento de brief o notas de salida (`brief.md`).
- Migrar de forma limpia el cartel actual ya generado de Mario Gayarre a su nueva subcarpeta `output/clases-particulares-mario/`.

Además:
- Actualizar la documentación y el protocolo (`README.md` y `workflows/grill-me-anuncio.md`) para formalizar este estándar de nomenclatura y estructura por subcarpetas.
- Añadir en `src/validator.ts` una función de soporte/validación para la estructura de carpetas de salida (`validateOutputBundle`), manteniendo el 100% de la suite de tests en verde.

---

## 2. Estructura de Salida Estandarizada

```text
output/
└── <slug-del-cartel>/
    ├── index.html (o <slug>.html)   # Maqueta editorial interactiva lista para A4 / 4:5
    ├── qr-whatsapp.svg (u otros assets locales)
    └── brief.md (opcional / brief de dirección de arte)
```

Para el cartel existente:
```text
output/
└── clases-particulares-mario/
    ├── cartel-mario.html
    └── qr-whatsapp.svg
```

---

## 3. Matriz Secuencial de Micro-TDD (Fase 4)

- [x] **Paso 1: Test y Contrato de Validación de Bundle de Salida (`tests/validator.test.ts` y `src/validator.ts`)**
  - **RED**: Añadir test para `validateOutputBundle(bundleDir)` que verifique la presencia del archivo HTML principal y de sus recursos locales sin enlaces rotos. Confirmar fallo.
  - **GREEN**: Implementar `validateOutputBundle` y verificar que pase el test.
- [x] **Paso 2: Migración del Cartel de Mario a su Subcarpeta Aislada**
  - Crear `output/clases-particulares-mario/`.
  - Mover `cartel-mario-gayarre.html` (renombrándolo de forma concisa a `cartel-mario.html` o manteniendo su enlace relativo a `qr-whatsapp.svg`) y mover `qr-whatsapp.svg` dentro de dicha subcarpeta.
  - Comprobar que el HTML cargue `qr-whatsapp.svg` localmente sin rutas rotas.
- [x] **Paso 3: Actualización Documental (`workflows/grill-me-anuncio.md` y `README.md`)**
  - Añadir en `workflows/grill-me-anuncio.md` la regla explícita: *"Cada entrega final se genera dentro de `output/<slug-del-cartel>/`"*.
  - Actualizar `README.md` reflejando la estructura de carpetas en `output/`.
- [x] **Paso 4: Verificación Integral (`npm test`), Commit y Merge a `develop`**
  - Ejecutar `npm test` asegurando que todos los tests pasen.
  - Commitear en `feature/organizacion-salida-carpetas` y hacer merge `--no-ff` en `develop`.
