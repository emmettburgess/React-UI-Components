import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import Display from './components/DisplayComponents/CalculatorDisplay';
import Action from './components/ButtonComponents/ActionButton';
import Clear from './components/ButtonComponents/Clear';

const App = () => {
  return (
    <div>
      {displayArray.map(display => (
        <Display display={display} />
      ))}

      <Clear />

      {numberArray.map(number => (
        <NumberButton number={number} />
      ))}

      {actionArray.map(action => (
        <Action action={action} />
      ))}

    </div>
  );
};

export default App;
