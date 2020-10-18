import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../Resources/images/logos/logo.png";

const Navbar = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link class="navbar-brand" href="#"> <img style={{ width: "150px" }} src={logo} alt="" /> </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav d-flex align-items-center ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link mr-5" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="/portfolio">Our Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5" to="/team">Our Team</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 " to="/contact">Contact Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 " to="/addServices"><button className="btn btn-dark">Admin</button> </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5 " to="/login"><button className="btn btn-dark">Login</button> </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;