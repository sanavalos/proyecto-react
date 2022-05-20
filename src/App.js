import React, {useEffect, useState} from 'react';
import './App.css';
import ListOfCards from './components/ListOfCards';

function App() {
  
  const [busqueda, setBusqueda] = useState(''); //useState (item)

  const busquedas = e => {
    e.preventDefault();
    const item = e.target.newItem.value; // item = lo que se encuentra en input
    if (item) setBusqueda(item);
    e.target.reset();
  };

  return (
    <div className="App">
      <section className="app-content">
        <h1>Buscador de GIFS</h1>
        <nav className='nav'>
          <form onSubmit={e  => busquedas(e)}>
            <input style={{backgroundColor : 'white'}}
              type='text'
              className='input'
              id='newItem'
              placeholder='Something that needs to be done...'
            />
            <button type='submit'>Buscar</button>
          </form>
        </nav>
        <ListOfCards palabraClave={busqueda}/>

      </section>
    </div>
  );
}

export default App;

