import React from 'react'
import "./slider.css"
const Slider = () => {
  return (
    <>
      <div id="carouselExampleControls" className=" carousel slide" data-bs-ride="carousel">
        <div className="slider_carousel carousel-inner">
        <div className="carousel-item active">
          <div className='slider text-center slider_innertext d-block' >
            <h1 className=' fw-bold animate__animated animate__backInRight ' style={{ fontSize: "70px", color: "white", animationDuration: "2s" }}>DESIGNER & MAKER</h1>
            <p className='animate__animated animate__backInRight ' style={{ fontSize: "30px", color: "darkblue", animationDuration: "3s" }}>Design your own world</p>
            <button className='home_btn'>Read Now</button>
          </div>

        </div>
        <div className="carousel-item">
          <div className='slider text-center slider_innertext d-block '  >
            <h1 className=' fw-bold animate__animated animate__backInRight ' style={{ fontSize: "70px", color: "white", animationDuration: "2s" }}>DESIGNER & MAKER</h1>
            <p className='animate__animated animate__backInRight' style={{ fontSize: "30px", color: "darkblue", animationDuration: "3s" }}>Design your own world</p>
            <button className='home_btn'>Read Now</button>
          </div>
        </div>
        <div className="carousel-item">
          <div className='slider text-center slider_innertext d-block'  >
            <h1 className=' fw-bold animate__animated animate__backInRight' style={{ fontSize: "70px", color: "white", animationDuration: "2s" }}>DESIGNER & MAKER</h1>
            <p className='animate__animated animate__backInRight' style={{ fontSize: "30px", color: "darkblue", animationDuration: "3s" }}>Design your own world</p>
            <button className='home_btn'>Read Now</button>
          </div>
        </div>
      </div>
    </div>



    </>
  )
}

export default Slider