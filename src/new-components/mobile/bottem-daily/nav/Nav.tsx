import React from 'react'
import './nav.sass'

function Nav({ setIsDaily }) {
  return (
    <div className='nav-container'>

      <div className='setting-toggle-container'>
        <p>Daily</p>
        <div onClick={() => setIsDaily(prev => !prev)} className='outer-box'>
          <div className='inner-box' />
        </div>
      </div>

      <input className='nav-input' type="text" placeholder='Search a Location...' />
      <button className='nav-button' >Search</button>
    </div>
  )
}

export default Nav
