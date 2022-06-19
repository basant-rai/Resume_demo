import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <>
        <div className='last ' style={{background:'#363842',color:"white"}}>
            <div className='mx-auto footer_box'style={{width:'80%',}} >
                <footer className='row' >
                    <div className='col-lg-3 col-sm-3 mt-4'>
                        <h4 className='fw-bold'>Menu</h4>
                        <ul className="nav flex-column mt-2">
                            <li className="nav-item mb-2"><Link to="#" class="nav-link p-0 footer_inner">Home</Link></li>
                            <li className="nav-item mb-2"><Link to="#" class="nav-link p-0 footer_inner">Portfolio</Link></li>
                            <li className="nav-item mb-2"><Link to="#" class="nav-link p-0 footer_inner">Skills</Link></li>
                            <li className="nav-item mb-2"><Link to="#" class="nav-link p-0 footer_inner">Experience</Link></li>
                            <li className="nav-item mb-2"><Link to="#" class="nav-link p-0 footer_inner">Contact</Link></li>
                        </ul>
                    </div>
                    <div className='col-3 mt-4 col-sm-3'>
                        <h4 className='fw-bold'>Archives</h4>
                        <ul className='footer_last list-unstyled mt-2 '>
                            <li className=' mb-2'><Link className=' text-decoration-none footer_inner' to='#'>March <span>2014</span></Link></li>
                            <li className=' mb-2'><Link className=' text-decoration-none footer_inner' to='#'>April <span>2014</span></Link></li>
                            <li className=' mb-2'><Link className=' text-decoration-none footer_inner' to='#'>May <span>2014</span></Link></li>
                            <li className=' mb-2'><Link className=' text-decoration-none footer_inner' to='#'>June <span>2014</span></Link></li>
                            <li className=' mb-2'><Link className=' text-decoration-none footer_inner' to='#'>July <span>2014</span></Link></li>



                        </ul>
                    </div>
                    <div className='col-lg-3 mt-4 col-sm-4'>
                        <h4 className='fw-bold'>Widget</h4>
                        <p className='footer_inner mt-2 '>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div className='col-lg-3 mt-4 text-end col-sm-1'>
                        <h4 className='fw-bold mb-3 text-center'>Follows</h4>
                        <div className='d-sm-block d-md-block icons'> 
                        <i class="fa-brands fa-2x fa-facebook me-lg-5 ms-sm-3 mb-sm-3 footer_inner"></i>
                        <i class="fa-brands fa-2x fa-twitter footer_inner ms-sm-3 me-lg-5 mb-sm-3"></i>
                        <i class="fa-brands fa-2x fa-google-plus-g footer_inner ms-sm-3 me-lg-5 mb-sm-3"></i>
                        </div>
                    </div>




                </footer>
            </div>
        
        
        
        
        
        
        </div>
            </>
    )
}

export default Footer