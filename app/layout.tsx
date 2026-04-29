import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

export const metadata: Metadata = {
  title: 'TABARA GROUP | Découvrez le Sénégal autrement',
  description: 'Agence de tourisme au Sénégal - Circuits sur mesure, tours de ville, visites guidées et excursions safari. Vivez une expérience authentique avec des guides locaux experts.',
  keywords: ['tourisme Sénégal', 'safari Sénégal', 'voyage Dakar', 'excursions Sénégal', 'guide local Sénégal'],
  openGraph: {
    title: 'TABARA GROUP | Découvrez le Sénégal autrement',
    description: 'Agence de tourisme premium au Sénégal - Circuits sur mesure et expériences uniques',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="bg-background scroll-smooth">
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased overflow-x-hidden w-full`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
