import OverviewData from '../components/weather-info/hourly/overview/OverviewData';
import '../components/weather-info/hourly/x-hourly.sass'

export const Day = ({ dayData, accessor, setListOpenById, listOpenById }: any) => {
  return (
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

export const DaySelected = ({ selData, accessor, setAccessor, weatherLocationDate }: any) => {
  return (
    <div >
      <p
        className={`optionsText ${accessor === selData.number ?
          'optionsOn' : 'optionsText'}`}
        onClick={() => setAccessor(selData.number)}>
        {selData.day}
      </p>
      <hr
        color={`#9b9b9b ${accessor === selData.number ?
          '#000000' : '#828282'}`}
        className={`lineOff ${accessor === selData.number ?
          'lineOn' : 'lineOff'}`}
      />
      <p
        className={`textBelow ${accessor === selData.number ?
          'textOn' : 'textBelow'}`}>
        {weatherLocationDate}
      </p>
    </div>
  )
}
