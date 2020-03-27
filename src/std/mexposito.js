function fucntion1() {
console.log("Miguel Expósito")
}
const function2 = function () {
console.log("Miguel Expósito 2.0")
};

//new version: 4hooks
const myRender = (container) => {
    console.log("arrow function");
    const template = `
      <h1>Hola</h1>    
    `;
    document.getElementById(container).innerHTML = template;
};

myRender("myArticle");


/*
console.log("Miguel Expósito");

function ey() {
    let button = document.createElement("button"),
    site = document.querySelector("#ei");
    site.append(button)
}
*/