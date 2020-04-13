import React from "react";
import ReactDOM from "react-dom";
import MyHeader from "./components/MyHeader";
import MyMain from "./components/MyMain";
import MyFooter from "../components/MyFooter";

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

const getRecipes = async () => {
    let data = await fetch("menu.json");
    let jsonData = await data.json();
    for (let item of jsonData) {
        console.log(item.title)
    }
    return titles;
};
