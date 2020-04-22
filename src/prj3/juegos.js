import React from "react";
import ReactDOM from "react-dom";

import Recomendados from "./components/Recomendados";
import MyNav from "./components/MyNav";
import Myfooter from "./components/Myfooter";
import Myslider from "./components/Myslider";

function App() {
    return (
        <div>
            <div style={{float: "left"}}>
                <Myslider/>
                <Recomendados/>
                <Myfooter/>
            </div>
        </div>

    )
}
function Nav() {
    return (
            <MyNav/>
    )
}
ReactDOM.render(
    <Nav/>,
    document.getElementById('mynav')
);
ReactDOM.render(
    <App/>,
    document.getElementById('main')
);