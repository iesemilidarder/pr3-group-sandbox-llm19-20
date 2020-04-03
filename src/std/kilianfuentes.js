import React from "react";

function function1() {
    console.log("hola")
}
const function2 = function () {
    console.log("hola2");
}
//nueva forma de hacerlo, arrow function 4 hooks
const myRender = (container) => {
    console.log("arrow function");
    document.getElementById(container).innerHTML = `
        <h1>Si me ves, esto aun no a eplotado</h1>
        <p>No sonrrias aun, la cuenta atras esta en marcha uahahaha</p>
        <p>Soy un crio...</p>
  `;
};
//inserta entre las comillas una id en un HTML para que genere en esa parte del HTML el contenido de la funcion a la que llamamos myRender , myRender es el nombre de esta, a cada una tu le pones el que quieras
myRender("");

//Funcion sincro (las convencionales) realiza toda la operacion y al terminar todos los procesos envia el resultado
//Funcion asincrona

/*
function header () {
    return (<h1>Hola mundo</h1>
    );
}

ReactDOM.render(<header/>, document.getElementById("mainContainer"));*/

function kheader() {
    return <div>
        <header className="row">
            <div className="col-md-2">
                <img src="/logo.png" alt="Logo molon" width="50">
            </div>
            <nav className="col-md-6 navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">My web</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="col-sm-2">Contact 555-333210</div>
            <div className="col-sm-2"><img src="assets/images/callus.jpg" alt="call us" width="40"></div>
        </header>
    </div>
}