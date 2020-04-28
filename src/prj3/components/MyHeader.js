import React from "react";
import MyNav from "./MyNav";
import "../myHeader.css";

const MyHeader = () => {
    return <header>
        <div className="container">
            <div className="col-md">
                <ul>
                    <li>
                        <img src="/prj3/img/logo.webp" alt="Logo" width="60"/>
                    </li>
                    <li>
                        <MyNav/>
                    </li>
                    <li>
                        <form id="application" className="col-md-2">
                            <input aria-label="usser" className="form-control my-3" type="text" name="usser" placeholder="Nombre usuario"/>
                            <input aria-label="pass" className="form-control my-3" type="password" name="pass" placeholder="Contraseña"/>
                        </form>
                    </li>
                    <li>
                        <input className="btn btn-primary" type="button" value="Inicia sesión"/>
                        <input className="btn btn-secondary" type="button" value="Registrate"/>
                    </li>
                </ul>

            </div>


        </div>

    </header>
};
export default MyHeader;

