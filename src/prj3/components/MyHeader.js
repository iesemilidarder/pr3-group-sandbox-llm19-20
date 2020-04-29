import React from "react";
import MyNav from "./MyNav";
import "../myheader.css";
import LoginForm from "./LoginForm";

const MyHeader = () => {
    return <header>
        <div className="container" id="head">
            <div id="head" className="row">
                <div className="col-md">
                    <ul>
                        <li>
                            <img src="/prj3/img/logo.webp" alt="Logo" width="100"/>
                        </li>
                        <li>
                            <MyNav/>
                        </li>
                        <li>
                            <LoginForm/>
                        </li>
                        <li >
                            <input style={{ marginBottom: 25}} className="btn btn-primary" type="button" value="Inicia sesión"/>
                            <input className="btn btn-secondary" type="button" value="Registrate"/>
                        </li>
                    </ul>

                </div>
            </div>
        </div>

    </header>
};
export default MyHeader;
