import React, { useEffect, useRef } from 'react'
import './nav.sass'
import '../../../desktop/nav/x-dropdown-menu.sass'

function Nav({ setIsDaily, city, setIsModal, setCity, weather, isModal, area, whichImage }) {
  const inputRef = useRef()
  const buttonRef = useRef()

  const focusButton = (buttonRef) => {
    buttonRef.current.focus()
    setIsModal(false)
  }

  const focusInput = (inputRef) => {
    inputRef.current.focus()
    setIsModal(true)
  }

  useEffect(() => {
    focusInput(inputRef)
  }, [])

  useEffect(() => {
    whichImage()
  }, [city])


  return (
    <div className='nav-container'>

      <div className='setting-toggle-container'>
        <p>Daily</p>
        <div onClick={() => setIsDaily(prev => !prev)} className='outer-box'>
          <div className='inner-box' />
        </div>
      </div>

      <input
        placeholder='Search a Location...'
        type="text"
        value={city}
        ref={inputRef}
        onClick={() => setIsModal(true)}
        className='long-input nav-input'
        onChange={(e) => setCity(e.target.value)}
      />
      <button ref={buttonRef}
        className='nav-button'
        onClick={() => {
          weather()
          setIsModal(false)
        }}>Search</button>

      <div className='input-dropdown'>
        {area.length >= 3 && isModal &&
          area.map((item) => 
            <div onClick={() => {
              setCity(item.name)
              weather()
              focusButton(buttonRef)
            }}
              className='possible-locations-btn'>
              {item.name}
            </div>
          )}
      </div>
    </div>
  )
}

export default Nav

// {area.length <= 3 &&
//   <p className='error-length'>not enough letters</p>}

