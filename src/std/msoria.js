import React from "react";
import ReactDOM from "react-dom";
console.log("Msoria");

function component() {
    let cont = document.getElementById("cont");
    let btn = document.createElement("button");
    btn.innerHTML = "Test";
    //   cont.appendChild(btn);
}
const f3 = function(container,title){
    //todo
}

const myRender = (container, title) => {
    console.log("arrow function");
    getPlaylist().then(playLists => {
        console.log(playLists);
        document.querySelector(container).innerHTML = `
<article className="col-12">
<h1>${title}</h1>
<p>Lorem ipsum dolor sit amet.</p>
</article>

`;
    });
};
/*
const mySidebar = (container) =>  {
    const template = `
          <h2>Java script</h2>
            <p>Lorem ipsum dolor sit amet.</p>
    `;
    document.querySelector(container).innerHTML=template;
};
mySidebar(".sidebar");

*/
const getPlaylist = async () => {
    let data = await fetch("https://sandbox-mongo.herokuapp.com/api/rest/v1/playlists");
    let jsonData = await data.json();
    let titles = [];
    jsonData.map(elem => {
        titles.push(elem.title);
    });
    return titles;
};

component();
myRender(".sidebar", "hola");


function Header(){
    return (
        <h1>Hola</h1>
    );
}

ReactDOM.render(<Header/>, document.getElementById("mainContainer"));
