import React from 'react'
import './nav.sass'

function Navbar() {
  return (
    <div className="navBar">
      <div className='buttonContainer'>
        <button className='navButton'>Today</button>
        <button className='navButton'>Hourly</button>
        <button className='navButton'>Daily</button>
      </div>
      
    </div>
  )
}

export default Navbar
