import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import NotificationBanner from "@/components/NotificationBanner"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NotificationBanner />
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}
