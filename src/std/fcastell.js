import ReactDOM from "react-dom";
import React from "react";
import f_castell from "./components/f_castell";
console.log("Francesc Castell");

//
function function1() {
    console.log("hola1")
}

const function2 = function () {
    console.log("hola2");
};
// new version: arrow function 4 hooks
const myRender = (container, title) => {
    console.log("arrow function");
    getPlayList().then(playLists => {
        console.log(playLists);
        document.querySelector(container).innerHTML = `
        <article class="col-12">
            <h1>${title}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur atque aut, autem dignissimos distinctio error ex facere fugiat id natus nemo nostrum quisquam quod repudiandae rerum sed velit voluptatibus?</p>
            </article>
    `;
    });
};
const getPlayList = async () => {
    let data = await fetch("https://sandbox-mongo.herokuapp.com/api/rest/v1/playlists");
    let jsonData = await data.json();
    let titles = [];
    jsonData.map(elem => {
        titles.push(elem.title)
    });
    return titles;
    return "";
};


const mySidebar = (container) => {
    const template = `
                <p>Francesc Castell Portella Aside</p>
    `;
    document.querySelector(container).innerHTML = template;
};
myRender("mainContainer");
mySidebar(".sidebar");

ReactDOM.render(<header/>, document.getElementById("mainContainer"));
