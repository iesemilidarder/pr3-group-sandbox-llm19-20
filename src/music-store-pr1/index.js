import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TopicsHeader from "./components/TopicsHeader";
import TopicsMain from "./components/TopicsMain";
import TopicsFooter from "./components/TopicsFooter";

function MyStudentsFirstReactApp() {
    return <div className="container content">
        <TopicsHeader/>
        <TopicsMain/>
        <TopicsFooter/>
    </div>
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<MyStudentsFirstReactApp/>, wrapper) : false;