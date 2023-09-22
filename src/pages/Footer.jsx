import React from 'react'
import { Link } from 'react-router-dom';


class Footer extends React.Component {
    render() {
        return (
            <div>

{/* <!-- Start Footer --> */}
    <footer class="bg-light text-dark" id="tempaltemo_footer">
        <div class="container">
            <div class="row">

                <div class="col-md-4 pt-5">
                    <a className="logo align-self-center text-align-center" href="index.html">
                        <img src="./assets/img/logo_dark.svg" alt="logo" style={{maxHeight: '100px', maxWidth: '250px', margin: '0 auto'}}/>            
                    </a>
                    <ul class="list-unstyled text-dark footer-link-list">
                        <li>
                            <i class="fas fa-map-marker-alt fa-fw"></i>
                            Madrid, España
                        </li>
                        <li>
                            <i class="fa fa-phone fa-fw"></i>
                            <a class="text-decoration-none text-dark" href="tel:010-020-0340">644-391-505</a>
                        </li>
                        <li>
                            <i class="fa fa-envelope fa-fw "></i>
                            <a class="text-decoration-none text-dark" href="albertodiazesteban@gmail.com">albertodiazesteban@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-dark border-bottom pb-3 border-light" style={{fontWeight: '800'}}>Take a look</h2>
                    <ul class="list-unstyled footer-link-list">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/About" className="nav-link">About</Link></li>
                        {/* <li><Link to="/Shop" className="nav-link">Shop</Link></li> */}
                        <li><Link to="/Contact" className="nav-link">Contact</Link></li>
                    </ul>
                </div>

                <div class="col-md-4 pt-5">
                    <h2 class="h2 text-dark border-bottom pb-3 border-light" style={{fontWeight: '800'}}>What I do</h2>
                    <ul class="list-unstyled text-dark footer-link-list">
                        <li><a class="text-decoration-none" href="#">Art</a></li>
                        <li><a class="text-decoration-none" href="#">Design</a></li>
                        <li><a class="text-decoration-none" href="#">Code</a></li>
                    </ul>
                </div>

            </div>

            <div class="row text-dark mb-4">
                <div class="col-12 mb-3">
                    <div class="w-100 my-3 border-top border-light"></div>
                </div>
                <div class="col-auto me-auto">
                    <ul class="list-inline text-left footer-icons">
                        <li class="list-inline-item rounded-circle text-center">
                            <a class="text-dark text-decoration-none" target="_blank" href="https://www.instagram.com/azulclaroalberto.art/">
                                <i class="fab fa-instagram fa-lg fa-fw" style={{color: "#42C6FF", important: true}}></i>
                            </a>
                        </li>
                        <li class="list-inline-item rounded-circle text-center">
                            <a class="text-dark text-decoration-none" target="_blank" href="https://twitter.com/AzulClaroAlbert">
                                <i class="fab fa-twitter fa-lg fa-fw" style={{color: "#42C6FF", important: true}}></i>
                            </a>
                        </li>
                        <li class="list-inline-item rounded-circle text-center">
                            <a class="text-dark text-decoration-none" target="_blank" href="https://www.linkedin.com/in/alberto-diaz-esteban/">
                                <i class="fab fa-linkedin fa-lg fa-fw" style={{color: "#42C6FF", important: true}}></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="col-auto">
                    <label class="sr-only" for="subscribeEmail">Email address</label>
                    <div class="input-group mb-2">
                        <input type="text" class="form-control bg-light border-light" id="subscribeEmail" placeholder="Email address"/>
                        <div class="input-group-text btn-success text-dark">Subscribe</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-100 bg-dark text-white py-3">
            <div class="container">
                <div class="row pt-2">
                    <div class="col-12">
                        <p class="text-center text-light">
                            Copyright &copy; 2023 by <strong>Alberto Díaz Esteban</strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </footer>
{/* <!-- End Footer --> */}

            </div>
            );
    }
}

export default Footer