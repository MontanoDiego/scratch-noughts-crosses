import React from 'react';
import './Header.css';
import logo from '../../../assets/trmnl_logo.png';

export default function Header() {
  return <header>
    <img src={logo} alt="© Diego Montaño"></img>
    <h1>React App</h1>
    <div className='fixer'></div>
  </header>;
}