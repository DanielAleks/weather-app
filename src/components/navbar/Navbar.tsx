import React from 'react'
import { BsCloud } from 'react-icons/bs'
import './x-nav.sass'
import { Link, animateScroll as scroll } from "react-scroll";
import { FiMenu } from 'react-icons/fi'
// import { useMediaQuery } from 'react-responsive';


// const isMobile = useMediaQuery({ query: `(max-width: 760px)` });


function Navbar() {
  return (
    <div className="navBar">
      <div className='project-restrictions'>

        <div className='nav-items'>
          <div style={{ display: 'flex' }}>
            <BsCloud size='30' color='#971414' strokeWidth='.5' />
            <p className='nav-header'>QuickWeather</p>
          </div>



          {/* <FiMenu /> */}
          <div className='buttonContainer'>
            <Link className='scroll-link' to="Today" spy={true} smooth={true} offset={-100} duration={500}>
              Today
            </Link>
            <Link className='scroll-link' to="Hourly" spy={true} smooth={true} offset={-100} duration={500}>
              Hourly
            </Link>
            <Link className='scroll-link' to="Daily" spy={true} smooth={true} offset={-250} duration={500}>
              Daily
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
