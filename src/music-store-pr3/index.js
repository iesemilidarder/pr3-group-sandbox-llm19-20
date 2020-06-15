import React from "react";
import ReactDOM from "react-dom";
import Prueba from "./components/Prueba";
import Anuncio from "./components/Anuncio";
import "./index.css";
import Buscador from "./components/Buscador";

function MyStudentsFirstReactApp() {
    return <div className="container content">
        <Anuncio/>
        <Prueba/>
        /*<Buscador/>*/
    </div>
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<MyStudentsFirstReactApp/>, wrapper) : false;