import React from "react";
import ReactDOM from "react-dom";

import Recomendados from "./components/Recomendados";
import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";
import MyForm from "./components/MyForm";
import Myfooter from "./components/Myfooter";
import Myslider from "./components/Myslider";

function App() {
    return (
        <div>
            <MyHeader/>
            <MyNav/>
            <MyForm/>
            <div style={{float: "left"}}>
                <Myslider/>
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