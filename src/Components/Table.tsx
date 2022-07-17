import React, { useState } from 'react'
import {MdViewList} from "react-icons/md"
import TableComponent from './TableComponent'
export default function Table() {

  return (
    <div className='table'>
        <div>
        <div className='col'><h4>Top Affiliates</h4></div>
        <TableComponent/>
        </div>
        <div>
        <div className='col'><h4>Signups</h4></div>
        <TableComponent/>
        </div>
        <div>
        <div className='col'><h4>Pending Commissions</h4></div>
        <TableComponent/>
        </div>
    </div>
  )
}
