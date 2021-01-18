import React from 'react'
import './x-search.sass'

function ImageSection() {

  const Search = ({ searchData }: any) => {
    return (
      <div style={{ margin: 30 }}>
        <input
          className={searchData.style}
          type="text"
          placeholder={searchData.placeholder}
        />
        <button>search</button>
      </div>
    )
  }

  const searchData = [
    {
      style: 'long-input',
      placeholder: 'enter city'
    },
    {
      style: 'short-input',
      placeholder: 'enter zip code'
    }
  ]

  return (
    <div className='search-container'>
      <Search searchData={searchData[0]} />
      <Search searchData={searchData[1]} />
    </div>
  )
}

export default ImageSection