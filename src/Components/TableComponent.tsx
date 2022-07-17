import React, { useState } from 'react'
import {MdViewList} from "react-icons/md"
export default function TableComponent() {
    const [arr,newArr]=useState(
        [{id:1007,user:"Simona",profit:55},
        {id:1008,user:"Ariana",profit:45},
        {id:1009,user:"Adam",profit:35},
        {id:1010,user:"John",profit:25},
        {id:1011,user:"Garry",profit:15}]
    )
  return (
    <table>
                <tbody>
                 <td colSpan={1} rowSpan={1}><p>ID</p></td>
                 <td colSpan={1} rowSpan={1}><p>Username</p></td>
                 <td colSpan={1} rowSpan={1}><p>Profit($)</p></td>
                 <td colSpan={1} rowSpan={1}><p>Commissions($)</p></td>      
                 <td colSpan={1} rowSpan={1}><p>View</p></td>
                 </tbody>
                 {arr.map((elem:any,index:any)=>{
                    if(index==4){
                        return (
                            <tbody className='bodyOver'>
                            <td colSpan={1} rowSpan={1}><p>{elem.id}</p></td>
                            <td colSpan={1} rowSpan={1}><p>{elem.user}</p></td>
                            <td colSpan={1} rowSpan={1}><p>{elem.profit}</p></td>
                            <td colSpan={1} rowSpan={1}><p>{elem.user}</p></td>      
                            <td colSpan={1} rowSpan={1}><p><MdViewList/></p></td>
                            </tbody>
                               )
                    }
                    return (
                 <tbody className='body'>
                 <td colSpan={1} rowSpan={1}><p>{elem.id}</p></td>
                 <td colSpan={1} rowSpan={1}><p>{elem.user}</p></td>
                 <td colSpan={1} rowSpan={1}><p>{elem.profit}</p></td>
                 <td colSpan={1} rowSpan={1}><p>{elem.user}</p></td>      
                 <td colSpan={1} rowSpan={1}><p><MdViewList/></p></td>
                 </tbody>
                    )
                 })}

            </table>
  )
}
