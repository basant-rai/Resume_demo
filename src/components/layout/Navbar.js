import React from 'react';
import{HashLink as Link} from 'react-router-hash-link';
// import{Link} from 'react-router-dom';

import Slider from '../pages/Slider';
import "./nav.css";

const Navbar = () => {
    return (
        <>
        <div className='b_image '>
            <div className="container mx-auto pt-lg-5">
                <header className="d-lg-flex ">
                    <Link to="#home" className="d-lg-flex me-lg-auto text-decoration-none ">
                        <span className="fw-bold text-white" style={{fontSize:"50px"}} >Resume</span>
                    </Link>

                    <ul className="nav fs-5  mt-lg-3 ">
                        <li className="nav-item"><Link to="#home"smooth className=" nav-link active text-white " aria-current="page">Home</Link></li>
                        <li className="nav-item"><Link to="#portfolio" smooth className="nav-link text-white">Portfolio</Link></li>
                        <li className="nav-item"><Link to="#skill" smooth className="nav-link text-white">Skills</Link></li>
                        <li className="nav-item"><Link to="#experience"smooth className="nav-link text-white">Experience</Link></li>
                        <li className="nav-item"><Link to="#contact" smooth className="nav-link text-white">Contact</Link></li>
                    </ul>
                </header>
            </div>
            <Slider/>
            </div>
            
        </>
    )
}

export default Navbar