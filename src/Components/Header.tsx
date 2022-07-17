import React from 'react'
import {AiOutlineMenuFold} from "react-icons/ai"
import english from "../img/eng.png"
import man from "../img/men.jpg"
import "../.d"

export default function Header() {
  return (
    <div className='header'>
        <div className='menu'><span><AiOutlineMenuFold/></span></div>
        <div className='language'><img src={english} /><p>EN</p></div>
        <div className='user'>
          <div className='foto'><img src={man} /></div>
          <div className='info'>
          <label htmlFor="name"><h6>Hello,Max</h6><p>Last Login:Thu Mar 20 2014</p></label>
          <select name="name"/>
          </div>
        </div>
    </div>
  )
}
