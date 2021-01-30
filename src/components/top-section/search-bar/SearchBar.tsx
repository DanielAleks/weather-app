import React, { useEffect, useRef } from 'react'
import './x-search.sass'

function ImageSection({ weather, setCity, setIsModal, city, area, isModal }) {
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

  return (
    <div className='search-container' >
      <div className='button--input'>
        <input
          type="text"
          value={city}
          ref={inputRef}
          onClick={() => setIsModal(true)}
          className='long-input'
          placeholder='enter city'
          onChange={(e) => setCity(e.target.value)}
        />
        <button ref={buttonRef} onClick={() => {
          weather()
        }}>search</button>
      </div>

      {/* {area.length <= 3 &&
        <p className='error-length'>not enough letters</p>}

      <div className='input-dropdown'>
        {area.length >= 3 && isModal &&
          area.map((item) =>
            <div onClick={() => {
              weather()
              setCity(item.name)
              focusButton(buttonRef)
            }}
              className='possible-locations-btn'>
              {item.name}
            </div>
          )} */}
    {/* </div> */}
    </div >
  )
}

export default ImageSection