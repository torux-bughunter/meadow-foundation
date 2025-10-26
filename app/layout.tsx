import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

// Force dynamic rendering for the entire app
export const dynamic = 'force-dynamic'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://cms.themedowfoundation.org'),
  title: "Medow Foundation - Physiotherapy Awareness & Community",
  description: "Raising awareness about physiotherapy, sharing stories, and connecting communities with evidence-based care.",
  generator: "Next.js",
  icons: {
    icon: "/Medow_Logo.png",
    shortcut: "/Medow_Logo.png",
    apple: "/Medow_Logo.png",
  },
  openGraph: {
    title: "Medow Foundation - Physiotherapy Awareness & Community",
    description: "Raising awareness about physiotherapy, sharing stories, and connecting communities with evidence-based care.",
    type: "website",
    images: ["/Medow_Logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medow Foundation - Physiotherapy Awareness & Community",
    description: "Raising awareness about physiotherapy, sharing stories, and connecting communities with evidence-based care.",
    images: ["/Medow_Logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
