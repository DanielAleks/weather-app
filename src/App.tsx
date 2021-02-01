import React from 'react';
import Index from './components';
import './App.css';
import './style.sass'
import blued from './assets/images/blueCool.jpg'

function App() {

  return (
    <div >
      <img className='image-ult-bg' src={blued} alt="hi" />
      <div />
      <Index />
    </div>
  )
}

export default App;
