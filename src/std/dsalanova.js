console.log("Soy Dani Salanova ");
/*

function create (){
        let boton = document.createElement("BUTTON");
    boton.innerHTML = "ME HAN CREADO";
    document.body.appendChild(boton).getElementById("btn").innerHTML;
}
//ASIDE1
const myRender = (container) => {
    console.log("arrow function");
    document.getElementById(container).innerHTML = `
        <aside class="col-12">
            <p>Make with JS</p>
        </aside>
    `;
};
myRender("aside1");

//ASIDE2

const myRend = (container, title) => {

    document.querySelector(container).innerHTML =
        `
        <div>
        <h5>${title}</h5>
            <p>He sido creado :)</p>
        </div>
           
        `;
    let lista = playList();
    console.log(lista)
};
myRend("#aside2", "Vaia vaia");
console.log(getPlayList());

const getPlayList = async () => {
    let data = await fetch("https://sandbox-mongo.herokuapp.com/api/rest/v1/playlists")
    let jsonData = await data.json();
    let titles = [];
    jsonData.map(elem=>{
        titles.push(elem.title);
    });
    return titles;


    /!**
const playList = () => {

    fetch("https://sandbox-mongo.herokuapp.com/api/rest/v1/playlists")
        .then(data => data.json())
        .then(data => {
            console.log("data");
        });
    return "";
};
TODO: Dani salanova: tienes codigo huerfano aqui
 **!/

};
*/

