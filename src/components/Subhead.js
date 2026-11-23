import styles from "./Subhead.module.css"

export default async function Subhead() {
    return (
        <section className={styles.subheader}>
            <label className={styles["add-partner"]}>
                Partner toevoegen:
                <button><img src="/addicon.svg" width="25" height="25" /></button>
            </label>

            <button className={styles.filter}>
                Filter pagina
                <img src="/filtericon.svg" width="25" height="25" />
            </button>

            <label className={styles.sort}>
                Sorteren op:
                <select>
                    <option>A-Z</option>
                    <option>Z-A</option>
                </select>
            </label>

            <search>
                <label>
                    <input type="search" placeholder="zoeken" />
                </label>
            </search>
        </section>
    )
}