import React from "react";
import ReactDOM from "react-dom";
import Myfooter from "./components/Myfooter";

const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<Myfooter/>, wrapper) : false;