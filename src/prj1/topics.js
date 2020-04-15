import React from "react";
import ReactDOM from "react-dom";
import MyHeader from "./components/MyHeader";
import MyMain from "./components/MyMain";
import MyFooter from "./components/MyFooter";

function MyApp() {
    return <div>
        <MyHeader/>
        <MyMain/>
        <MyFooter/>
    </div>
}

ReactDOM.render(
    <MyApp/>,
    document.getElementById('root')
);