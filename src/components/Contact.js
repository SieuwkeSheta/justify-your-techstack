import styles from "./Contact.module.css"

export default async function Card() {
    return (
        <section className={styles.contact}>
            <h2>Contact opnemen?</h2>
            <p>Indien u vragen heeft of mocht er nog enige onduidelijkheid bestaan, kunt u via onderstaand formulier contact met ons opnemen.</p>

            <form>
                <label>
                    Naam
                    <input type="text" placeholder="naam" />
                </label>

                <label>
                    Email
                    <input type="email" placeholder="email" />
                </label>

                <label>
                    Uw vraag
                    <textarea placeholder="Bericht.." rows="3"></textarea>
                </label>

                <button type="submit">Verstuur</button>
            </form>
        </section>
    )
}