import React from "react";
import ReactDOM from "react-dom";

import Recomendados from "./components/Recomendados";
import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";
import MyForm from "./components/MyForm";
import Myfooter from "./components/Myfooter";
import Myslider from "./components/Myslider";

function App() {
    return (
        <div>

            <div className="row">
                <MyHeader/>
            </div>

            <div className="row">
               <div className="col-md-12">
                   <Myslider/>
               </div>
            </div>

            <div className="row" style={{marginTop: 20}}>
                <div style={{ float: "left"}}>
                    <Recomendados/>
                </div>
            </div>

            <Myfooter/>
        </div>

    )
}


ReactDOM.render(
    <App/>,
    document.getElementById('main')
);