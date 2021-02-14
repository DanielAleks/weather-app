import { Link } from "react-scroll";

function DesktopNav({ width }) {
  return (
    <>
      {width > 700 &&
        <div className='buttonContainer'>
          <Link className='scroll-link' to="Today" spy={true} smooth={true} offset={-100} duration={500}>
            Today
            </Link>
          <Link className='scroll-link' to="Hourly" spy={true} smooth={true} offset={-100} duration={500}>
            Hourly
            </Link>
          <Link className='scroll-link' to="Daily" spy={true} smooth={true} offset={-250} duration={500}>
            Daily
            </Link>
        </div>
      }
    </>
  )
}

export default DesktopNav
