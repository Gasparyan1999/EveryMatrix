import React from 'react'
import {GrBold} from "react-icons/gr"
import {IoIosSpeedometer,IoMdSettings} from "react-icons/io"
import {GiStarKey} from "react-icons/gi"
import {MdManageAccounts} from "react-icons/md"
import {AiFillSound,AiFillClockCircle} from "react-icons/ai"
import {FcStatistics} from "react-icons/fc"
import {TbArrowsRightLeft} from "react-icons/tb"
import {BsHeartFill,BsEyeFill} from "react-icons/bs"




export default function Navigate() {
  return (
    <div className='nav'>
        <div className='logo'><GrBold/></div>
        <div><IoIosSpeedometer/></div>
        <div><GiStarKey/></div>
        <div><MdManageAccounts/></div>
        <div><AiFillSound/></div>
        <div><FcStatistics/></div>
        <div><TbArrowsRightLeft/></div>
        <div><IoMdSettings/></div>
        <div className='navEnd'><BsHeartFill/></div>
        <div className='navEnd'><AiFillClockCircle/></div>
        <div className='navEnd'><BsEyeFill/></div>
    </div>
  )
}
