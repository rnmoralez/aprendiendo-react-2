import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      await fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then(({results}) => setPersonajes(results))
        .catch(() => "ashu");
    } 
    getCharacter();
  }, []);

  return (
    <>
      <p>Hola!</p>
    </>
  )
}

export default App
