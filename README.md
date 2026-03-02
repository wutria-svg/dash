# Nova UI Components

Base inicial para una librería de componentes Angular inspirada en el estilo empresarial, moderno y limpio de **ng-zorro-ant** (`ng.ant.design`) siguiendo **Atomic Design**.

## Objetivos

- Diseñar una arquitectura escalable para componentes reutilizables.
- Mantener consistencia visual con tokens de diseño y temas.
- Facilitar colaboración con una estrategia de ramas tipo Git Flow.

## Estructura principal

```text
libraries/ui-components/src/
├── lib/
│   ├── foundations/    # Tokens, tipografía, iconografía, motion, grids
│   ├── atoms/          # Botones, inputs, badges, tags, iconos, etc.
│   ├── molecules/      # Combinaciones de átomos (search-box, form-field)
│   ├── organisms/      # Secciones complejas (header, sidebar, table-toolbar)
│   ├── templates/      # Layouts reutilizables
│   ├── pages/          # Ensamblado final para showcases/demo
│   └── utils/          # Helpers, tipos, contratos
└── styles/
    ├── tokens/         # Colores, spacing, radius, sombras, tipografía
    ├── mixins/         # Mixins SCSS reutilizables
    └── themes/         # Light, dark, corporate
```

## Estrategia de ramas

Se implementa un esquema de ramas para control de versiones:

- `main`: producción estable.
- `develop`: integración continua del siguiente release.
- `feature/*`: nuevas funcionalidades.
- `hotfix/*`: correcciones urgentes sobre `main`.

Ver detalle en [`docs/branching-strategy.md`](docs/branching-strategy.md).

## Publicar cambios en GitHub

> Actualmente este repositorio local no tiene remoto configurado (`git remote -v` vacío), por eso los cambios no aparecen en GitHub hasta enlazar y hacer push.

1. Agregar remoto:

```bash
git remote add origin <URL_REPOSITORIO_GITHUB>
```

2. Publicar ramas base:

```bash
git push -u origin main
git push -u origin develop
git push -u origin feature/atomic-design-foundation
```

3. (Opcional) Publicar ramas de soporte:

```bash
git push -u origin feature/base
git push -u origin hotfix/base
```

## Próximos pasos

1. Configurar workspace Angular + librería (`ng generate library ui-components`).
2. Publicar guía visual con Storybook.
3. Crear los primeros átomos base (`Button`, `Input`, `Icon`).
4. Definir reglas de accesibilidad y testing visual.
