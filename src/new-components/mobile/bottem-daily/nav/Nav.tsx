import React from 'react'
import './nav.sass'

function Nav({ setIsDaily }) {
  return (
    <div className='nav-container'>

      <div className='setting-toggle-container'>
        <p>Daily</p>
        <div onClick={() => setIsDaily(false)} className='outer-box'>
          <div className='inner-box'>

          </div>
        </div>
      </div>
 
      <div>
        <input className='nav-input' type="text" placeholder='     Find your Location...' />
        <button className='nav-button' >Search</button>
      </div>
    </div>
  )
}

export default Nav
