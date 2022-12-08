import React from "react";
import Cartwidget from "./Cartwidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <div className="container bg-secondary">
                <div className="row">
                    <div className="col-6">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                                    <Link className="navbar-brand fs-1 text-white" to={"/"}>Sportwear</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                        <div className="navbar-nav">
                                            <NavLink className="nav-link text-white fs-5" to={"/category/Remeras"}>Remeras</NavLink>
                                            <NavLink className="nav-link text-white fs-5" to={"/category/Pantalones"}>Pantalones</NavLink>
                                            <NavLink className="nav-link text-white fs-5" to={"/category/Buzos"}>Buzos</NavLink>
                                            <NavLink className="nav-link text-white fs-5" to={"/category/Otros"}>Otros</NavLink>
                                        </div>
                                    </div>
                            </div>  
                        </nav>      
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <Cartwidget />
                   </div>
                </div>
            </div>
        </div>           
        
    )
}


export default NavBar;

