import React from 'react';
import "../styles/Navbar.css"

export default function Navbar() {
  return(
    <nav>
      <div className='nav__logo--container'>
        <img className="nav__logo" src='../../src/assets/troll-face.svg' />
        <h2>Khisus19 Meme Generator</h2>
      </div>
      <ul className='nav__links--container'>
        <li><a href='#'>Contact</a></li>
        <li><a href='#'>About me</a></li>
      </ul>
    </nav>
  )
}