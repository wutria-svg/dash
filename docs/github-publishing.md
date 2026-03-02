# Publicación del proyecto en GitHub

Si no ves los cambios en GitHub, normalmente se debe a que:

- No hay remoto `origin` configurado.
- La rama local no fue subida (`git push`).

## Verificación rápida

```bash
git remote -v
git branch --show-current
git log --oneline -n 3
```


## Repositorio objetivo

- `https://github.com/wutria-svg/dash.git`

Comando sugerido:

```bash
git remote add origin https://github.com/wutria-svg/dash.git
```

## Flujo recomendado

1. Configura remoto:

```bash
git remote add origin <URL_REPOSITORIO_GITHUB>
```

2. Sube ramas principales:

```bash
git push -u origin main
git push -u origin develop
```

3. Sube la feature actual:

```bash
git push -u origin feature/atomic-design-foundation
```

4. Abre Pull Request hacia `develop`.

## Nota

En este entorno de ejecución no hay remoto preconfigurado, por eso los cambios quedan confirmados localmente pero no sincronizados automáticamente con GitHub.
