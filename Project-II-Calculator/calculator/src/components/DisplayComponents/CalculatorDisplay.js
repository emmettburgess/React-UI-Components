import React from 'react';
import './Display.css';

const displayArray = [
    {dis: 0},
  ];

const Display = props => {
    return (
        <div>
            <button>{props.displayArray.dis}</button>
        </div>
    )
}

export default Display;