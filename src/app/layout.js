import "./globals.css"
import Head from "@/components/Head"

export const metadata = {
  title: "Vervoerregio Amsterdam",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Head />
        {children}
      </body>
    </html>
  )
}
