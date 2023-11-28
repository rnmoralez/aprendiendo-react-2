import { useEffect, useState } from 'react';
import Card from './components/Card'
import './App.css'

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
    <ul>
      {personajes.map((personaje) => (
        <li key={personaje.id}>
          <Card info={personaje} />
        </li>
      ))}
    </ul>
    </>
  )
}

export default App
