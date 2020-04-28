import React from "react";
import ReactDOM from "react-dom";

import Recomendados from "./components/Recomendados";
import Myfooter from "./components/Myfooter";
import MyHeader from "./components/MyHeader";
import Myslider from "./components/Myslider";

function App() {
    return (
        <div>
            <div style={{float: "left"}}>
                <MyHeader/>
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