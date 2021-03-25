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

// {area.length <= 3 &&
//   <p className='error-length'>not enough letters</p>}
// <input
//   type="text"
//   value={city} 
//   ref={inputRef}
//   onClick={() => setIsModal(true)}
//   className='long-input'
//   placeholder='Search a Location'
//   onChange={(e) => setCity(e.target.value)}
// />
// <button ref={buttonRef} onClick={() => {
//   weather()
//   setIsModal(false)
// }}>Search</button>

// <div className='input-dropdown'>
//   {area.length >= 3 && isModal &&
//     area.map((item) =>
//       <div onClick={() => {
//         setCity(item.name)
//         weather()
//         focusButton(buttonRef)
//       }}
//         className='possible-locations-btn'>
//         {item.name}
//       </div>
//     )}
// </div>
// </div>
