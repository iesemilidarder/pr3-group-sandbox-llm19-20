import React from "react";
import ReactDOM from "react-dom";
import Recomendados from "./components/Recomendados";


function App(){
    return (
        <div>
            <Recomendados/>
        </div>
    )
}

ReactDOM.render(
    <MyApp/>,
    document.getElementById('proyecto')
);