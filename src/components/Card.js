import Link from "next/link"
import { getWebsites } from "@/data/websites"
import styles from "./Card.module.css"

const faviconApi = "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url="

export default async function Card() {
    const websites = await getWebsites()

    return (
        <ul className={styles["card-list"]}>
            {websites.map((website) => (
                <li key={website.id} className={styles.card}>
                    <Link href={`/${website.slug}`}>
                        <img src={`${faviconApi}${website.homepage}/&size=128`} alt="" loading="lazy" width="128" height="128"/>
                        <h2>{website.title}</h2>
                        <label>
                            <progress max="100" value="0">0%</progress>
                            0%
                        </label>
                        <ul>
                            <li><button><img src="/auditicon.svg" alt="" width="25" height="25" /></button></li>
                            <li><button><img src="/editicon.svg" alt="" width="25" height="25" /></button></li>
                            <li><button><img src="/deleteicon.svg" alt="" width="25" height="25" /></button></li>
                        </ul>
                    </Link>
                </li>
            ))}
        </ul>
    )
}