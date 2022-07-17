
import Chart from "react-google-charts";


export default function () {
    const data = [
        ["Country", "Signup"],
        ["",0],
        ["United States", 200],
      ];
      const options={
        backgroundColor:"#171717",
        colorAxis: {colors: ["yellow"]},
        datalessRegionColor: 'grey',
      }
    
  return (
    <>
     <Chart options={options} chartType="GeoChart" width="100%" height="150px" data={data} />
    </>
  )
}

