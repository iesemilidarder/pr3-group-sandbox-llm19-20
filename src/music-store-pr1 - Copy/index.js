import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import CutriLogin from "./components/CutriLogin";

const Title = () => {
    return <h1>Este es un componente con hooks</h1>
}

class MyStudentsFirstReactApp extends React.Component {
    render() {
        const myClass = "container content";
        const number = 1;
        const bo = false;
        const aux = () => console.log("asd");
        return <div className={myClass}>
            <Title/>
            <CutriLogin>
                <main>Este spoty mola en pr1</main>
            </CutriLogin>
        </div>
    }
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<MyStudentsFirstReactApp/>, wrapper) : false;