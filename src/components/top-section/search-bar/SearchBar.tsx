import React from 'react'
import './x-search.sass'

function ImageSection() {
  return (
    <div className='search-container'>
      <div style={{ margin: 30 }}>
        <input
          className='long-input'
          type="text"
          placeholder='enter city'
        />
        <button>search</button>
      </div>

      <div style={{ margin: 30 }}>
        <input
          className='short-input'
          type="text"
          placeholder='enter zip code'
        />
        <button>search</button>
      </div>
    </div>
  )
}

export default ImageSection