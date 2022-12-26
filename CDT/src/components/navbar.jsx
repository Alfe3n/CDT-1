import React from 'react'
import logo from './logo.svg'
import bag from './shopping-bag.svg'
import login from './log-in.svg'
import heart from './heart.svg'
function navbar() {
  return (
    <div className='nav'>
        <div className='logo'>
            <a href="#">logo</a>
        </div>
        <div>
            <a href='#'><img src={login}></img></a>
            <a href='#'><img src={heart}></img></a>
            <a href='#'>my designs</a>
            <a href='#'><img src={bag}></img></a>
        </div>
    </div>
  )
}

export default navbar