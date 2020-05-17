import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TopicsHeader from "./components/TopicsHeader";

function MyStudentsFirstReactApp() {
    return <div className="container content">
        <TopicsHeader/>
    </div>
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<MyStudentsFirstReactApp/>, wrapper) : false;