import React from 'react'
import "./firtslide.css"

const FirstSlider = () => {
    return (
        <>
            <div className='box shadow-lg'>
                <div id="carouselExampleCaptionsFirstSlider" className="firstSlider_carousel  carousel slide mx-auto" data-bs-ride="carousel" >
                    <ol className="carousel-indicators">
                        <li type="button" data-bs-target="#carouselExampleCaptionsFirstSlider" data-bs-slide-to="0" aria-label="Slide 0" aria-current="true" className="active me-2"></li>
                        <li type="button" data-bs-target="#carouselExampleCaptionsFirstSlider" data-bs-slide-to="1" aria-label="Slide 1" className=" me-2"></li>
                        <li type="button" data-bs-target="#carouselExampleCaptionsFirstSlider" data-bs-slide-to="2" aria-label="Slide 2" className=" me-2"></li>
                    </ol>
                    <div className="firstSlider_slider carousel-inner mx-auto ">
                        <div className="carousel-item active ">
                            <div className='row-col-2 d-lg-flex d-sm-block firstSlider_inneritem row-sm-col-1'>
                                <div className='col d-lg-flex d-sm-block ms-5 firstSlider_inneritem_inner'>
                                    <div className="UI text-center">UI</div>
                                    <div className='Ui text-center'>UX</div>
                                </div>
                                <div className='col my-auto '>
                                    <div className=''>
                                        <h3>I create simple interfaces for humans and enjoy pixel-perfection</h3>
                                        <p className="mt-3" > I’m an experienced and passionate user interface designer with interaction design background.  </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='row-col-2 d-lg-flex firstSlider_inneritem'>
                                <div className='col d-lg-flex d-sm-block ms-5 firstSlider_inneritem_inner'>
                                    <div className='frontend'>Frontend</div>
                                    <div className='Ui'>UI</div>
                                </div>
                                <div className='col my-auto'>
                                    <div >
                                        <h3>I create simple interfaces for humans and enjoy pixel-perfection</h3>
                                        <p className="mt-3"> I’m an experienced and passionate user interface designer with interaction design background.  </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className='row-col-2 d-lg-flex firstSlider_inneritem '>
                                <div className='col d-lg-flex d-sm-block ms-lg-5 firstSlider_inneritem_inner'>
                                    <div className='core'>Core</div>
                                    <div className='Ui'>UI</div>
                                </div>
                                <div className='col my-auto'>
                                    <div>
                                        <h3>I create simple interfaces for humans and enjoy pixel-perfection</h3>
                                        <p className="mt-3"> I’m an experienced and passionate user interface designer with interaction design background.  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptionsFirstSlider" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptionsFirstSlider" data-bs-slide="next">
                        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>
        </>
    )
}

export default FirstSlider