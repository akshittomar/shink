import React from 'react'
import './head.css';
import image from './shink4.png'
import video from './sea2.mp4'
import Text from './Text';
function Header() {
  return (
    <>
     <div className="fullscreen-bg">
      {/* <img className="fullscreen-bg__video" src={image} ></img> */}
      <video className="fullscreen-bg__video" loop autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="fullscreen-bg__content "  >
   <img src={image} className='fa-fade' />
    
      </div>
      </div>
    </>
  )
}

export default Header