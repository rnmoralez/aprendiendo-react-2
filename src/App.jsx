//https://aprendiendo-react-9jax.vercel.app/
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './App.module.css';
import Inicio from './components/inicio/Inicio.jsx';
import Personaje from './components/personajes/Personaje.jsx';

function App() {
  return (
    <div className={styles.container}>
	<div className="row">
	    <div className="col">
	       <Inicio />
	    </div>
	    <div className="col">
	       <Personaje />
	    </div>
        </div>
    </div>
  )
}

export default App
