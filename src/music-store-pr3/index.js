import React from "react";
import ReactDOM from "react-dom";
import Prueba from "./components/Prueba";
import Anuncio from "./components/Anuncio";
import "./index.css";

function MyStudentsFirstReactApp() {
    return <div className="container content">
        <Anuncio/>
        <Prueba/>
    </div>
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<MyStudentsFirstReactApp/>, wrapper) : false;