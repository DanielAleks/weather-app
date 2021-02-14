import React, { useLayoutEffect, useState } from 'react'
import { BsCloud } from 'react-icons/bs'
import './x-nav.sass'
import MobileNav from './resultions/MobileNav';
import DesktopNav from './resultions/DesktopNav';

function useWindowSize() {
  const [size, setSize] = useState([0, 0])

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [])

  return size;
}

function Navbar(props) {
  const [width, height] = useWindowSize();
  const [linkModal, setLinkModal] = useState(false);

  const close = () => setLinkModal(false)

  return ( 
    <div className="navBar"> 
      <div className='project-restrictions'>
        <div className='nav-items'> 
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BsCloud
              strokeWidth='.5'
              color='#971414'
              size={width < 500 ? 20 : 25}
            />
            <p className='nav-header'>QuickWeather</p>
          </div>

          <MobileNav
            width={width}
            close={close}
            linkModal={linkModal}
            setLinkModal={setLinkModal}
          />

          <DesktopNav width={width} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
