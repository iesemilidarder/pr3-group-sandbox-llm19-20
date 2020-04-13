import React from "react";
import 'babel-polyfill';

const MyAside = async () => {
    let data = await fetch("./menu.json");
    let jsonData = await data.json();
    for (let item of jsonData) {
        console.log(item.title)
    }
    return<div>
        <img src={item.image} alt="food"/>
        <h6>{item.title}</h6>
    </div>
};

export default MyAside;
