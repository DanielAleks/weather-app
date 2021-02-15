import React, { useEffect, useState } from 'react'
import './x-imgSection.sass'

function SearchBar({ weatherLocation, weatherCurrent, city }) {
  // const [imageDisplay, setImageDisplay]: any = useState([])

  // async function placesImage() {
  //   const apikey = 'AIzaSyB2xvlwMVlw0xW0C1hL_0A8-lNotiNRClM'
  //   const proxyurl = "https://cors-anywhere.herokuapp.com/";
  //   const client = 'UY21H3DQEWPDQHH23GN43VXGTQUMNHWZLON5HJP5TXGNJK2L'
  //   const secret = '05HJZRAZCZXJV0WHPWOKM5TOANHEYUOLAFJHDRX5ZXUH1GZD'
  //   const placeHttp = `https://api.foursquare.com/v2/venues/explore/?near=Shibuya&venuePhotos=1&section=food&client_id=${client}&client_secret=${secret}&v=20131124`
  //   const placesHttp = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRvAAAAwMpdHeWlXl-lH0vp7lez4znKPIWSWvgvZFISdKx45AwJVP1Qp37YOrH7sqHMJ8C-vBDC546decipPHchJhHZL94RcTUfPa1jWzo-rSHaTlbNtjh-N68RkcToUCuY9v2HNpo5mziqkir37WU8FJEqVBIQ4k938TI3e7bf8xq-uwDZcxoUbO_ZJzPxremiQurAYzCTwRhE_V0&sensor=false&key=${apikey}`
  //   const fetchedWeather = await fetch(placesHttp)
  //   const data = await fetchedWeather.json()
  //   setImageDisplay(data)
  //   console.log(data)
  // }

  // useEffect(() => {
  //   placesImage()
  // }, []) 

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
