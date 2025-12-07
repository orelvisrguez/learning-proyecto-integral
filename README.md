# Learning Proyecto Integral - Sitio Web Institucional

Sitio web moderno y profesional para el Instituto Learning Proyecto Integral, construido con Astro, Tailwind CSS y Supabase.

## Stack Tecnológico

- **Framework:** Astro v4+ con TypeScript
- **Estilos:** Tailwind CSS
- **Base de Datos:** Supabase (PostgreSQL)
- **Iconos:** SVG inline (sin dependencias externas)

## Estructura del Proyecto

```
learning-proyecto-integral/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── AboutSection.astro
│   │   ├── NivelesGrid.astro
│   │   ├── NoticiasSection.astro
│   │   └── ContactSection.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   ├── supabase.ts
│   │   └── database.types.ts
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── supabase/
│   └── schema.sql
├── .env.example
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Instalación

1. Instalar dependencias:
\`\`\`bash
npm install
\`\`\`

2. Configurar Supabase (copiar .env.example a .env y completar credenciales)

3. Ejecutar el schema SQL en Supabase

4. Iniciar desarrollo:
\`\`\`bash
npm run dev
\`\`\`

## Scripts

| Comando | Descripción |
|---------|-------------|
| npm run dev | Servidor de desarrollo |
| npm run build | Build de producción |
| npm run preview | Preview del build |

## Licencia

© 2024 Learning Proyecto Integral
