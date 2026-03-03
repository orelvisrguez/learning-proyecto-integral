import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/Providers"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.learning.edu.ar"),
  title: {
    default: "Learning Proyecto Integral - Educación Bilingüe de Excelencia",
    template: "%s | Learning Proyecto Integral",
  },
  description: "Institución educativa con 16 años de experiencia en educación bilingüe español-inglés. Escuela primaria y secundaria con certificaciones Cambridge. Formación integral.",
  keywords: ["Learning Proyecto Integral", "educación bilingüe", "escuela primaria", "escuela secundaria", "Cambridge", "certificados internacionales", "bilingüe", "educación"],
  authors: [{ name: "Learning Proyecto Integral" }],
  creator: "Learning Proyecto Integral",
  publisher: "Learning Proyecto Integral",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.learning.edu.ar",
    siteName: "Learning Proyecto Integral",
    title: "Learning Proyecto Integral - Educación Bilingüe de Excelencia",
    description: "Institución educativa con 16 años de experiencia en educación bilingüe. Primaria y Secundaria con certificaciones Cambridge.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Learning Proyecto Integral",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Proyecto Integral",
    description: "Educación bilingüe de excelencia con 16 años de experiencia",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
