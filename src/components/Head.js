import Link from "next/link"
import styles from "./Head.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href={"/"}>
                <img src="/logo.svg" alt="" width="284" height="58" />
            </Link>
            <Link href={"/"}>
                <img src="/home.svg" alt="" width="32" height="32" />
                Home
            </Link>
            <Link href={"/info"}>
                <img src="/info.svg" alt="" width="32" height="32" />
                Info
            </Link>
            <Link href={"#"}>
                <img src="/account.svg" alt="" width="32" height="32" />
                Account
            </Link>
        </header>
    )
}