import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer py-4" style={{backgroundColor:"gray"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2022</div>
                    <div className="col-lg-4 my-3 my-lg-0 row justify-content-center">
                        <div className='col'>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        </div>
                        <div className='col'>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        </div>
                        <div className='col'>
                            <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;