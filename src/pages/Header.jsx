import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import '../stylesheets/header.css'
import { Link } from 'react-router-dom';



function Header() {

        const [isSticky, setSticky] = useState(false);
        const handleScroll = () => {
            if (window.scrollY > 0) {
            setSticky(true);
            } else {
            setSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
            
        return (
            <div>

    {/* <!-- Header --> */}
    <nav className={`navbar navbar-expand-lg navbar-light shadow ${isSticky ? "fixed-header" : ""}`}>
        <div className="container d-flex justify-content-between align-items-center">

            <a className="navbar-brand text-success logo h1 align-self-center" href="index.html">
            <Link to="/" className="nav-link"><img src="./assets/img/logo.svg" alt="logo" style={{maxHeight: '100px', maxWidth: '250px'}}/></Link>            
            </a>

            <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#templatemo_main_nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" style={{color: "#fff", important: true}}>
                    <span class="line" id="line1"></span>
                    <span class="line" id="line2"></span>
                    <span class="line" id="line3"></span>
                </span>
            </button>

            <div className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="templatemo_main_nav">
                <div className="flex-fill">
                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                        <strong>Home /&gt;</strong>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">
                        <strong>About /&gt;</strong>
                        </Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link to="/shop" className="nav-link">
                        <strong>Shop /&gt;</strong>
                        </Link>
                    </li> */}
                    <li className="nav-item">
                        <Link to="/Stars" className="nav-link">
                        <strong>Portfolio /&gt;</strong>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link">
                        <strong>Contact /&gt;</strong>
                        </Link>
                    </li>
                </ul>
                </div>
                <div class=" align-self-center d-flex">
                    <div class="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                        <div class="input-group">
                            <input type="text" class="form-control" id="inputMobileSearch" placeholder="Search ..."/>
                            <div class="input-group-text text-light">
                                <i class="fa fa-fw fa-search"></i>
                            </div>
                        </div>
                    </div>
                    <a class="m-2 nav-icon d-none d-lg-inline" href="#" data-bs-toggle="modal" data-bs-target="#templatemo_search">
                        <i class="fa fa-fw fa-search mr-2" style={{color: "#42C6FF", important: true}}></i>
                    </a>
                    <a class="m-2 nav-icon position-relative text-decoration-none" href="#">
                        <i class="fa fa-fw fa-cart-arrow-down mr-1" style={{color: "#42C6FF", important: true}}></i>
                    <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">7</span>
                    </a>
                    <a class="m-2 nav-icon position-relative text-decoration-none" href="#">
                        <i class="fa fa-fw fa-user mr-3" style={{color: "#42C6FF", important: true}}></i>
                    <span class="position-absolute top-0 left-100 translate-middle badge rounded-pill bg-light text-dark">+99</span>
                    </a>

                </div>
            </div>

        </div>
    </nav>
    {/* <!-- Close Header --> */}

      
    </div>
  )
}

export default Header
