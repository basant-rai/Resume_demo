import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import "./portfolio.css"

const Portfolio = () => {
  return (
    <>
      <div id='portfolio' className=' mt-5'>
        <div className="mt-5 text-center " >
          <h4>PORTFOLIO</h4>
        </div>
        <div className='portfolio_slider mt-5 '>
          <div id="carouselExampleCaptionsportfolio" className="portfolio_c carousel slide mx-auto" data-bs-ride="carousel">

            <div className="portfolio_inner carousel-inner mx-auto ">
              <div className="carousel-item active">
                <div className='row-col-2 d-flex d-sm-block d-md-block d-xs-block d-lg-flex '>
                  <div className='col ms-lg-5 ms-sm-0'>
                    <img src="./images/img1.png" class="d-block w-100" alt="..." />
                  </div>
                  <div className='col'>
                    <div className=' w-50 mx-auto mt-5'>
                      <div className='top'>
                        <h5 style={{ color: "#CFCFCF" }}>CLIENT</h5>
                        <h6>Apple</h6>
                      </div>
                      <div className='my-5 middle'>
                        <h5 style={{ color: "#CFCFCF" }}>ROLE IN PROJECT</h5>
                        <h6>Designer Lead</h6>
                      </div>
                      <div className='last'>
                        <h5 style={{ color: "#CFCFCF" }}>PROJECT INCLUDED</h5>
                        <h6> Mobile and web interfaces</h6>
                      </div>
                      <button className=' portfolio_button mt-4' ><Link to="#home">Browser</Link></button>

                    </div>
                  </div>
                </div>
                <div className='text-center'>
                  <button className=' portfolio_button mt-5' ><Link to="#home">Browser Portfolio</Link></button>

                </div>
              </div>
              <div className="carousel-item">
                <div className='row-col-2 d-flex d-sm-block d-md-block  d-xs-block d-lg-flex  '>
                  <div className='col ms-lg-5 ms-sm-0'>
                    <img src="./images/img2.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div className='col '>
                    <div className=' w-50 mx-auto mt-5'>
                      <div className='top'>
                        <h5 style={{ color: "#CFCFCF" }}>CLIENT</h5>
                        <h6>Apple</h6>
                      </div>
                      <div className='my-5 middle'>
                        <h5 style={{ color: "#CFCFCF" }}>ROLE IN PROJECT</h5>
                        <h6>Designer Lead</h6>
                      </div>
                      <div className='last'>
                        <h5 style={{ color: "#CFCFCF" }}>PROJECT INCLUDED</h5>
                        <h6> Mobile and web interfaces</h6>
                      </div>
                      <button className=' portfolio_button mt-4' ><Link className='text-decoration-none ' to="#home">Browser</Link></button>

                    </div>
                  </div>
                </div>
                <div className='text-center'>
                  <button className=' portfolio_button mt-5' ><Link to="#home">Browser Portfolio</Link></button>

                </div>
              </div>
              <div className="carousel-item ">
                <div className='row-col-2 d-flex d-sm-block d-md-block d-lg-flex d-xs-block'>
                  <div className='col ms-lg-5 ms-sm-0'>
                    <img src="./images/img3.jpg" class="d-block w-100" alt="..." />
                  </div>
                  <div className='col '>
                    <div className=' w-50 mx-auto mt-5'>
                      <div className='top'>
                        <h5 style={{ color: "#CFCFCF" }}>CLIENT</h5>
                        <h6>Apple</h6>
                      </div>
                      <div className='my-5 middle'>
                        <h5 style={{ color: "#CFCFCF" }}>ROLE IN PROJECT</h5>
                        <h6>Designer Lead</h6>
                      </div>
                      <div className='last'>
                        <h5 style={{ color: "#CFCFCF" }}>PROJECT INCLUDED</h5>
                        <h6> Mobile and web interfaces</h6>
                      </div>
                      <button className=' portfolio_button mt-4' ><Link to="#home">Browser</Link></button>

                    </div>
                  </div>
                </div>
                <div className='text-center'>
                  <button className=' portfolio_button mt-5' ><Link to="#home">Browser portfolio</Link></button>
                </div>
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptionsportfolio" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptionsportfolio" data-bs-slide="next">
              <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Portfolio