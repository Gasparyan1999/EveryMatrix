import React from 'react'
import { Doughnut } from 'react-chartjs-2';

export default function Circle() {
    const data = {
        labels:["Signups     ","Total  clicks","Total views"],
        datasets: [
          {
            data: [20, 30, 50,],
            backgroundColor: [
              'green',
              'blue',
              'yellow',
            ],
            borderWidth: 1,
          },
        ],
      };
       
      const plugins = [
        {
            
          id: 'text',
          beforeDraw: function (chart:any, a:any, b:any) {
        const width = chart.width,
              height = chart.height,
              ctx = chart.ctx;
      
            ctx.restore();
            ctx.font = '600 30px OpenSans';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = 'white';
      
        const text = "50",
              textX = Math.round((width - ctx.measureText(text).width) / 1.98),
              textY = height /1.55;
            ctx.fillText(text, textX, textY);
            ctx.save();
          },
        },
      ];
      const options={
        maintainAspectRatio: false,
    }
     
  return (
    <>
     <Doughnut data={data}  options={options}/>
    </>
  )
}
