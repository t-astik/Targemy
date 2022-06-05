import arrow from '../../assets/images/arrow.svg'
import popupMenu from '../../assets/images/popupMenu.svg'
import title from '../../assets/images/targemyTitle.svg'

import styles from './styles.module.css'

const Navbar = () => {

    return (
        <div className={styles.navbarContainer}>
            <button className={styles.backButton}>
                <img className={styles.backButton__img} src={arrow}/>
            </button>
            <img className={styles.title} src={title}/>
            <button className={styles.popupMenuButton}>
                <img className={styles.popupMenuButton__img} src={popupMenu}/>
            </button>
        </div>
    )
}

export default Navbar