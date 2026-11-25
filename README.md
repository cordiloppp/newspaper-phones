# TechNews · Newspaper Phones

**Demo en vivo:** https://newspaper-phones.vercel.app

Sitio estático de reseñas y análisis de teléfonos (Samsung, Apple, Huawei y Xiaomi), con estilo de revista impresa. Proyecto escolar de práctica.

## Qué tiene

- Nota principal con imagen, tres reseñas destacadas, dos análisis y una lista de reseñas breves.
- Diseño responsivo con CSS Grid: en celular todo se apila y el menú se abre con un botón accesible (`aria-expanded`).
- Tipografía editorial: Newsreader para titulares e Inter para el texto.
- Paleta de papel y tinta con el rojo del logo como único acento.
- Sin dependencias: HTML, CSS y unas líneas de JavaScript para el menú.

## Estructura

```
index.html   ← contenido
style.css    ← estilos y versión para celular
main.js      ← menú en pantallas pequeñas
img/         ← logo y fotos de los teléfonos
```

## Uso

Abre `index.html` en el navegador. Cada `push` a `main` se publica solo en Vercel.
