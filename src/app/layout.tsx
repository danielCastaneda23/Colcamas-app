import './globals.sass'

import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'

export const metadata: Metadata = {
  title: 'Colcamas Alquiler y Venta',
  description: 'Alquiler y Venta De Insumos Hospitalarios, camas hospitalarias, sillas de ruedas.',
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: {
      url: "/favicon.png",
      type: "image/png",
    },
  },
}

export default function RootxLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
