import React from "react";
import MyNav from "./MyNav";

const MyHeader = () => {
    return <header className="row">
        <div className="col-md-2">
            <img src="/prj3/img/logo.webp" alt="Logo" width="60"/>
        </div>
        <div>
            <MyNav/>
        </div>
        <form id="application" className="col-md-2">
        <input aria-label="usser" className="form-control my-3" type="text" name="usser" placeholder="Nombre usuario"/>
        <input aria-label="pass" className="form-control my-3" type="password" name="pass" placeholder="Contraseña"/>
        </form>
        <div className="col-md-2">
            <input className="btn btn-primary" type="button" value="Inicia sesión"/>
            <input className="btn btn-secondary" type="button" value="Registrate"/>
        </div>
    </header>
};
export default MyHeader;

