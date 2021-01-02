import { BsCloud } from 'react-icons/bs';
import '../App.css';

// export interface HomeDailyWeatherT {
//   day, weather
// }
export const HomeDailyWeather = ({ weatherData }: any) => {
  return (
    <div className="homeWeatherDailyS">
      <h6>{weatherData.day}</h6>
      <h5>{weatherData.weather}</h5>
      <BsCloud size={16} color='#ffffff' className='iconStyles' />
    </div>
  )
}

