import { useState } from 'react';
import OverviewData from '../components/weather-info/hourly/overview/OverviewData';
import '../components/weather-info/hourly/x-hourly.sass'

export const Day = ({ dayData, setAccessor, accessor, setListOpenById, listOpenById }: any) => {
  return (
    // onClick={() => setAccessor(0)}
    <div className='hourlyContainer' style={{ display: accessor === dayData.number ? 'flex' : 'none' }}>
      <div>
        {dayData.state.map((item, id) =>
          <OverviewData
            item={item}
            id={id}
            setListOpenById={setListOpenById}
            listOpenById={listOpenById}
          />
        )}
      </div>
    </div>
  )
}
export const DaySelected = ({ selData, setNumber, accessor, setAccessor, number }: any) => {

  return (
    <div >
      <p
        className={`optionsText ${accessor === selData.number ?
          'optionsOn' : 'optionsText'}`}
        onClick={() => {
          setAccessor(selData.number)
          setNumber(selData.number)
        }}>
        {selData.day}
      </p>
      <hr
        className={number === selData.number ? 'lineOff' : 'lineOn'}
      />
    </div>
  )
}
