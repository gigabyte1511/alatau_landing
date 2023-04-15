import styles from './styles.module.scss'

interface Props {
    header: string
    text: string
}

export default function TextCard({ header, text }: Props): JSX.Element {
    return (
        <div className={styles.container}>
            <h2 className={styles.header}>{header}</h2>
            <p className={styles.text}>{text}</p>
        </div>
    )
}
