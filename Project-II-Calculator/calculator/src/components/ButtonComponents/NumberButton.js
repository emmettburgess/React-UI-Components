import React from 'react';
import './Button.css';

const numberArray = [
    {num: 1},
    {num: 2},
    {num: 3},
    {num: 4},
    {num: 5},
    {num: 6},
    {num: 7},
    {num: 8},
    {num: 9},
  ];

const NumberButton = props => {
    return (
        <div>
            <button>{props.numberArray.num}</button>
        </div>
    )
}

export default NumberButton;

