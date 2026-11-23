import { getWebsites } from "@/data/websites"
import Link from "next/link"
import styles from "./partner.module.css"

// Next.js requires this special function name to dynamically set the browser tab title based on the URL slug
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const websites = await getWebsites()
  const website = websites.find((website) => website.slug === slug)

  return {
    title: website?.title || undefined,
  }
}

// Display the page matching the URL slug (name)
export default async function PartnerPage({ params }) {
    const websites = await getWebsites()

    // Get the slug from the URL so we know which website to look for
    const { slug } = await params

    // Look through all the websites and find the one where the slug matches the URL
    const website = websites.find((website) => website.slug === slug)

    return (
        <main>
            <section className={styles.partner}>
                <h1>Dit is de {website.title} partner pagina.</h1>
                <p>Er staat hier nog geen content. Dit is een testpagina om te kijken of de URL-slug werkt.</p>
                <Link href={"/"}>Terug naar de homepagina</Link>
            </section>
        </main>
    )
}