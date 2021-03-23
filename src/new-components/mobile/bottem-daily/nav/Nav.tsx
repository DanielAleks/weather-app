import React from 'react'
import './nav.sass'

function Nav() {
  return (
    <div>
      <div>
        <input className='nav-input' type="text" placeholder='Find your Location' />
        <button className='nav-button' >Search</button>
      </div>
    </div>
  )
}

export default Nav
