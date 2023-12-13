import styles from './Inicio.module.css';
import logo from '../../assets/logo.png';

export default function Inicio(){

    return(
	<main className={styles.fondo}>
	    <img className={styles.logo} src={logo} alt="logo"/>
	    <section className={styles.buscador}>
		<span className={styles.inputIcon}>Icon</span>
		<input className={styles.inputBuscador} type="text" placeholder="BUSCAR PERSONAJE" />
	    </section>
	</main>
    );
}

