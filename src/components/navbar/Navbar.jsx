import styles from './Navbar.module.css';
import logo from '../../assets/logo.png'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.containerLogo}>
                <img className={styles.logo} src={logo} alt="logo" />
            </div>
            <div className={styles.buscador}>
                <input type="text" size="30" className="form-control" placeholder="Buscador de Personaje"/>
            </div>
            
        </nav>
    );
}