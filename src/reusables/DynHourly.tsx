import OverviewData from '../components/weather-info/hourly/overview/OverviewData';
import '../components/weather-info/hourly/x-hourly.sass'

export const Day = ({ dayData, accessor, setListOpenById, listOpenById }: any) => {
  return (
    <div style={{ display: accessor === dayData.number ? 'flex' : 'none' }}>
      <div>
        {dayData.state && dayData.state.map((item, id) =>
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
        data-aos="fade-up"
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
