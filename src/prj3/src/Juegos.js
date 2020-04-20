import React from "react";
import ReactDOM from "react-dom";
import Myfooter from "./components/Myfooter";
import Recomendados from "../components/Recomendados";
import "./juegos.css"

function App(){
    return(
        <div>
            <Recomendados/>
            <Myfooter/>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('main')
);