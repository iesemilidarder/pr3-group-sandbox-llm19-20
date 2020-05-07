import React from "react";
import ReactDOM from "react-dom";
import MyHeader from "./Components/MyHeader";
import MyBody from "./Components/MyBody";
import MyFooter from "./Components/MyFooter";

function MyApp() {
    return <>
        <div className="container content">
            <MyHeader/>
            <MyBody/>
            <MyFooter/>
        </div>
    </>
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<MyApp/>, wrapper) : false;