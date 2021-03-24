import React, { useEffect, useRef, useState } from 'react'
import './nav-desktop.sass'
import './x-dropdown-menu.sass'
import './x-search.sass'

function NavDesktop({ isModal, setIsModal, city, setCity, weather, area, whichImage }) {

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
    <div className='navD'>

      {area.length <= 3 &&
        <p className='error-length'>not enough letters</p>}
      <input
        type="text"
        value={city}
        ref={inputRef}
        onClick={() => setIsModal(true)}
        className='long-input'
        placeholder='Search a Location'
        onChange={(e) => setCity(e.target.value)}
      />
      <button ref={buttonRef} onClick={() => {
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

export default NavDesktop
