import './top-info.sass'

function TopInfo({ weatherLocation, weatherCurrent }) {
  return (
    <div className='top-container'>
      <img className='top-icon' src={weatherCurrent.condition?.icon} alt="icon" />
      <p className='top-desc'>{weatherCurrent.condition?.text}</p>
      <p className='top-name'>{weatherLocation.name}</p>
      <hr className='top-hr' color="#a7a7a7"/>
      <p className='top-local'>{weatherLocation.localtime}</p>
      <p className='top-temp'>{weatherCurrent.temp_f}F°</p>
    </div>
  )
} 

export default TopInfo
 