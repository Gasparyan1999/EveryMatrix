import React from 'react'
import { ArcElement,CategoryScale,Chart,registerables, Scale} from 'chart.js';
import { Doughnut,Line } from 'react-chartjs-2';

Chart.register(ArcElement,CategoryScale,...registerables);
export default function LineG() {
    const data={
        labels: ["","","","","","",""],
          
          datasets: [
            {
              label: "Clicks",
              data: [20,57,17,-40,-24,30,40],
              fill:false,
              backgroundColor: ["yellow"
              ],
              borderColor: [
                "yellow"
              ],
              borderWidth: 2,
            },
            {
              label: 'Page View',
              data: [-36,28,58,19,-40,-30,19],
              fill:false,
              backgroundColor: ["blue"
              ],
              borderColor: [
                "blue"
              ],
              borderWidth: 2,
            },
            {
              label: 'Signups',
              data: [40,51,0,47,-20,40,57],
              fill:false,
              backgroundColor: ["aqua"
              ],
              borderColor: [
                "aqua"
              ],
              borderWidth: 2,
            },

          ],
    }
    const options={
        maintainAspectRatio: false,
    }



  return (
    <>
    <Line data={data} options={options} />
    </>
  )
}
