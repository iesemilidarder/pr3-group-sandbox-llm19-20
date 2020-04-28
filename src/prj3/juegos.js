import React from "react";
import ReactDOM from "react-dom";

import Recomendados from "./components/Recomendados";
import Myfooter from "./components/Myfooter";
import MyHeader from "./components/MyHeader";
import Myslider from "./components/Myslider";

function App() {
    return (
        <div>
            <div>
                <MyHeader/>
                <div style={{background :"blue"}}>
                    <Myslider/>
                    <Recomendados/>
                    <Myfooter/>
                </div>

            </div>
        </div>

    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('main')
);