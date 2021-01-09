import { BsCloud } from 'react-icons/bs';
import '../App.css';
import '.././components/current-location/current.sass'

export interface HomeDailyWeatherT {
  day, weather, icon
}
export const HomeDailyWeather = ({ weatherData }: { weatherData: HomeDailyWeatherT }) => {
  return (
    <div className="homeWeatherDailyS">
      <h6>{weatherData.day}</h6>
      <h5 style={{ marginLeft: 20 }}>{weatherData.weather}</h5>
      <weatherData.icon size={16} color='#ffffff' className='homeIcons' />
    </div>
  )
}

export interface DataPointT {
  time, degrees, icon
}
export const DataPoint = ({ weatherPoint }: { weatherPoint: DataPointT }) => {
  return (
    <div className='divInfoIcons'>
      <p className="timeStyle">{weatherPoint.time}</p>
      <weatherPoint.icon size={25} color='#f8e009' className='infoIcons' />
      <p className="degreesStyle">{weatherPoint.degrees}</p>
    </div>
  )
}

