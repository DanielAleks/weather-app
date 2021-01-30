import React, { useEffect, useState } from 'react'
import './x-imgSection.sass'

function SearchBar({ weatherLocation, weatherCurrent, city }) {


  return (
    <div className="top-image">
      <div className="image-bg">
 
        <div className='top-container'>
          <p className='top-name'>{weatherLocation && weatherLocation.name}</p>
          <p className='top-local'>{weatherLocation && weatherLocation.localtime}</p>
          <p className='top-temp'>{weatherCurrent && weatherCurrent.temp_f}F°</p>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
