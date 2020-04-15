import React from "react";
import ReactDOM from "react-dom";
import MyHeader from "./components/MyHeader";
import MyMain from "./components/MyMain";
import MyFooter from "./components/MyFooter";
import MyAside from "./components/MyAside";

function MyApp() {
    return <div>
        <MyHeader/>
        <div className="row">
            <MyAside/>
            <MyMain/>
        </div>
        <MyFooter/>
    </div>
}

ReactDOM.render(
    <MyApp/>,
    document.getElementById('root')
);