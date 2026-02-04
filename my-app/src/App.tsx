import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name: string = 'Zé';
  const formatName: string = name.toUpperCase();

  const sum = (a: number, b: number): number => a + b

  const url = "https://placehold.co/150"
  
  return (
    <div className="App">
      <h1>Fala, {formatName}</h1>
      <h2>Soma: {sum(3,5)}</h2>
      <HelloWorld/>
      <img src={url} alt='placeholder'/>
    </div>
  );
}

export default App;
