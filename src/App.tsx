import React, { useState } from 'react';
import Index from './new-components';
import './App.css';
import './style.sass'
import loadImages from './LoadImages';

function App() {
  const [city, setCity]: any = useState('Japan, East Java, Indonesia')
  const [imageState, setImageState] = useState('')

  const cityUSAHandler = () => {
    if (city.split(" ")[city.split(" ").length - 1] === 'America') {
      return city.split(" ")[city.split(" ").length - 5]
    } else return city
  }

  const whichImage = () => {
    const cityHandler = cityUSAHandler()
    const condition = cityHandler.split(" ")[cityHandler.toLowerCase().split(" ").length - 1]
    loadImages({ condition, setImageState })
  }

  return (
    <Index
      whichImage={whichImage}
      city={city}
      setCity={setCity}
      imageState={imageState}
    />
  )
}

export default App