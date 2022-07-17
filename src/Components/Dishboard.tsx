import React from 'react'
import {IoIosArrowForward} from "react-icons/io"
import {BsFillHeartFill} from "react-icons/bs"

export default function () {
  return (
    <div className='dishboard'>
        <div className='board'>
          <div className='right'><IoIosArrowForward/></div>
          <p>Dishboard</p>
          </div>
          <div className='favorite'>
          <p><BsFillHeartFill/>  ADD THIS PAGE TO FAVORITES </p>
          </div>
    </div>
  )
}
