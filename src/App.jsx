//https://aprendiendo-react-9jax.vercel.app/
import { useEffect, useState } from 'react';

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
    <ul>
      {personajes.map((personaje) => (
        <li key={personaje.id}>Personaje: {personaje.name}</li>
      ))}
    </ul>
  )
}

export default App
