import { ArcElement,CategoryScale,Chart,registerables, Scale} from 'chart.js';
import React from 'react'
import { Doughnut,Line,Bar } from 'react-chartjs-2';
import Circle from './Charts/Circle';
import LineG from './Charts/Line';
import Map from './Charts/Map';

Chart.register(ArcElement,CategoryScale,...registerables);
export default function () {
  return (
    <div className='graph'>
        <span className='span'>
          <LineG/>
        </span>
        <span>
       <Circle/>
        </span>
        <span className='geo'>
          <Map/>
        </span>
    </div>
  )
}
