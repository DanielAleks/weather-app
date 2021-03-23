import React from 'react'
import './nav.sass'

function Nav() {
  return (  
    <div className='nav-container'>
        <input className='nav-input' type="text" placeholder='     Find your Location...' />
        <button className='nav-button' >Search</button>
    </div>
  )
}

export default Nav
