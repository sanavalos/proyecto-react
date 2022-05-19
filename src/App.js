import React, {useEffect, useState} from 'react';
import './App.css';
import getGifs from './services/getGifs';
import ListOfCards from './components/ListOfCards';

function App() {
  
  const [busqueda, setBusqueda] = useState('panda');

  const busquedas = (e) => {
    setBusqueda(e.target.value)
  }

  return (
    <div className="App">
      <section className="app-content">
        <nav className='nav'>
          <form onSubmit={useEffect}>
            <input type='text' value={busqueda} onChange={busquedas}></input>
            <button type='sumbit'>Buscar</button>
          </form>
        </nav>
        <ListOfCards palabraClave='boxing'/>
        
        
      </section>
    </div>
  );
}

export default App;

