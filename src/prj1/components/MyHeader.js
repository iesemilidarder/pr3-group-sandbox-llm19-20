import React from "react";

const MyHeader = () => {
    return <div>
        <header style={{backgroundColor: "#28a745"}} className="row">

            <h1 style={{fontColor: "#ffffff"}} className="col-md-4">Topics Food</h1>

            <input className="form-control" type="text" placeholder="Search" aria-label="Search" className="col-5"/>
            <img src="/images/imgPrj1/logo.png" width="100" height="100" alt="logo" className="col-3"/>

        </header>

    </div>
};
//TODO (PR1: by berto) No subais errores al repositorio!!!!! Rompen a todos los que trabajan con el
export default MyHeader;