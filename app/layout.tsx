// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Heebo } from 'next/font/google' // פונט מודרני ונקי
import WhatsAppButton from '@/components/WhatsAppButton'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const heebo = Heebo({ subsets: ['hebrew'] })

export const metadata: Metadata = {
  title: 'Multibrawn | אדריכלות דיגיטלית ואוטומציות מתקדמות לעסקים',
  description: 'אנחנו בונים מנועי צמיחה לעסקים: אתרי Next.js מהירים, אוטומציות n8n, וחיבור וואטסאפ חכם. תפסיקו לקנות אתרים, תתחילו לייצר לקוחות.',
  openGraph: {
    title: 'Multibrawn | אדריכלות דיגיטלית לעסקים',
    description: 'מנועי צמיחה אוטומטיים לעסקים שרוצים לגדול.',
    // images: ['/og-image.png'], // תוסיף תמונת שיתוף יפה ללינקדאין/פייסבוק
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className="scroll-smooth">
      <body className={`${heebo.className} bg-[#FBFCFE] text-slate-900 antialiased`}>
        <Header />
        <main className="min-h-screen relative overflow-hidden">
          {/* רקע דקורטיבי קליל ברמת ה-layout */}
          <div className="fixed inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
