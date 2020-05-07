import React from "react";

const MyHeader = () => {
    let confirmDemo = (e) => {
        if (confirm("Este buscador no busca, es pirata c:")) {
            alert("¡Gracias por aceptar!");
        } else {
            alert("¡Gracias por cancelar!");
        }
        return false;
    };
    return <div>
        <header style={{backgroundColor: "#65AB9A"}} className="row">
            <h1 style={{color: "#FFFFFF"}} className="col-md-4">¡Que aproveche!</h1>
            <div className="col-5 ">
                <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
                <button onClick={(event => confirmDemo(event))}>Busca</button>
            </div>
            <img src="/images/imgPrj1/logo2.png" width="50" height="150" alt="logo" className="col-3"/>
        </header>
    </div>
};

export default MyHeader;