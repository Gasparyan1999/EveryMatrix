import React from 'react'
import Dishboard from './Components/Dishboard'
import Graph from './Components/Graph'
import Header from './Components/Header'
import Navigate from './Components/Navigate'
import Statistic from './Components/Statistic'
import Table from './Components/Table'
import "./Style/App.scss"
export default function FC() {
  return (
    <div className='app'>
      <Navigate/>
      <div className='container'>
      <Header/>
      <Dishboard/>
      <Statistic/>
      <Graph/>
      <Table/>
       </div>
       </div>
  )
}

