import React from 'react';
import './Button.css';

const actionArray = [
    {act: '/'},
    {act: 'x'},
    {act: '-'},
    {act: '+'},
    {act: '='},
  ]

const Action = props => {
    return (
        <div>
            <button>{props.actionArray.act}</button>
        </div>
    )
}

export default Action;

