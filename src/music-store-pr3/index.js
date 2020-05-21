import React from "react";
import ReactDOM from "react-dom";
import Prueba from "./components/Prueba";

function MyStudentsFirstReactApp() {
    return <div className="container content">
        <Prueba/>
    </div>
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<MyStudentsFirstReactApp/>, wrapper) : false;