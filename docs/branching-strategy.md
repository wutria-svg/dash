# Estrategia de ramas (Git Flow simplificado)

## Ramas permanentes

- **`main`**
  - Solo código listo para producción.
  - Cada merge debe estar versionado y etiquetado.

- **`develop`**
  - Rama de integración.
  - Acumula features validadas para el siguiente release.

## Ramas temporales

- **`feature/<nombre>`**
  - Nacen desde `develop`.
  - Se usan para nuevas capacidades.
  - Regresan a `develop` vía PR.

- **`hotfix/<nombre>`**
  - Nacen desde `main`.
  - Corrigen incidencias críticas de producción.
  - Deben mergearse en `main` y `develop`.

## Convenciones recomendadas

- Prefijos semánticos en commits:
  - `feat:` nueva funcionalidad
  - `fix:` corrección
  - `docs:` documentación
  - `chore:` tareas internas
- Pull Requests pequeños y trazables.
- Política de revisión mínima: 1 aprobador.

## Ramas base creadas

- `main`
- `develop`
- `feature/base`
- `hotfix/base`
- `feature/atomic-design-foundation` (rama activa para iniciar desarrollo)
