console.log("hey que onda");
import React from "react";
import ReactDOM from "react-dom";

import Recomendados from "./components/Recomendados";
import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";
import MyForm from "./components/MyForm";
import Myfooter from "./components/Myfooter";

function App() {
    return (
        <div>
            <MyHeader/>
            <MyNav/>
            <div style={{float: "left"}}>
                <Recomendados/>
                <Myfooter/>
            </div>
        </div>

    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('main')
);