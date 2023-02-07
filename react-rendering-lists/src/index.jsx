import React from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function Poki() {
  const poke = pokedex.map(poe =>
    <li key={poe.number}>{poe.name}</li>
  );
  return <ul>{poke}</ul>;

}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Poki />);
