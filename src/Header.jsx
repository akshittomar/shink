import React from 'react'
import './head.css';
import image from './shink4.png'
import video from './sea2.mp4'
import Text from './Text';
function Header() {
  const buttonStyle = {
    background: 'linear-gradient(180deg, #A8F9AA 11.04%, #5DC8F7 70.78%)',
    color: 'black', // Set text color
    border: 'none', // Remove button border if needed
  };
  return (
    <>
      <div className="fullscreen-bg">
        {/* <img className="fullscreen-bg__video" src={image} ></img> */}
        {/* <video className="fullscreen-bg__video" loop autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
        <div className="fullscreen-bg__content "  >
          <img src={image} className='' />
          <div
            className='' style={{ color: "#5DC8F7", fontSize: "xx-large" }}>Loading love algorithms...</div>





          <div style={{ color: " #A8F9AA", fontSize: "x-large" }}>The safer, kinder, AI-ascendant dating app
          </div>

          <div className='my-1'
           style={buttonStyle}>    <button type="button" className="btn btn-lg ">Notify Me <i className="fa-solid fa-angle-right"></i></button></div>

        </div>


      </div>
    </>
  )
}

export default Header