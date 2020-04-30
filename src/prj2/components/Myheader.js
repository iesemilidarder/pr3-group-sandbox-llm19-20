import React from "react";

const Myheader = () => {
    return <div>
        <header>
            <nav className="navbar navbar-light bg-light" style="background-color: #17a2b8;">
                <a className="navbar-brand mr-4" href="#">
                    <i className="fas fa-globe-africa" style="font-size: 22px;"></i>
                    EmiliAirlines
                </a>
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn btn-danger my-2 mr-2 my-sm-0" type="submit">Inicio Sesión</button>
                    <button className="btn btn-danger my-2 mr-4 my-sm-0" type="submit">Registrarse</button>
                </form>
            </nav>
        </header>
    </div>
};

export default Myheader;