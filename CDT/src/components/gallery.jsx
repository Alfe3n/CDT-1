import React from 'react'
import pic1 from './pic1.jpeg'
import pic2 from './pic2.jpeg'
import pic3 from './pic3.jpeg'
import pic4 from './pic4.jpeg'
import pic5 from './pic5.jpeg'


function gallery() {
  return (
    <div className='gallery-container'>
        <h2>Gallery</h2>
        <div className='pic1'>
            <img src={pic4} alt="pic"></img>
        </div>

        <div className='pic2'>
            <img src={pic2} alt="pic"></img>

        </div>

        <div className='pic3'>
            <img src={pic5} alt="pic"></img>

        </div>

        <div className='pic4'>
            <img src={pic1} alt="pic"></img>

        </div>

        <div className='pic5'>
            <img src={pic3} alt="pic"></img>
        </div>
    </div>
  )
}

export default gallery