import React from 'react'
import {BsGraphUp,BsCheckLg} from "react-icons/bs"
import {RiMoneyDollarBoxLine} from "react-icons/ri"
import {AiFillQuestionCircle} from "react-icons/ai"
import { IconContext } from "react-icons";

export default function () {
  return (
    <div className='stat'>
        <span>
        <div className='one'>
            <h1>25</h1>
            <span>
            <IconContext.Provider value={{ color: 'rgb(34, 175, 185)'}}>
            <p><BsCheckLg/></p>
           </IconContext.Provider>
            <h6>SIGNUPS</h6>
            </span>
        </div>
        <div className='two'>
        <h1>$1000</h1>
            <span>
            <IconContext.Provider value={{ color: 'rgb(95, 56, 187)'}}>
            <p><BsGraphUp/></p>
            </IconContext.Provider>
                <h6>PROFIT</h6>
           </span>
        </div>
        </span>
        <span>
        <div className='three'>
        <h1>$350</h1>
            <span>
            <IconContext.Provider value={{ color: 'rgb(255, 208, 0)'}}>
            <p><RiMoneyDollarBoxLine/></p>
            </IconContext.Provider>
            <h6>COMMISSIONS</h6>
            </span>
        </div>
        <div className='four'>
        <h1>$300</h1>
            <span>
            <IconContext.Provider value={{ color: 'rgb(34, 175, 185)'}}>
            <p><AiFillQuestionCircle/></p>
            </IconContext.Provider>
            <h6>PENDING COMMISSIONS</h6>
            </span>
        </div>
        </span>
    </div>
  )
}
