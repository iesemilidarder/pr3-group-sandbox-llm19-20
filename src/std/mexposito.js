import React from "react";
import ReactDOM from "react-dom";
//import CutriLogin from "./2avoid/CutriLogin";

class MyStudentsFirstReactApp extends React.Component {
    render(){
        return <div className="container content">
        <CutriLogin>
            <main>Este spoty mola</main>
        </CutriLogin>
    </div>
    }
}

const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<MyStudentsFirstReactApp/>, wrapper) : false;