import React from "react";
import ReactDOM from "react-dom";
import ProjectHeader from "./components/ProjectHeader";
import ProjectBody from "./components/ProjectBody";
import ProjectFooter from "./components/ProjectFooter";
import "./index.css";
import Spotis from "./components/Spotis";

function MyStudentsFirstReactApp() {
return <>
    <div className="container content">
        <ProjectHeader/>
        <Spotis/>
        <ProjectBody/>
    </div>
    <ProjectFooter/>
</>
}

//TODO check: Aquí tenéis una forma chula de evitar el error mediante "bicondicional" (es un if)
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<MyStudentsFirstReactApp/>, wrapper) : false;