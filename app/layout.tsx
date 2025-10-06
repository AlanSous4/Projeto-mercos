import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/contexts/auth-context"
import { ThemeProvider } from "next-themes"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mercos — Plataforma B2B & Força de Vendas",
  description:
    "Mercos — solução completa de e-commerce B2B, força de vendas e integrações para empresas.",
  generator: "Next.js + Vercel",
  metadataBase: new URL("https://projeto-mercos.vercel.app"),

  openGraph: {
    title: "Mercos — Plataforma B2B & Força de Vendas",
    description:
      "Mercos — solução completa de e-commerce B2B, força de vendas e integrações para empresas.",
    url: "https://projeto-mercos.vercel.app",
    siteName: "Mercos",
    images: [
      {
        url: "https://projeto-mercos.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mercos — B2B & Força de Vendas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mercos — Plataforma B2B & Força de Vendas",
    description:
      "Mercos — solução completa de e-commerce B2B, força de vendas e integrações para empresas.",
    images: ["https://projeto-mercos.vercel.app/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
    >
      <body>
        <Suspense fallback={null}>
          <AuthProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </AuthProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
