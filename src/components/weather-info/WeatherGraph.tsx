import React, { useState } from 'react'
//@ts-ignore
import LineGraph from 'smooth-line-graph';
import { render } from 'react-dom';

function WeatherGraph() {

  const props = {
    name: 'single',
    width: 1100,
    height: 300,
    padding: [40, 40, 100, 40],
    lines: [
      {
        key: 'mykey',
        data: [[0, 0], [1, 1], [2, 4], [3, 9], [4, 16], [5, 25], [6, 36], [7, 49]],
        color: '#ce1b03',
        smooth: true,
        strokeWidth: 3
      },
      {
        strokeWidth: 1,
        key: 'mykey',
        fill: true,
        data: [[0, 0], [1, 1], [2, 4], [3, 9], [4, 16], [5, 25], [6, 36], [7, 49]],
        color: 'rgba(173, 71, 12, .3)',
        smooth: true
      },
    ]
  };
  return (
    <div style={{ justifyContent: 'center', display: 'flex' }}>
      <LineGraph {...props} />
    </div>
  )
}


export default WeatherGraph
