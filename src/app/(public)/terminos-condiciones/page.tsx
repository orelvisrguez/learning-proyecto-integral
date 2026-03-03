import Link from "next/link"
import { FileText, Scale, Users, GraduationCap, Mail, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Términos y Condiciones",
  description: "Términos y Condiciones de uso del sitio web de Learning Proyecto Integral",
}

export default function TerminosCondiciones() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm p-8 sm:p-12">
          <div className="text-center mb-12">
            <div className="w-16 h-16 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a87] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#1e3a5f] mb-4">
              Términos y Condiciones
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
                <FileText className="w-5 h-5" />
                1. Aceptación de Términos
              </h2>
              <p className="text-slate-600 mb-4">
                Al acceder y utilizar el sitio web de <strong>Learning Proyecto Integral</strong> (en adelante "el Sitio"), usted acepta cumplir y estar sujeto a los presentes Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, por favor no utilice el Sitio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                2. Definiciones
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>"Institución"</strong>: Learning Proyecto Integral, entidad educativa reconocida por DIEGEP 7814</li>
                <li><strong>"Usuario"</strong>: Toda persona que acceda al Sitio web</li>
                <li><strong>"Contenido"</strong>: Toda información, texto, gráficos, imágenes, videos, software y demás elementos disponibles en el Sitio</li>
                <li><strong>"Servicios"</strong>: Los servicios educativos y de información ofrecidos a través del Sitio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                3. Objeto del Sitio
              </h2>
              <p className="text-slate-600 mb-4">
                El Sitio tiene como objetivo principal:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Brindar información institucional sobre la propuesta educativa</li>
                <li>Facilitar el proceso de admisión e inscripción de estudiantes</li>
                <li>Publicar noticias, eventos y actividades de la comunidad educativa</li>
                <li>Ofrecer canales de comunicación entre la institución y las familias</li>
                <li>Publicar contenido educativo y de interés general</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                4. Uso del Sitio
              </h2>
              <p className="text-slate-600 mb-4">
                El Usuario se compromete a utilizar el Sitio de manera lawful y de acuerdo con los siguientes principios:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>No realizar actividades ilícitas o que vulneren derechos de terceros</li>
                <li>No intentar acceder a áreas restringidas del sistema</li>
                <li>No transmitir virus, malware o cualquier código malicioso</li>
                <li>No utilizar el Sitio para fines comerciales no autorizados</li>
                <li>Respetar la propiedad intelectual del contenido publicado</li>
                <li>No reproducir, modificar o distribuir contenido sin autorización</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                5. Cuentas de Acceso
              </h2>
              <p className="text-slate-600 mb-4">
                Ciertos servicios del Sitio pueden requerir el registro de una cuenta de usuario. El Usuario es responsable de:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Proporcionar información veraz y actualizada</li>
                <li>Mantener la confidencialidad de su contraseña</li>
                <li>Notificar inmediatamente cualquier uso no autorizado de su cuenta</li>
                <li>Asumir responsabilidad por todas las actividades realizadas con su cuenta</li>
              </ul>
              <p className="text-slate-600 mt-4">
                La Institución se reserva el derecho de suspender o cancelar cuentas que violen estos términos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                6. Proceso de Admisión e Inscripción
              </h2>
              <p className="text-slate-600 mb-4">
                El proceso de admisión e inscripción a Learning Proyecto Integral está sujeto a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Disponibilidad de vacantes en el nivel y año solicitado</li>
                <li>Cumplimiento de los requisitos académicos y administrativos establecidos</li>
                <li>Entrevista con las autoridades académicas</li>
                <li>Presentación de documentación requerida en tiempo y forma</li>
                <li>Aceptación del Ideario Institucional y normas de convivencia</li>
              </ul>
              <p className="text-slate-600 mt-4">
                La Institución se reserva el derecho de admisión conforme a la legislación educativa vigente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                7. Propiedad Intelectual
              </h2>
              <p className="text-slate-600 mb-4">
                Todo el contenido del Sitio, incluyendo pero no limitando a textos, gráficos, logotipos, imágenes, videos, software y código, es propiedad de <strong>Learning Proyecto Integral</strong> o de sus respectivos titulares, y está protegido por las leyes de propiedad intelectual argentina e internacional.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Queda prohibida la reproducción total o parcial</strong> del contenido del Sitio sin autorización escrita previa de la Institución.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                8. Limitación de Responsabilidad
              </h2>
              <p className="text-slate-600 mb-4">
                <strong>Learning Proyecto Integral</strong> no será responsable por:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Daños o perjuicios derivados del uso del Sitio</li>
                <li>Interrupciones en el servicio por mantenimiento o causas técnicas</li>
                <li>Exactitud, completitud o actualidad de la información publicada</li>
                <li>Contenido de sitios web de terceros enlazados desde el Sitio</li>
                <li>Pérdida de datos por causas técnicas o falhas de conectividad</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                9. Enlaces a Terceros
              </h2>
              <p className="text-slate-600 mb-4">
                El Sitio puede contener enlaces a sitios web de terceros. La Institución no controla ni endorsea el contenido de estos sitios, y no será responsable por cualquier daño o perjuicio derivado de su uso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                10. Publicidad y Contenido de Terceros
              </h2>
              <p className="text-slate-600 mb-4">
                El Sitio puede incluir publicidad o contenido de terceros. La Institución no endorsea los productos o servicios anunciados, ni será responsable por la exactitud de la publicidad o el contenido de terceros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                11. Modificaciones de los Términos
              </h2>
              <p className="text-slate-600 mb-4">
                La Institución se reserva el derecho de modificar los presentes Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el Sitio. El uso continuado del Sitio después de las modificaciones implica la aceptación de los nuevos términos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                12. Normativa Aplicable y Jurisdicción
              </h2>
              <p className="text-slate-600 mb-4">
                Los presentes Términos y Condiciones se rigen por las leyes de la República Argentina, especialmente por:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Ley de Educación Nacional N° 26.206</li>
                <li>Ley de Protección de Datos Personales N° 25.326</li>
                <li>Código Civil y Comercial de la Nación</li>
                <li>Ley de Defensa del Consumidor N° 24.240</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Cualquier controversia derivada de los presentes términos será sometida a los tribunales ordinarios de la Ciudad de Buenos Aires, con exclusión de cualquier otro fuero o jurisdicción que pudiera corresponder.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                13. Fuerza Mayor
              </h2>
              <p className="text-slate-600 mb-4">
                La Institución no será responsable por el incumplimiento de sus obligaciones cuando este derive de causas de fuerza mayor, incluyendo pero no limitando a desastres naturales, pandemias, guerras, huelgas, fallos en sistemas de telecomunicación o cualquier otra circunstancia ajena a su control.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                14. Contacto
              </h2>
              <p className="text-slate-600 mb-4">
                Para cualquier consulta relacionada con los presentes Términos y Condiciones, puede contactarnos:
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
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
                15. Aceptación
              </h2>
              <p className="text-slate-600 mb-4">
                El Usuario manifiesta haber leído, comprendido y aceptar expresamente los presentes Términos y Condiciones, sin perjuicio de las limitaciones establecidas por la legislación aplicable en protección de los consumidores.
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
