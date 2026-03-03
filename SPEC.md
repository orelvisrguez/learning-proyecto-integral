# Landing Page - Colegio Bilingüe

## 1. Project Overview

- **Project Name**: Colegio Bilingüe Landing Page
- **Type**: Full-stack web application with CMS
- **Core Functionality**: Landing page institucional con sistema de noticias dinámico, gestión de contenido y autenticación
- **Target Users**: Padres, estudiantes, visitantes institucionales, administradores del contenido

## 2. Tech Stack

- **Framework**: Next.js 14 (App Router)
- **ORM**: Prisma (mejor ORM para PostgreSQL)
- **Base de Datos**: Neon.tech PostgreSQL
- **Autenticación**: NextAuth.js con credenciales
- **Styling**: Tailwind CSS + shadcn/ui
- **Icons**: Lucide React

## 3. UI/UX Specification

### Color Palette
- **Primary**: `#1e3a5f` (Azul oscuro institucional)
- **Secondary**: `#c9a227` (Dorado/Beige educativo)
- **Accent**: `#2d5a87` (Azul medio)
- **Background**: `#fafbfc` ( Blanco hueso)
- **Surface**: `#ffffff`
- **Text Primary**: `#1a1a2e`
- **Text Secondary**: `#64748b`

### Typography
- **Headings**: "Playfair Display" (elegante, institucional)
- **Body**: "Inter" (limpio, legible)

### Layout Structure
- **Header**: Navbar fija con logo, menú de navegación, barra de búsqueda, botón login
- **Hero**: Banner principal con imagen, título animado, CTA
- **Sections**: Ideario, Primario, Secundario, Nosotros, Proyectos, Contacto
- **Footer**: Información de contacto, redes sociales, enlaces rápidos

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Visual Effects
- Transiciones suaves en hover
- Cards con sombra sutil
- Animaciones de entrada (fade-in, slide-up)
- Parallax en hero

## 4. Database Schema (Prisma)

### Models

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String?
  role      Role     @default(ADMIN)
  createdAt DateTime @default(now())
}

enum Role {
  ADMIN
  EDITOR
}

model Category {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  description String?
  color       String   @default("#1e3a5f")
  posts       Post[]
  createdAt   DateTime @default(now())
}

model Post {
  id          String      @id @default(cuid())
  title       String
  slug        String      @unique
  excerpt     String?
  content     String      @db.Text
  imageUrl    String?
  published   Boolean     @default(false)
  featured    Boolean     @default(false)
  categoryId  String
  category    Category    @relation(fields: [categoryId], references: [id])
  authorId    String?
  createdAt   DateTime    @default(now())
  updatedAt   DateTime    @updatedAt
}

model ContactMessage {
  id        String   @id @default(cuid())
  name      String
  email     String
  phone     String?
  subject   String?
  message   String   @db.Text
  read     (false)
  created Boolean  @defaultAt DateTime @default(now())
}
```

## 5. Pages Structure

### Public Pages
- `/` - Home con todas las secciones
- `/noticias` - Listado de noticias con filtros por categoría
- `/noticias/[slug]` - Detalle de noticia
- `/busqueda` - Resultados de búsqueda
- `/login` - Login de administrador

### Admin Pages (protegidas)
- `/admin` - Dashboard
- `/admin/noticias` - Gestor de noticias
- `/admin/noticias/nueva` - Crear noticia
- `/admin/noticias/[id]/editar` - Editar noticia
- `/admin/categorias` - Gestor de categorías

## 6. Components

### Core Components
- `Navbar` - Navegación principal con búsqueda
- `Hero` - Banner principal
- `SearchBar` - Barra de búsqueda
- `NewsCard` - Card de noticia
- `CategoryBadge` - Badge de categoría
- `SectionTitle` - Títulos de sección
- `Footer` - Pie de página
- `ContactForm` - Formulario de contacto
- `AdminSidebar` - Sidebar del admin
- `NewsTable` - Tabla de noticias admin
- `RichTextEditor` - Editor de contenido

## 7. Functionality

### Sistema de Noticias
- CRUD completo de noticias
- Categorías: Eventos, Noticias, Avisos, Comunicación, Actividades
- Publicación/draft
- Featured posts
- Imagen principal
- Slug automático

### Búsqueda
- Búsqueda en tiempo real
- Filtro por categoría
- Resultados ordenados por fecha

### Autenticación
- Login con email/password
- Sesión persistente
- Roles (Admin, Editor)
- Protección de rutas admin

### Contacto
- Formulario de contacto
- Guardado en BD
- Notificación (opcional)

## 8. Acceptance Criteria

- [ ] Landing page carga correctamente con todas las secciones
- [ ] Sistema de noticias funciona con CRUD completo
- [ ] Autenticación permite login y logout
- [ ] Barra de búsqueda retorna resultados relevantes
- [ ] Diseño es responsivo y moderno
- [ ] Conexión a Neon DB funciona correctamente
- [ ] Imágenes se guardan y muestran correctamente
- [ ] Formulario de contacto guarda mensajes
