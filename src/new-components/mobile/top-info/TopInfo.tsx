import './top-info.sass'

function TopInfo({ weatherLocation, weatherCondition, weatherCurrent }) {
  return (
    <div className='top-container'>
      <img className='top-icon' src={weatherCondition && weatherCondition.icon} alt="icon" />
      <p className='top-desc'>{weatherCondition && weatherCondition.text}</p>
      <p className='top-name'>{weatherLocation && weatherLocation.name}</p>
      <hr className='top-hr'/>
      <p className='top-local'>{weatherLocation && weatherLocation.localtime}</p>
      <p className='top-temp'>{weatherCurrent && weatherCurrent.temp_f}F°</p>
    </div>
  )
}

export default TopInfo
