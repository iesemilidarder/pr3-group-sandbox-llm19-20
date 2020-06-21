import React from "react";
import ReactDOM from "react-dom";
import Prueba from "./components/Prueba";
<<<<<<< HEAD
import Anuncio from "./components/Anuncio";
import "./index.css";
import Buscador from "./components/Buscador";
=======
import Header from "./components/Header";
>>>>>>> e6f5b89f13ab5fe109c6a2e8a4b35bbcce88b10e

function MyStudentsFirstReactApp() {
    return <div className="container content">
        <Header/>
        <Prueba/>
        /*<Buscador/>*/
    </div>
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<MyStudentsFirstReactApp/>, wrapper) : false;