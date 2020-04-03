import ReactDOM from "react-dom";
import React from "react";

function function1() {
    console.log("hola1")
}

const function2 = function () {
    console.log("hola2");
};

const myRender = (container, title ) => {
    console.log("arrow function");
    const playList = getPlayList();
    document.querySelector(container).innerHTML = `
        <article className="col-12">
            <h1>${title}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur atque aut, autem dignissimos distinctio error ex facere fugiat id natus nemo nostrum quisquam quod repudiandae rerum sed velit voluptatibus?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo qui, ullam? A accusantium, animi corporis est eum harum id ipsam maiores modi natus nobis numquam perferendis, reprehenderit, rerum voluptate voluptatibus!</p>
        </article>
    `;
};

const getPlayList = async () => {
    let data = await fetch("https://sandbox-mongo.herokuapp.com/api/rest/v1/playlists")
    let jsonData = data.json();
    jsonData.map(elem=>{
        titles.push(elem.title);
    });
    return titles;
    return "";
};
myRender("mainContainer", "Bienvenidos a mi mundo donde todo es un sueño!");
const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<IndexHeader/>, wrapper) : false;