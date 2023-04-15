import styles from './styles.module.scss'
interface Props {
    image: string
}
export default function ImgCard({ image }: Props): JSX.Element {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt="" />
        </div>
    )
}
