import React from "react";
import ReactDOM from "react-dom";
import PabloApp from "./Components/PabloApp";

const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<PabloApp/>, wrapper) : false;


/*
function function1() {
    console.log("Hi! Im Pablo");
}

const function2 = function () {
    console.log("Hi! Im Pablo");
};
//Arrow functions
const myRender = (container, title) => {
    console.log("arrow function");
    getPlaylist().then(results => {
        const txt = results.toString();
        const template = `
        <h1>${title}</h1>
        <p>${txt}</p>
    `;
        document.querySelector(container).innerHTML = template;
    });
};
const mySidebar = (container) => {
    const template = `
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        At dignissimos ea molestias. Ab ea error et eum eveniet illum 
        impedit minima natus neque nesciunt numquam obcaecati officiis optio quasi, quo.</p>
    `;
    document.querySelector(container).innerHTML = template;
};
const getPlaylist = async () => {
    //Esperando a que acabe
    let data = await fetch("https://sandbox-mongo.herokuapp.com/api/rest/v1/playlists");
    let jsonData = await data.json();
    let titles = [];
    jsonData.map(elem => {
        titles.push(elem.title);
    });
    return titles;
    /!*Sin esperar
    fetch("https://sandbox-mongo.herokuapp.com/api/rest/v1/playlists");
        .then(data => data.json())
        .then(data =>  {
            console.log(data);
        });
     *!/
    return "";
};
myRender("#myArticle", "Pruebas de clase");
mySidebar(".sidebar");

ReactDOM.render(<MasterHeader/>, document.getElementById("react-MainContainer"));*/
