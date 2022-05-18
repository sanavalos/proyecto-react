import React, {useState} from 'react';
import './App.css';

const GIFS = ['https://media4.giphy.com/media/lT4N7JiPGATIhVwR91/giphy.gif?cid=ecf05e47gichx2vdyl7bayngf98hozx71nis4pklve6otf4c&rid=giphy.gif&ct=g',
'https://media0.giphy.com/media/7ziO8WTeXJCGZlq4mm/giphy.gif?cid=ecf05e47gichx2vdyl7bayngf98hozx71nis4pklve6otf4c&rid=giphy.gif&ct=g']

const otrosGIFS = ['https://media4.giphy.com/media/ZFTKZ8zwj38gE/giphy.gif?cid=ecf05e472nr4nt7dpvltulzhyofq6g63rdy7rlofdcq8xqtr&rid=giphy.gif&ct=g',
'https://media0.giphy.com/media/Um4fcXY6FThO8/giphy.gif?cid=ecf05e478nkl75zl3lz05ok46kw0wcvojjxdgea8k7n3kr9l&rid=giphy.gif&ct=g']

function App() {
  const [gif, setGif] = useState(GIFS);
  

  return (
    <div className="App">
      <section className="app-content">
        {gif.map((g)=><img src={g}></img>)}
        <button onClick={() => setGif(otrosGIFS)}>CAMBIAR GIFS</button>
      </section>
    </div>
  );
}

export default App;
