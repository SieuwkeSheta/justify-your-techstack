import infos from "@/data/infos.json"
import styles from "./Info.module.css"

export default function Info() {
  return (
    <>
      {infos.map((info) => (
        <section key={info.title} className={styles.info}>
          {info.image && (
            <img src={info.image} alt="" width="200" />
          )}
          <h2>{info.title}</h2>
          <p>{info.text}</p>
        </section>
      ))}
    </>
  )
}