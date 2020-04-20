import React from "react";
import ReactDOM from "react-dom";
import MyFooter from "/src/prj3/components/MyFooter";
import Recomendados from "/src/prj3/components/Recomendados";
import MyHeader from "/src/prj3/components/MyHeader";
import MyNav from "/src/prj3/components/Mynav";
import "./juegos.css"

function App(){
    return(
        <div>
            <MyHeader><MyNav/><MyForm/></MyHeader>
            <Recomendados/>
            <Myfooter/>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('main')
);