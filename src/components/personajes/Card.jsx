import styles from './Card.module.css';

export default function Card ({info}) {
    return(
	<div className={styles.card}>
	    <div className="row">
		<div className="col-4">
		    <img className={styles.imagen} src={info.image} alt="personaje" />
		</div>
		<div className={`col ${styles.columna}`}>
		    <div className={styles.datos}>
			<h1 className={styles.color}>NAME</h1>
			<h3>STATUS</h3>
			<h3>SPECIES</h3>
			<h3>GENDER</h3>
		    </div>
		    <div className={styles.info}>
			<h1>{info.name}</h1>
			<h3>{info.status}</h3>
			<h3>{info.species}</h3>
			<h3>{info.gender}</h3>
		    </div>
		</div>
	    </div>
	</div> 
    );
}
