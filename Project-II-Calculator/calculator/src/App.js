import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';

const numbers = [
  {one: 1},
  {two: 2},
  {three: 3},
  {four: 4},
  {five: 5},
  {six: 6},
  {seven: 7},
  {eight: 8},
]

const App = () => {
  return (
    <div className="card-container">
      {numbers.map(number => (
        <NumberButton number={number}/>
      )
    </div>
  );
};

export default App;
