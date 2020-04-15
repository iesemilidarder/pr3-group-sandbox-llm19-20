import React from "react";

const MyHeader = () => {
    return <div>
        <header style={{backgroundColor: "#6f42c1"}} className="row">

            <h1 style={{fontColor: "#ffffff"}} className="col-md-4">Topics Food</h1>

            <input type="text" value="Buscador" className="col-3"/>
            <img src="/images/imgPrj1/logo.png" alt="logo" className="col-5"/>

        </header>

    </div>
};
//TODO (PR1: by berto) No subais errores al repositorio!!!!! Rompen a todos los que trabajan con el
export default MyHeader;