import styles from './styles.module.scss'
import img from './img/header.png'

export default function Header(): JSX.Element {
    return (
        <div className={styles.container}>
            <img src={img} alt="" />
            <div className={styles.logo}>Достопримечательности залийского алатау</div>
        </div>
    )
}
