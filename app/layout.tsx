import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'レイクランド大学ジャパンキャンパス (LUJ)',
  description: 'Lakeland University Japan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
