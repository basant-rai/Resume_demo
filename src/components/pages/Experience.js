import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import "./skill.css"

const Experience = () => {
    return (
        <div id='experience' className='mt-5'>
            <div className='text-center '>
                <h4>EXPERIENCE</h4>
            </div>
            <div className='row mt-5 d-sm-block d-md-block d-xs-block d-lg-flex text-sm-center text-lg-start'>
                <div className='col-xl-7 col-lg-5 col-sm-12 col-md-10'>
                    <div className='experience_heading mx-auto' >
                        <h1 className='fw-bold'>Work experience</h1>
                        <p className='mt-3 mb-5 '>Specialties : User experience design, user interface design, brand identity, typography, print and packaging design, web standards, grid based layout.</p>
                        <Link className='text-decoration-none portfolio_button ' to='#home'>View on LInkedin</Link>
                    </div>
                </div>
                <div className='col-xl-5 col-lg-5 col-sm-12 text-sm-center text-xl-start mt-sm-3'>
                    <div className='row'>
                        <div className='col-lg-2 col-xl-2 col-sm-5 text-sm-end text-xl-start' >
                            <img src='./images/experience.png' alt='' />
                        </div>
                        <div className='col-lg-10 col-xl-10 col-sm-7'>
                            <div className='d-flex experience_fb' style={{ marginTop: "30px" }}>
                                <div className='me-3'>
                                    <img style={{ height: '50px', width: "100%", border: '2px solid white', borderRadius: "10px" }} src='./images/asset01.jpg' alt='' />
                                </div>
                                <div>
                                    <h5>Facebook</h5>
                                    <p>UI/UX Designer</p>
                                </div>
                            </div>
                            <div className='d-flex experience_amazon '>
                                <div className='me-3'>
                                    <img style={{ height: '50px', width: "100%", border: '2px solid white', borderRadius: "10px" }} src='./images/asset02.jpg' alt='' />
                                </div>
                                <div>
                                    <h5>Facebook</h5>
                                    <p>UI/UX Designer</p>
                                </div>
                            </div>
                            <div className='d-flex my-5 experience_apple' >
                                <div className='me-3'>
                                    <img style={{ height: '50px', width: "100%", border: '2px solid white', borderRadius: "10px" }} src='./images/asset03.jpg' alt='' />
                                </div>
                                <div>
                                    <h5>Facebook</h5>
                                    <p>UI/UX Designer</p>
                                </div>
                            </div>
                            <div className='d-flex experience_ibm' >
                                <div className='me-3'>
                                    <img style={{ height: '50px', width: "100%", border: '2px solid white', borderRadius: "10px" }} src='./images/asset04.jpg' alt='' />
                                </div>
                                <div>
                                    <h5>Facebook</h5>
                                    <p>UI/UX Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor:'#35AFBA'}}>
                <div className='mx-auto text-center' style={{ width:'80%',height:'300px' }}>
                    <div className='row d-sm-block d-lg-flex ' >
                        <div className='col-lg-4 mt-lg-5 '>
                            <img className='mt-sm-4' src='./images/img.png' alt='' style={{borderRadius:'20px',border:"2px solid white",height:'200px'}}/>
                        </div>
                        <div className='col-lg-8 mt-lg-5 mt-sm-3'>
                            <h4>Adrian thomas</h4>
                            <p></p>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience