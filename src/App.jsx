//https://aprendiendo-react-9jax.vercel.app/
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card'

function App() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      await fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then(({results}) => setPersonajes(results))
        .catch(() => "ashu :(");
      } 
   getCharacter();
  }, []);

  return (
    <main className={styles.gradient}>
      <Navbar/>
      <div className={styles.container}>
        {personajes.map((personaje) => (
          <Card key={personaje.id} info={personaje} />
        ))}
      </div>
    </main>
  )
}

export default App
