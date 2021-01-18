import React from 'react';
import Navbar from './navbar/Navbar';
import SearchLocation from './search-bar';
import SearchRegion from './search-bar/SearchRegion';
import Current from './weather-info/current/Current';
import Daily from './weather-info/daily/Daily';
import Hourly from './weather-info/hourly/Hourly';
import './index.sass'

function Index() {
  const YOUR_API_KEY = '32902a43900f400cae0210316210701'

  return (
    <div>
      <Navbar />

      <div className="body" style={{ width: '50vw', position: 'absolute', right: '25%' }}>
        <SearchLocation YOUR_API_KEY={YOUR_API_KEY} />
        <SearchRegion />

        {/* //* TODAY */}
        <Current YOUR_API_KEY={YOUR_API_KEY} />

        {/* //*DAILY */}
        <Daily YOUR_API_KEY={YOUR_API_KEY} />

        {/* //*HOURLY */}
        <Hourly YOUR_API_KEY={YOUR_API_KEY} />

      </div>
    </div>
  )
}

export default Index
