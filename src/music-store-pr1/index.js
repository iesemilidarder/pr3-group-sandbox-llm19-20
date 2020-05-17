import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function MyStudentsFirstReactApp() {
    return <div className="container content">
        Hey
    </div>
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<MyStudentsFirstReactApp/>, wrapper) : false;