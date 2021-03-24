import './top-info.sass'

function TopInfo({ weatherLocation, weatherCurrent }) {
  return (
    <div className='top-container'>
      <div className='top-inner-container'>
        <img className='top-icon' src={weatherCurrent && weatherCurrent.condition?.icon} alt="icon" />
        <p className='top-desc'>{weatherCurrent && weatherCurrent.condition?.text}</p>
        <p className='top-name'>{weatherLocation && weatherLocation?.name}</p>
        <hr className='top-hr' color="#a7a7a7" />
        <p className='top-local'>{weatherLocation && weatherLocation?.localtime}</p>
        <p className='top-temp'>{weatherCurrent && weatherCurrent.temp_f}F°</p>
      </div>
    </div>
  )
}

export default TopInfo
