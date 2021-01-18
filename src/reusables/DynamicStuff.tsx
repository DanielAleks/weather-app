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