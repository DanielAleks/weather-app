import React, { useEffect, useRef, useState } from 'react'
import './nav.sass'
import '../../../desktop/nav/x-dropdown-menu.sass'

function Nav({ setIsDaily, isDaily, city, setIsModal, setCity, weather, isModal, area, whichImage }) {
  const inputRef = useRef()
  const buttonRef = useRef()
  const [x, setX] = useState(0)

  const focusButton = (buttonRef) => {
    buttonRef.current.focus()
    setIsModal(false)
  }

  const focusInput = (inputRef) => {
    inputRef.current.focus()
    setIsModal(true)
  }

  const animateSwitch = () =>
    x === 100 ? setX(x - 100) : setX(x + 100)

  useEffect(() => {
    focusInput(inputRef)
  }, [])

  useEffect(() => {
    whichImage()
  }, [city])

  return (
    <div className='nav-omni-container' >
      <div className='nav-container'>

        <div className='setting-toggle-container'>
          <p>{isDaily ? 'Daily' : 'Hourly'}</p>
          <div onClick={() => {
            setIsDaily(prev => !prev)
            animateSwitch()
          }} className='outer-box'>
            <div
              style={{ transition: 'transform 1s', transform: `translate(${x}%)` }}
              className='inner-box' />
          </div>
        </div>

        <input
          type="text"
          value={city}
          ref={inputRef}
          onClick={() => setIsModal(true)}
          className='long-input nav-input'
          placeholder='Search a Location'
          onChange={(e) => setCity(e.target.value)}
        />
        <button className='nav-button'
          ref={buttonRef}
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
    </div>
  )
}

export default Nav