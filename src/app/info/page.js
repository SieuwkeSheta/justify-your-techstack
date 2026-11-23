import Info from "@/components/InfoList"
import Contact from "@/components/Contact"

export const metadata = {
  title: "Info",
}

export default function InfoPage() {
  return (
    <main>
      <Info />
      <Contact />
    </main>
  )
}