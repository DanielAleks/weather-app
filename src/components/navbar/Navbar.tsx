import React from 'react'
import { AiOutlineHome, AiOutlineQrcode } from 'react-icons/ai';
import { VscLocation } from 'react-icons/vsc';
import { BsCloud } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import './nav.sass'

function Navbar() {
  return (
    <div className="sideBar" style={{ flexDirection: 'column' }}>
      <AiOutlineHome size={40} color='white' className='iconStyles' style={{ marginTop: 30 }} />
      <VscLocation size={40} color='white' className='iconStyles' />
      <AiOutlineQrcode size={40} color='white' className='iconStyles' />
      <BsCloud size={40} color='white' className='iconStyles' />
      <FiSettings size={40} color='white' className='iconStyles' />
    </div>
  )
}

export default Navbar
