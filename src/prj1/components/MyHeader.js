import React from "react";

let ConfirmDemo = () => {

    let mensaje = confirm("Este buscador no busca, es pirata c:");

    if (mensaje) {
        alert("¡Gracias por aceptar!");
    }

    else {
        alert("¡Gracias por cancelar!");
    }
};

const MyHeader = () => {
    return <div>
        <header style={{backgroundColor: "#28a745"}} className="row">

            <h1 style={{fontColor: "#ffffff"}} className="col-md-4">Topics Food</h1>


            <input  className="form-control" type="text" placeholder="Search" aria-label="Search" onClick={ConfirmDemo}  className="col-5"/>



            <img src="/images/imgPrj1/logo.png" width="100" height="100" alt="logo" className="col-3" />

        </header>

    </div>
};

export default MyHeader;