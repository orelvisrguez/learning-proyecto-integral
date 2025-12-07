-- Schema SQL para Learning Proyecto Integral
-- Ejecutar en Supabase SQL Editor

-- Tabla de Noticias
CREATE TABLE IF NOT EXISTS noticias (
  id BIGSERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  resumen TEXT NOT NULL,
  contenido TEXT NOT NULL,
  imagen_url TEXT,
  fecha_publicacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  categoria VARCHAR(50) DEFAULT 'noticia' CHECK (categoria IN ('evento', 'noticia', 'logro', 'anuncio')),
  destacada BOOLEAN DEFAULT FALSE,
  publicada BOOLEAN DEFAULT TRUE,
  slug VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para búsquedas eficientes
CREATE INDEX IF NOT EXISTS idx_noticias_fecha ON noticias(fecha_publicacion DESC);
CREATE INDEX IF NOT EXISTS idx_noticias_publicada ON noticias(publicada);
CREATE INDEX IF NOT EXISTS idx_noticias_destacada ON noticias(destacada);
CREATE INDEX IF NOT EXISTS idx_noticias_slug ON noticias(slug);

-- Tabla de Mensajes de Contacto
CREATE TABLE IF NOT EXISTS mensajes_contacto (
  id BIGSERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  nivel_interes VARCHAR(50) DEFAULT 'general' CHECK (nivel_interes IN ('inicial', 'primario', 'secundario', 'general')),
  mensaje TEXT NOT NULL,
  estado VARCHAR(50) DEFAULT 'nuevo' CHECK (estado IN ('nuevo', 'leido', 'en_proceso', 'contactado', 'respondido', 'archivado')),
  notas_internas TEXT,
  fecha_contacto TIMESTAMP WITH TIME ZONE,
  atendido_por VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para mensajes
CREATE INDEX IF NOT EXISTS idx_mensajes_estado ON mensajes_contacto(estado);
CREATE INDEX IF NOT EXISTS idx_mensajes_fecha ON mensajes_contacto(created_at DESC);

-- Migración: Si la tabla ya existe con campo 'leido', agregar nuevos campos
-- ALTER TABLE mensajes_contacto ADD COLUMN IF NOT EXISTS estado VARCHAR(50) DEFAULT 'nuevo';
-- ALTER TABLE mensajes_contacto ADD COLUMN IF NOT EXISTS notas_internas TEXT;
-- ALTER TABLE mensajes_contacto ADD COLUMN IF NOT EXISTS fecha_contacto TIMESTAMP WITH TIME ZONE;
-- ALTER TABLE mensajes_contacto ADD COLUMN IF NOT EXISTS atendido_por VARCHAR(255);
-- UPDATE mensajes_contacto SET estado = CASE WHEN leido THEN 'leido' ELSE 'nuevo' END WHERE estado IS NULL;

-- Trigger para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_noticias_updated_at
  BEFORE UPDATE ON noticias
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS)
ALTER TABLE noticias ENABLE ROW LEVEL SECURITY;
ALTER TABLE mensajes_contacto ENABLE ROW LEVEL SECURITY;

-- Políticas de lectura pública para noticias publicadas
CREATE POLICY "Noticias publicadas son públicas"
  ON noticias
  FOR SELECT
  USING (publicada = TRUE);

-- Política para insertar mensajes de contacto (público)
CREATE POLICY "Cualquiera puede enviar mensajes"
  ON mensajes_contacto
  FOR INSERT
  WITH CHECK (TRUE);

-- Datos de ejemplo para noticias
INSERT INTO noticias (titulo, resumen, contenido, categoria, destacada, slug) VALUES
(
  'Inscripciones Abiertas 2025',
  'Ya están abiertas las inscripciones para el ciclo lectivo 2025. Conocé nuestra propuesta educativa y agendá una entrevista con el equipo directivo.',
  'El Instituto Learning Proyecto Integral tiene el agrado de comunicar que ya se encuentran abiertas las inscripciones para el ciclo lectivo 2025. Nuestra propuesta educativa se enfoca en el desarrollo integral de cada alumno, fomentando la creatividad, el pensamiento crítico y los valores humanos. Te invitamos a conocer nuestras instalaciones y charlar con nuestro equipo directivo.',
  'anuncio',
  TRUE,
  'inscripciones-abiertas-2025'
),
(
  'Muestra de Arte Anual',
  'Los alumnos de todos los niveles presentaron sus obras artísticas en una jornada llena de creatividad y expresión.',
  'Con gran orgullo compartimos los resultados de nuestra Muestra de Arte Anual, donde los alumnos de todos los niveles demostraron su talento y creatividad. Las obras exhibidas reflejan el trabajo realizado durante todo el año en las distintas disciplinas artísticas.',
  'evento',
  FALSE,
  'muestra-arte-anual-2024'
),
(
  'Proyecto de Ciencias Destacado',
  'Estudiantes de secundario obtuvieron reconocimiento en la Feria de Ciencias Regional con su proyecto sobre energías renovables.',
  'Nos enorgullece anunciar que un grupo de estudiantes de nivel secundario fue reconocido en la Feria de Ciencias Regional por su innovador proyecto sobre energías renovables y sustentabilidad. Este logro refleja el compromiso de nuestra institución con la excelencia académica y la investigación.',
  'logro',
  FALSE,
  'proyecto-ciencias-destacado'
);

-- =============================================
-- POLÍTICAS PARA USUARIOS ADMINISTRADORES
-- =============================================

-- Política para que admins puedan ver TODAS las noticias (incluyendo borradores)
CREATE POLICY "Admins pueden ver todas las noticias"
  ON noticias
  FOR SELECT
  TO authenticated
  USING (TRUE);

-- Política para que admins puedan crear noticias
CREATE POLICY "Admins pueden crear noticias"
  ON noticias
  FOR INSERT
  TO authenticated
  WITH CHECK (TRUE);

-- Política para que admins puedan actualizar noticias
CREATE POLICY "Admins pueden actualizar noticias"
  ON noticias
  FOR UPDATE
  TO authenticated
  USING (TRUE)
  WITH CHECK (TRUE);

-- Política para que admins puedan eliminar noticias
CREATE POLICY "Admins pueden eliminar noticias"
  ON noticias
  FOR DELETE
  TO authenticated
  USING (TRUE);

-- Política para que admins puedan ver mensajes de contacto
CREATE POLICY "Admins pueden ver mensajes"
  ON mensajes_contacto
  FOR SELECT
  TO authenticated
  USING (TRUE);

-- Política para que admins puedan actualizar mensajes (marcar como leído)
CREATE POLICY "Admins pueden actualizar mensajes"
  ON mensajes_contacto
  FOR UPDATE
  TO authenticated
  USING (TRUE)
  WITH CHECK (TRUE);

-- =============================================
-- STORAGE BUCKET PARA IMÁGENES
-- =============================================

-- Crear bucket para imágenes (ejecutar en la sección Storage de Supabase)
-- INSERT INTO storage.buckets (id, name, public) VALUES ('imagenes', 'imagenes', true);

-- Política para subir imágenes (solo usuarios autenticados)
-- CREATE POLICY "Admins pueden subir imágenes"
--   ON storage.objects
--   FOR INSERT
--   TO authenticated
--   WITH CHECK (bucket_id = 'imagenes');

-- Política para ver imágenes (público)
-- CREATE POLICY "Imágenes son públicas"
--   ON storage.objects
--   FOR SELECT
--   USING (bucket_id = 'imagenes');

-- =============================================
-- INSTRUCCIONES DE CONFIGURACIÓN
-- =============================================

-- 1. Ejecutar este script en el SQL Editor de Supabase
-- 2. Ir a Authentication > Users y crear un usuario administrador
-- 3. Configurar las variables de entorno en .env:
--    - PUBLIC_SUPABASE_URL=tu-url
--    - PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
-- 4. Crear el bucket 'imagenes' en Storage > New bucket
-- 5. Configurar las políticas de Storage desde la UI de Supabase
