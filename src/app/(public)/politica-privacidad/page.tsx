import Link from "next/link"
import { Shield, Eye, Lock, Mail, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Política de Privacidad",
  description: "Política de Privacidad de Learning Proyecto Integral - Institución educativa bilingüe",
}

export default function PoliticaPrivacidad() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm p-8 sm:p-12">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Política de Privacidad
            </h1>
            <p className="text-slate-600">
              Learning Proyecto Integral
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Última actualización: Marzo 2026
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                1. Responsable del Tratamiento de Datos
              </h2>
              <p className="text-slate-600 mb-4">
                En cumplimiento de la <strong>Ley Nacional de Protección de Datos Personales N° 25.326</strong> y sus modificatorias, así como de la <strong>Disposición N° 11/2006</strong> de la Dirección Nacional de Protección de Datos Personales (DNPDP), informamos los siguientes datos:
              </p>
              <div className="bg-slate-50 p-6 rounded-xl space-y-2 text-slate-700">
                <p><strong>Denominación:</strong> Learning Proyecto Integral</p>
                <p><strong>DIEGEP:</strong> 7814</p>
                <p><strong>Domicilio legal:</strong> Boulevard Santa Fe 1850, Olivos, Vicente López, Buenos Aires, Argentina</p>
                <p><strong>CUIT:</strong> [Número de CUIT]</p>
                <p><strong>Correo electrónico:</strong> learning@learning.esc.edu.ar</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                2. Datos Personales Recopilados
              </h2>
              <p className="text-slate-600 mb-4">
                Learning Proyecto Integral recopila los siguientes datos personales de forma directa y automatizada:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Datos de identificación:</strong> Nombre, apellido, documento de identidad (DNI, Pasaporte)</li>
                <li><strong>Datos de contacto:</strong> Dirección de correo electrónico, número de teléfono, domicilio</li>
                <li><strong>Datos académicos:</strong> Nivel educativo, año/ciclo lectivo, información de inscripción</li>
                <li><strong>Datos familiares:</strong> Información de padres/tutores legales para estudiantes menores de edad</li>
                <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia (recolectados automáticamente mediante cookies)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                3. Finalidad del Tratamiento
              </h2>
              <p className="text-slate-600 mb-4">
                Los datos personales recopilados serán utilizados exclusivamente para las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Gestión educativa:</strong> Proceso de admisión, inscripción, matriculación y seguimiento académico de los estudiantes</li>
                <li><strong>Comunicación institucional:</strong> Envío de información sobre actividades, eventos, circulares y comunicaciones oficiales</li>
                <li><strong>Atención de consultas:</strong> Respuesta a requerimientos, consultas y solicitudes de información</li>
                <li><strong>Prestaciones de servicios:</strong> Desarrollo y mejora de los servicios educativos ofrecidos</li>
                <li><strong>Cumplimiento legal:</strong> Cumplimiento de obligaciones legales y regulatorias en materia educativa</li>
                <li><strong>Análisis estadístico:</strong> Elaboración de estadísticas internas para mejora de procesos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                4. Base Legal del Tratamiento
              </h2>
              <p className="text-slate-600 mb-4">
                El tratamiento de datos personales se fundamenta en las siguientes bases legales conforme a la Ley 25.326:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Consentimiento del titular:</strong> Para los casos en que se requiera autorización expresa (Art. 5°, inc. a)</li>
                <li><strong>Ejecución de contrato:</strong> Para la prestación de servicios educativos (Art. 5°, inc. c)</li>
                <li><strong>Obligación legal:</strong> Para el cumplimiento de obligaciones legales en materia educativa (Art. 5°, inc. b)</li>
                <li><strong>Interés legítimo:</strong> Para finalidades directamente relacionadas con la relación educativa (Art. 5°, inc. f)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                5. Transferencia y Comunicación de Datos
              </h2>
              <p className="text-slate-600 mb-4">
                Los datos personales podrán ser comunicados a los siguientes terceros exclusivamente para el cumplimiento de las finalidades detalladas:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Autoridades educativas nacionales y provinciales (Ministerio de Educación, DIEGEP)</li>
                <li>Instituciones académicas合作伙伴 para programas de intercambio o certificaciones internacionales</li>
                <li>Proveedores de servicios tecnológicos necesarios para la prestación del servicio educativo</li>
                <li>Compañías de seguros relacionadas con coberturas educativas</li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>No se transferirán datos a terceros países</strong> sin el consentimiento expreso del titular, conforme lo establece el Artículo 12 de la Ley 25.326.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                6. Cookies y Tecnologías de Rastreo
              </h2>
              <p className="text-slate-600 mb-4">
                Este sitio web utiliza cookies y tecnologías de rastreo similares. Conforme a la <strong>Ley 25.673</strong> (Ley de Protección de Datos Personales) y normativas complementarias, informamos:
              </p>
              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold text-[#1e3a5f] mb-3">Tipos de cookies utilizadas:</h3>
                <ul className="list-disc pl-6 space-y-2 text-slate-600">
                  <li><strong>Cookies técnicas:</strong> Estrictamente necesarias para la navegación y funcionamiento del sitio</li>
                  <li><strong>Cookies de análisis:</strong> Google Analytics para estadísticas de uso del sitio (anonimizadas)</li>
                  <li><strong>Cookies de preferencias:</strong> Para recordar configuraciones y preferencias del usuario</li>
                </ul>
              </div>
              <p className="text-slate-600 mt-4">
                El usuario puede configurar su navegador para rechazar o eliminar cookies. Sin embargo, algunas funcionalidades del sitio podrían verse afectadas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                7. Derechos del Titular de los Datos
              </h2>
              <p className="text-slate-600 mb-4">
                Conforme a los <strong>Artículos 14, 15 y 16 de la Ley 25.326</strong>, el titular de los datos personales tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Acceso:</strong> Obtener información sobre los datos personales que poseemos</li>
                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de datos cuando no sean necesarios para los fines que motivaron su recopilación</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de datos cuando existan motivos legítimos</li>
                <li><strong>Portabilidad:</strong> Solicitar los datos en formato estructurado y legible</li>
                <li><strong>Revocación:</strong> Retirar el consentimiento previamente otorgado</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Para ejercer estos derechos, el titular deberá presentar una solicitud ante la Dirección Nacional de Protección de Datos Personales (DNPDP) o directamente ante Learning Proyecto Integral mediante comunicación escrita al correo: <strong>learning@learning.esc.edu.ar</strong>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                8. Medidas de Seguridad
              </h2>
              <p className="text-slate-600 mb-4">
                Learning Proyecto Integral implementsa las siguientes medidas de seguridad para proteger los datos personales, conforme al <strong>Artículo 9 de la Ley 25.326</strong> y la <strong>Disposición N° 11/2006</strong>:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Cifrado de datos mediante protocolos SSL/TLS</li>
                <li>Sistemas de firewall y protección contra intrusiones</li>
                <li>Controles de acceso diferenciados según rol de usuario</li>
                <li>Respaldo y recuperación de datos (backup)</li>
                <li>Capacitación del personal en protección de datos</li>
                <li>Acuerdos de confidencialidad con proveedores</li>
                <li>Registro de accesos y auditorías periódicas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                9. Menores de Edad
              </h2>
              <p className="text-slate-600 mb-4">
                Para la recopilación de datos de menores de edad, se requiere el consentimiento de los padres o representantes legales. Los datos de estudiantes menores serán utilizados exclusivamente para fines educativos y administrativos, conforme a las normativas vigentes del sistema educativo argentino.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                10. Conservación de Datos
              </h2>
              <p className="text-slate-600 mb-4">
                Los datos personales serán conservados durante el período necesario para cumplir con las finalidades del tratamiento, incluyendo:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Expedientes académicos:</strong> Período mínimo establecido por la normativa educativa (10 años como mínimo)</li>
                <li><strong>Datos de contacto:</strong> Durante la relación contractual educativa y hasta 5 años después</li>
                <li><strong>Datos de navegación:</strong> Máximo 2 años para análisis estadísticos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                11. Régimen Sancionatorio
              </h2>
              <p className="text-slate-600 mb-4">
                El incumplimiento de las disposiciones de la Ley 25.326 y sus modificatorias puede derivar en sanciones administrativas предусмотренные por la normativa vigente, incluyendo:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Amonestaciones</li>
                <li>Multas de $1.000 a $100.000 pesos</li>
                <li>Suspensión o cancelación de las inscripciones en el Registro Nacional de Bases de Datos</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                12. GOOGLE ANALYTICS
              </h2>
              <p className="text-slate-600 mb-4">
                Este sitio web utiliza <strong>Google Analytics</strong>, un servicio de análisis web proporcionado por Google LLC. La información recopilada por las cookies (dirección IP anonimizada) se transmite a servidores de Google en Estados Unidos.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Conforme al acuerdo de procesamiento de datos con Google:</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Google procesará los datos únicamente como encargado del tratamiento</li>
                <li>La dirección IP será anonimizada antes de su almacenamiento</li>
                <li>No se combinarán datos con otros servicios de Google</li>
                <li>Los datos se eliminan automáticamente después del período establecido</li>
              </ul>
              <p className="text-slate-600 mt-4">
                El usuario puede optar por no ser rastreado mediante la instalación del <strong>Complemento de Opt-out de Google Analytics</strong> disponible en: <a href="https://tools.google.com/dlpage/gaoptout" className="text-[#1e3a5f] underline" target="_blank" rel="noopener">https://tools.google.com/dlpage/gaoptout</a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                13. Enlaces a Terceros
              </h2>
              <p className="text-slate-600 mb-4">
                Este sitio puede contener enlaces a otros sitios web de terceros. Learning Proyecto Integral no controla ni es responsable del contenido, políticas de privacidad o prácticas de estos sitios. Recomendamos revisar las políticas de privacidad de cada sitio que visite.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                14. Modificaciones a la Política de Privacidad
              </h2>
              <p className="text-slate-600 mb-4">
                Learning Proyecto Integral se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. Cualquier modificación será publicada en esta página con la fecha de actualización correspondiente. Se recomienda revisar periódicamente esta política para estar informado sobre cómo protegemos sus datos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                15. Contacto
              </h2>
              <p className="text-slate-600 mb-4">
                Para consultas, ejercicio de derechos o presentaciones relacionadas con la protección de datos personales, puede contactarnos:
              </p>
              <div className="bg-slate-50 p-6 rounded-xl space-y-3 text-slate-700">
                <p className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#1e3a5f]" />
                  <span>Learning Proyecto Integral - Boulevard Santa Fe 1850, Olivos, Buenos Aires</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#1e3a5f]" />
                  <span>learning@learning.esc.edu.ar</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#1e3a5f]" />
                  <span>4796-9394 / 4791-7205</span>
                </p>
              </div>
              <p className="text-slate-600 mt-4">
                <strong>También puede presentar su reclamo ante:</strong><br />
                Dirección Nacional de Protección de Datos Personales (DNPDP)<br />
                Sarmiento 1118, Piso 7°, Ciudad Autónoma de Buenos Aires<br />
                www.argentina.gob.ar/protecciondedatos
              </p>
            </section>

            <section className="border-t pt-8">
              <p className="text-slate-600 text-sm text-center">
                Esta política de privacidad fue elaborada en cumplimiento de:<br />
                • Ley Nacional de Protección de Datos Personales N° 25.326<br />
                • Disposición N° 11/2006 de la DNPDP<br />
                • Decreto N° 1558/2001 (Reglamento de la Ley 25.326)<br />
                • Ley N° 26.994 (Código Civil y Comercial de la Nación - Datos Personales)
              </p>
            </section>
          </div>

          <div className="mt-12 pt-8 border-t text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] text-white font-medium rounded-xl hover:bg-[#2d5a87] transition-colors"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
