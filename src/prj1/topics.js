import React from "react";
import ReactDOM from "react-dom";
import MyHeader from "./components/MyHeader";
import MyMain from "./components/MyMain";
import MyFooter from "./components/MyFooter";
//import MyAside from "./components/MyAside";
import 'babel-polyfill';


const MyAside = async () => {
    let data = await fetch("menu.json");
    let jsonData = await data.json();
    for (let item of jsonData) {
        console.log(item.title)
    }
    return<div>
        <img src={item.image} alt="food"/>
        <h6>{item.title}</h6>
    </div>
};

function MyApp() {
    return <div>
        <MyHeader/>
        <MyMain/>
        <MyFooter/>
    </div>
}
ReactDOM.render(
    <MyApp/>,
    document.getElementById('root')
);


