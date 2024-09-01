import styles from './Header.module.css'
import logo from '../images/logo1.png'
import { FaSearch } from 'react-icons/fa'

export function Header(){
    return(
        <div className={styles.header}>
            <div className='interface'>
                <div className={styles.dimen_header}>

                    <div className={styles.logotipo}>
                        <img className={styles.logo1} src={logo}/>
                    </div>

                    <nav className={styles.menu_header}>
                        <ul className={styles.ul}>
                            <li className={styles.li}><a className={styles.a} href='#'>HOME</a></li>
                            <li className={styles.li}><a className={styles.a} href='#'>SERVIÇOS</a></li>
                        </ul>
                    </nav>

                    <div className={styles.search}>
                        <FaSearch className={styles.icon}/>
                    </div>

                </div>
            </div>
        </div>
    )
}