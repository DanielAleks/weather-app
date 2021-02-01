import React from 'react'
import { FiMenu } from 'react-icons/fi';
import { Link, animateScroll as scroll } from "react-scroll";
import './x-mobile-modal.sass'

function MobileNav({ setLinkModal, linkModal, width, close }) {
  return (
    <>
      {width < 700 &&
        <FiMenu
          strokeWidth={2}
          size={width < 600 ? 16 : 18}
          className='menu-position'
          onClick={() => setLinkModal(true)}
        />
      }
      {linkModal &&
        <div className='modal'>
          <div className='close-modal-out' onClick={close} />
          <div className='items-scroll'>
            <Link className='scroll-link-M' onClick={close} to="Today" spy={true} smooth={true} offset={-100} duration={500}>
              <p>Today</p>
            </Link>
            <Link className='scroll-link-M' onClick={close} to="Hourly" spy={true} smooth={true} offset={-100} duration={500}>
              <p>Hourly</p>
            </Link>
            <Link className='scroll-link-M' onClick={close} to="Daily" spy={true} smooth={true} offset={-250} duration={500}>
              <p>Daily</p>
            </Link>
          </div>
        </div>
      }
    </>
  )
}

export default MobileNav
