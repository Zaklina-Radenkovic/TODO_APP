import React from 'react'
import './Header.css'
import moon from '../../images/icon-moon.svg'
import sun from '../../images/icon-sun.svg'

export default function Header({ switchTheme, theme }) {
   return (
    <header className='header'>
      <h1>Todo</h1>
      <button className='header_btn' onClick={switchTheme}>
        <img src={theme === 'light' ? moon : sun} alt='moon' />
      </button>
    </header>
  )
}
