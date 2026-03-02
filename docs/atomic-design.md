# Arquitectura Atomic Design para la librería

## Principios de diseño

- **Profesional y empresarial**: uso sobrio de color, elevación y tipografía.
- **Moderno y limpio**: jerarquía visual clara, espaciado consistente.
- **Escalable**: componentes independientes y reutilizables.
- **Accesible**: foco visible, contraste AA y navegación por teclado.

## Capas

### 1) Foundations

Define reglas base del sistema:

- Color palette (primary, success, warning, error, neutral).
- Tipografía (familia, tamaños, pesos, line-height).
- Spacing (escala 4px).
- Border radius y sombras.
- Breakpoints responsive.
- Motion tokens (duración, easing).

### 2) Atoms

Componentes mínimos sin conocimiento de dominio:

- `Button`
- `Icon`
- `Input`
- `Tag`
- `Badge`
- `Typography`

### 3) Molecules

Agrupaciones pequeñas de átomos con una intención:

- `SearchBox` (Input + Icon + botón clear)
- `FormField` (Label + Input + helper/error)
- `ActionGroup` (Button + Dropdown)

### 4) Organisms

Bloques complejos para pantallas reales:

- `AppHeader`
- `SideNavigation`
- `FilterBar`
- `TableToolbar`

### 5) Templates

Distribuciones de layout reutilizables:

- `DashboardTemplate`
- `SettingsTemplate`
- `AuthTemplate`

### 6) Pages

Composición final de templates + organismos para demos/documentación.

## Convenciones técnicas

- Carpeta por componente con:
  - `*.component.ts`
  - `*.component.html`
  - `*.component.scss`
  - `*.spec.ts`
  - `index.ts`
- Exports centralizados con barrels por capa.
- Inputs/Outputs tipados y sin lógica de negocio.
