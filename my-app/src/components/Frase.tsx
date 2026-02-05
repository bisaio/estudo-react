import styles from './Frase.module.css'

export default function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Lorem Ipsum</p>
        </div>
    )
}