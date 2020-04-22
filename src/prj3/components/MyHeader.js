import React from "react";
import MyForm from "./MyForm";
import MyNav from "./MyNav";

const MyHeader = () => {
    return <header className="row">
        <div className="col-md-2">
            <img src="/prj3/img/logo.webp" alt="Logo" width="60"/>
        </div>
        <div className="col-md-4">
            <MyNav/>
        </div>
        <div className="col-md-6">
            <MyForm/>
        </div>
        <div className="col-sm-2">Contacto</div>
    </header>
};

export default MyHeader;