import React from "react";
import ReactDOM from "react-dom";

import Recomendados from "./components/Recomendados";
import MyNav from "./components/MyNav";
import Myfooter from "./components/Myfooter";
import MyHeader from "./components/MyHeader";
import Myslider from "./components/Myslider";

function App() {
    return (
        <div>
            <div style={{float: "left"}}>
                <MyHeader/>
                <MyNav/>
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