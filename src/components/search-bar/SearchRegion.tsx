import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri';


function SearchRegion() {
  return (
    <div className='searchContainer'>

      <div className='searchItems'>
        <div style={{ margin: 30 }}>
          <input className='longInput' type="text" placeholder='enter city' />
          <button className='button' >search</button>
        </div>

        <div style={{ margin: 30 }}>
          <input className='shortInput' type="text" placeholder='enter zip code' />
          <button className='button' >search</button>
        </div>
      </div>
    </div>
  )
}

export default SearchRegion
