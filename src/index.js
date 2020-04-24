import React from "react";
import ReactDOM from "react-dom";
import ProjectHeader from "./components/ProjectHeader";
import ProjectBody from "./components/ProjectBody";
import ProjectFooter from "./components/ProjectFooter";
import "./index.css";

function MyStudentsFirstReactApp() {
    return <>
        <ProjectHeader/>
        <ProjectBody/>
        <ProjectFooter/>
    </>
}

//TODO check: Aquí tenéis una forma chula de evitar el error mediante "bicondicional" (es un if)
const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<MyStudentsFirstReactApp/>, wrapper) : false;