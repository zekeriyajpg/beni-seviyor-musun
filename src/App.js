import React, { useState, useRef } from 'react';
import './App.css';
import kediResmi from './kedi.jpg';

function App() {
  const [tesekkur, setTesekkur] = useState(false);
  const hayirBtnRef = useRef(null);

  const hareketEttir = () => {
    const button = hayirBtnRef.current;
    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 50;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
  };

  const evetTiklandi = () => {
    setTesekkur(true);
  };

  return (
    <div className="app-container">
      <img src={kediResmi} alt="Kedi" className="kedi-foto" />
      <h1 className="soru">Beni Seviyor musun?</h1>

      {tesekkur ? (
        <h2 className="tesekkur">Teşekkürler ❤️</h2>
      ) : (
        <div className="butonlar">
          <button className="evet" onClick={evetTiklandi}>Evet</button>
          <button
            className="hayir"
            onMouseEnter={hareketEttir}
            ref={hayirBtnRef}
          >
            Hayır
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
