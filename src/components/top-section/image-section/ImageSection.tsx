import React, { useEffect, useState } from 'react'
import './x-imgSection.sass'
import Yellow from '../../../assets/images/yellowPaint.jpg'

function SearchBar({ weatherLocation, weatherCurrent, city }) {

  // async function placesImage() {
  // const apikey = 'AIzaSyB2xvlwMVlw0xW0C1hL_0A8-lNotiNRClM'
  // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  // const client = 'UY21H3DQEWPDQHH23GN43VXGTQUMNHWZLON5HJP5TXGNJK2L'
  // const secret = '05HJZRAZCZXJV0WHPWOKM5TOANHEYUOLAFJHDRX5ZXUH1GZD'
  // const venue_id = 'explore/?near=France'
  // const newIdea = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRtAAAATLZNl354RwP_9UKbQ_5Psy40texXePv4oAlgP4qNEkdIrkyse7rPXYGd9D_Uj1rVsQdWT4oRz4QrYAJNpFX7rzqqMlZw2h2E2y5IKMUZ7ouD_SlcHxYq1yL4KbKUv3qtWgTK0A6QbGh87GB3sscrHRIQiG2RrmU_jF4tENr9wGS_YxoUSSDrYjWmrNfeEHSGSc3FyhNLlBU&key=${apikey}`
  // const placeHttp = `https://api.foursquare.com/v2/venues/explore/?near=France&venuePhotos=1&client_id=${client}&client_secret=${secret}&v=20131124`
  // const photoPlaceHttp = `https://api.foursquare.com/v2/venues/${venue_id}/photos&client_id=${client}&client_secret=${secret}`
  // const photoPlaceHttp2 = `https://api.foursquare.com/v2/venues/search?client_id=${client}&client_secret=${secret}&ll=40.7,-74&query=sushi&v=20131124`
  // const placesHttp = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CnRvAAAAwMpdHeWlXl-lH0vp7lez4znKPIWSWvgvZFISdKx45AwJVP1Qp37YOrH7sqHMJ8C-vBDC546decipPHchJhHZL94RcTUfPa1jWzo-rSHaTlbNtjh-N68RkcToUCuY9v2HNpo5mziqkir37WU8FJEqVBIQ4k938TI3e7bf8xq-uwDZcxoUbO_ZJzPxremiQurAYzCTwRhE_V0&sensor=false&key=${apikey}`
  // const newHttp = `https://maps.googleapis.com/maps/api/place/photo?photoreference=CnRvAAAAwMpdHeWlXl-lH0vp7lez4znKPIWSWvgvZFISdKx45AwJVP1Qp37YOrH7sqHMJ8C-vBDC546decipPHchJhHZL94RcTUfPa1jWzo-rSHaTlbNtjh-N68RkcToUCuY9v2HNpo5mziqkir37WU8FJEqVBIQ4k938TI3e7bf8xq-uwDZcxoUbO_ZJzPxremiQurAYzCTwRhE_V0&sensor=false&maxheight=200&maxwidth=200&key=AIzaSyB2xvlwMVlw0xW0C1hL_0A8-lNotiNRClM`
  // const fetchedWeather = await fetch(newIdea)
  // const data = await fetchedWeather.json()
  // setImageDisplay(data)
  // console.log(data, 'google photos, Im here!')
  // }

  // useEffect(() => {
  //   placesImage()
  // }, [])
  
  return (
    // <div className="top-image">
      // <div className="image-bg">
        <div className='top-container'>


          {/* <div className='info-shade-container'>
            <p className='top-name'>{weatherLocation && weatherLocation.name}</p>
            <p className='top-local'>{weatherLocation && weatherLocation.localtime}</p>
            <p className='top-temp'>{weatherCurrent && weatherCurrent.temp_f}F°</p>
          </div> */}

        </div>
      // </div>
    // </div>
  )
}

export default SearchBar
