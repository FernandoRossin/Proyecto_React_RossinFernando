import React from "react";
import Cartwidget from "./Cartwidget";

const NavBar = () => {
    return (
        <div>
            <div className="container bg-secondary">
                <div className="row">
                    <div className="col-6">
                        <nav className="navbar navbar-expand-lg">
                            <div className="container-fluid">
                            <h2 className="navbar-brand fs-1 text-white" href="">Sportwear</h2>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        <a className="nav-link text-white fs-5" href="#">Home</a>
                                        <a className="nav-link text-white fs-5" href="#">Productos</a>
                                        <a className="nav-link text-white fs-5" href="#">Sucursales</a>
                                        <a className="nav-link text-white fs-5" href="#">Contacto</a>
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

