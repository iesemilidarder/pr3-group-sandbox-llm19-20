import React from "react";
import ReactDOM from "react-dom";
import "./mflores.css";
import {MfloresBody, MfloresFooter, MfloresHeader} from "./Components/MfloresMyPage";

const MyFloresPage = () => {
    return <div>
        <MfloresHeader/>
        <MfloresBody/>
        <MfloresFooter/>
    </div>
};

const wrapper = document.getElementById("page");
wrapper ? ReactDOM.render(<MyFloresPage/>, wrapper) : false;