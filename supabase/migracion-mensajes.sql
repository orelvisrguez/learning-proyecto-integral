-- ===========================================
-- MIGRACIÓN: Sistema de Gestión de Mensajes
-- Ejecutar en Supabase SQL Editor
-- ===========================================

-- 1. Agregar columnas nuevas si no existen
ALTER TABLE mensajes_contacto ADD COLUMN IF NOT EXISTS estado VARCHAR(50) DEFAULT 'nuevo';
ALTER TABLE mensajes_contacto ADD COLUMN IF NOT EXISTS notas_internas TEXT;
ALTER TABLE mensajes_contacto ADD COLUMN IF NOT EXISTS fecha_contacto TIMESTAMP WITH TIME ZONE;
ALTER TABLE mensajes_contacto ADD COLUMN IF NOT EXISTS atendido_por VARCHAR(255);

-- 2. Actualizar mensajes existentes que no tienen estado
UPDATE mensajes_contacto SET estado = 'nuevo' WHERE estado IS NULL;

-- 3. Agregar constraint CHECK si no existe (puede fallar si ya existe, ignorar el error)
-- ALTER TABLE mensajes_contacto ADD CONSTRAINT mensajes_estado_check
--   CHECK (estado IN ('nuevo', 'leido', 'en_proceso', 'contactado', 'respondido', 'archivado'));

-- 4. Crear índice si no existe
CREATE INDEX IF NOT EXISTS idx_mensajes_estado ON mensajes_contacto(estado);

-- 5. Habilitar RLS
ALTER TABLE mensajes_contacto ENABLE ROW LEVEL SECURITY;

-- 6. Eliminar políticas existentes (si existen) y recrearlas
DROP POLICY IF EXISTS "Cualquiera puede enviar mensajes" ON mensajes_contacto;
DROP POLICY IF EXISTS "Admins pueden ver mensajes" ON mensajes_contacto;
DROP POLICY IF EXISTS "Admins pueden actualizar mensajes" ON mensajes_contacto;

-- 7. Política para insertar mensajes (público - cualquiera puede enviar)
CREATE POLICY "Cualquiera puede enviar mensajes"
  ON mensajes_contacto
  FOR INSERT
  WITH CHECK (TRUE);

-- 8. Política para que admins puedan ver todos los mensajes
CREATE POLICY "Admins pueden ver mensajes"
  ON mensajes_contacto
  FOR SELECT
  TO authenticated
  USING (TRUE);

-- 9. Política para que admins puedan actualizar mensajes
CREATE POLICY "Admins pueden actualizar mensajes"
  ON mensajes_contacto
  FOR UPDATE
  TO authenticated
  USING (TRUE)
  WITH CHECK (TRUE);

-- 10. Verificar que todo está correcto
SELECT
  'Columnas en mensajes_contacto:' as info,
  column_name,
  data_type,
  column_default
FROM information_schema.columns
WHERE table_name = 'mensajes_contacto'
ORDER BY ordinal_position;

-- 11. Contar mensajes existentes
SELECT
  'Mensajes existentes:' as info,
  COUNT(*) as total,
  COUNT(CASE WHEN estado = 'nuevo' THEN 1 END) as nuevos,
  COUNT(CASE WHEN estado IS NULL THEN 1 END) as sin_estado
FROM mensajes_contacto;
