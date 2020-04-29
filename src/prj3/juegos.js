import React from "react";
import ReactDOM from "react-dom";

import Recomendados from "./components/Recomendados";
import Myfooter from "./components/Myfooter";
import MyHeader from "./components/MyHeader";
import Myslider from "./components/Myslider";
import MyAside from "./components/MyAside";


function App() {
    return (
        <div>
            <div>
                <MyHeader/>
                <div>
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

