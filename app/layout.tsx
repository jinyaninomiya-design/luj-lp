import "@/app/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "レイクランド大学ジャパンキャンパス | LUJ",
  description: "東京で学ぶ米国の大学",
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
