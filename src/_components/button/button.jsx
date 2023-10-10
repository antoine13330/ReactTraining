// create button component react
// link css file
import './button.css';
import React from 'react';

function Button({name , onClick}) {
    return <button onClick={onClick}>{name}</button>;
  }

export default Button;
