import React from 'react'
import './Header.scss';

function Header() {
  return (
    <header>
      <nav>
        <ul class='menu'>
          <li><a href='#intro'>Intro</a></li>
          <li><a href='#sobremi'>Sobre mí</a></li>
          <li><a href='#experiencia'>Experiencia</a></li>
          <li><a href='#estudios'>Estudios</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header