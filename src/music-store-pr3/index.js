import React from "react";
import ReactDOM from "react-dom";
import Prueba from "./components/Prueba";
import Header from "./components/Header";

function MyStudentsFirstReactApp() {
    return <div className="container content">
        <Header/>

        <Prueba/>
    </div>
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<MyStudentsFirstReactApp/>, wrapper) : false;