import arrow from '../../assets/images/arrow.png'
import popupMenu from '../../assets/images/popupMenu.png'
import title from '../../assets/images/targemyTitle.png'

import styles from './styles.module.css'

const Navbar = () => {

    return (
        <div className={styles.navbarContainer}>
            <div className={styles.backButton}>
                <img className={styles.backButton__img} src={arrow}/>
            </div>
            <img className={styles.title} src={title}/>
            <div className={styles.popupMenuButton}>
                <img className={styles.popupMenuButton__img} src={popupMenu}/>
            </div>
        </div>
    )
}

export default Navbar