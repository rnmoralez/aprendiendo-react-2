import {useState, useEffect} from 'react';
import styles from './Personaje.module.css';
import Card from './Card.jsx';

export default function Personaje(){   

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
	const getData = async () => {
	    await fetch("https://rickandmortyapi.com/api/character/1,2,3")
		.then((res) => res.json())
    	        .then((res) => setPersonajes(res))
	        .catch(":(");
	}
	getData();
    }, []);

    return(
	<main className={styles.fondo}>
	    <h1 className={styles.title}>PERSONAJES</h1>
	    <div className={styles.cardGroup}>
		{personajes.map((personaje) => (
		    <Card key={personaje.id} info={personaje} />
		))}	
	    </div>
	</main>
    );
}
