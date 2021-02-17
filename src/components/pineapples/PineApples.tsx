import React, { useEffect, useState } from 'react'
import './pine-apple.sass'

function PineApples() {
  const [pinew, setPinew] = useState(70)
  const [pineh, setPineh] = useState(70)
  const [pine1w, setPine1w] = useState(70)
  const [pine1h, setPine1h] = useState(70)
  const [pine2w, setPine2w] = useState(70)
  const [pine2h, setPine2h] = useState(70)


  useEffect(() => {
    const interval = setInterval(
      () =>
        setPinew(Math.floor(Math.random() * 100)),
      35000,
      setPineh(Math.floor(Math.random() * 90)),
      35000
    );
    const interval1 = setInterval(
      () =>
        setPine1w(Math.floor(Math.random() * 100)),
      19000,
      setPine1h(Math.floor(Math.random() * 90)),
      19000
    );
    const interval2 = setInterval(
      () =>
        setPine2w(Math.floor(Math.random() * 100)),
      50000,
      setPine2h(Math.floor(Math.random() * 90)),
      50000
    );

    return () => {
      clearInterval(interval);
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);
  return (
    <div className='pine-apple-container'>
      <div className="pine-apple" style={{ bottom: `${pineh}vh`, left: `${pinew}vw` }}></div>
      <div className="pine-apple2" style={{ bottom: `${pine1h}vh`, left: `${pine1w}vw` }}></div>
      <div className="pine-apple3" style={{ bottom: `${pine2h}vh`, left: `${pine2w}vw` }}></div>
    </div>
  )
}

export default PineApples
