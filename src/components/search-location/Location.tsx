import React from 'react'
import Rain from '../../assets/images/rain.jpg'
import Dubai from '../../assets/images/dubai.jpg'
import Japan from '../../assets/images/japan.jpg'
import London from '../../assets/images/london.jpg'
import NewYork from '../../assets/images/newYork.jpg'
import Paris from '../../assets/images/paris.jpg'
import Rome from '../../assets/images/rome.jpg'
import './hexagon.sass'

function Location() {

  return (
    <div className="hexContainer">
      {/* <div style={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', }}>
        <div style={{ backgroundColor: 'green', width: 100, marginTop: 40 }}>
          <p style={{ fontSize: 20, fontFamily: 'Nunito-Bold' }}>London</p>
          <p style={{ color: '#fddb19', fontSize: 16, marginTop: -20 }}>Sunny</p>

          <div style={{ display: 'flex', marginTop: -60 }}>
            <p style={{ fontSize: 40 }}>32</p>
            <p style={{ fontSize: 26, alignSelf: 'center' }}>c°</p>
          </div>
        </div>
        <div className="hexagon hexagon2" ><div className="hexagon-in1"><img src={Dubai} className="hexagon-in2" /></div></div>

      </div>

      <div style={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <div className="hexagon hexagon2" ><div className="hexagon-in1"><img src={Dubai} className="hexagon-in2" /></div></div>

        <div style={{ backgroundColor: 'green', width: 100, marginTop: 40 }}>
          <p style={{ fontSize: 20, fontFamily: 'Nunito-Bold' }}>London</p>
          <p style={{ color: '#fddb19', fontSize: 16, marginTop: -20 }}>Sunny</p>

          <div style={{ display: 'flex', marginTop: -60 }}>
            <p style={{ fontSize: 40 }}>32</p>
            <p style={{ fontSize: 26, alignSelf: 'center' }}>c°</p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <div className="hexagon hexagon2" ><div className="hexagon-in1"><img src={Dubai} className="hexagon-in2" /></div></div>

        <div style={{ backgroundColor: 'green', width: 100, marginTop: 40 }}>
          <p style={{ fontSize: 20, fontFamily: 'Nunito-Bold' }}>London</p>
          <p style={{ color: '#fddb19', fontSize: 16, marginTop: -20 }}>Sunny</p>

          <div style={{ display: 'flex', marginTop: -60 }}>
            <p style={{ fontSize: 40 }}>32</p>
            <p style={{ fontSize: 26, alignSelf: 'center' }}>c°</p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <div className="hexagon hexagon2" ><div className="hexagon-in1"><img src={Dubai} className="hexagon-in2" /></div></div>

        <div style={{ backgroundColor: 'green', width: 100, marginTop: 40 }}>
          <p style={{ fontSize: 20, fontFamily: 'Nunito-Bold' }}>London</p>
          <p style={{ color: '#fddb19', fontSize: 16, marginTop: -20 }}>Sunny</p>

          <div style={{ display: 'flex', marginTop: -60 }}>
            <p style={{ fontSize: 40 }}>32</p>
            <p style={{ fontSize: 26, alignSelf: 'center' }}>c°</p>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: 'blue', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
        <div className="hexagon hexagon2" ><div className="hexagon-in1"><img src={Dubai} className="hexagon-in2" /></div></div>

        <div style={{ backgroundColor: 'green', width: 100, marginTop: 40 }}>
          <p style={{ fontSize: 20, fontFamily: 'Nunito-Bold' }}>London</p>
          <p style={{ color: '#fddb19', fontSize: 16, marginTop: -20 }}>Sunny</p>

          <div style={{ display: 'flex', marginTop: -60 }}>
            <p style={{ fontSize: 40 }}>32</p>
            <p style={{ fontSize: 26, alignSelf: 'center' }}>c°</p>
          </div>
        </div>
      </div> */}


      <div className="hexagon hexagon2" ><div className="hexagon-in1"><img src={Japan} className="hexagon-in2" /></div></div>
      <div className="hexagon hexagon2" ><div className="hexagon-in1"><img src={NewYork} className="hexagon-in2" /></div></div>
      <div className="hexagon hexagon2" ><div className="hexagon-in1"><img src={Rome} className="hexagon-in2" /></div></div>
      <div className="hexagon hexagon2"  ><div className="hexagon-in1" ><img src={Paris} className="hexagon-in2" style={{ objectPosition: '90%' }} /></div></div>
      <div className="hexagon hexagon2" ><div className="hexagon-in1"><img src={London} className="hexagon-in2" /></div></div>
    </div>
  )
}

export default Location
