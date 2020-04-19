import React from "react";
function Recomendados() {
    // VARIABLES QUE GUARDAN LOS CLICKS DEL BOTON
    let rpg = "";
    let mmo = "";
    let cars = "";
    let fight = "";
    let paramc = "";
    let k = "";
    let arrFinal = [];

// OBJETOS CON GENEROS(SE PUEDEN AÑADIR MAS), Y num="" PORQUE MAS ADELANTE LE METERE LOS CLICKS TOTALES,
// ¡¡¡¡¡NOTA: PARA CADA GENERO SE NECESITA SUS RESPECTIVAS IMAGENES y su funcion de sumar!!!!!!!.
    let gen = [
        {name: "rpg", num: "-1", id: "0"},
        {name: "mmo", num: "-1", id: "1"},
        {name: "cars", num: "-1", id: "2"},
        {name: "fight", num: "-1", id: "3"}
    ];
    let images = [{
        name: "rpg",
        img: [{id: "../img/destiny.png",name:"Destiny", plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"}, {id:"../img/pokemon.jpg", name:"Pokemon", plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"}, {id:"../img/inazuma.jpg", name:"Inazum" , plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"}, {id:"../img/radiant.jpg", name:"Radiant Historia" , plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"}]
    },
        {
            name: "mmo",
            img: [{id: "../img/black.jpg", name:"BlackDesert" , plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"}, {id:"../img/wow.jpg", name:"WOW" , plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"}, {id:"../img/tera.jpg", name:"Tera" , plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"}, {id:"../img/re.jpg", name:"Rebirth", plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"}]
        },
        {
            name: "cars",
            img: [{id: "../img/dirt.jpg",name:"Dirt Rally", plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"}, {id: "../img/cars.jpg", name:"Cars", plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"}, {id:"../img/f1.jpg", name:"F1", plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"}, {id:"../img/moto.jpg", name:"Moto GP19", plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"} ]
        },
        {
            name: "fight",
            img: [{id: "../img/kakarot.jpg", name:"Kakarot", plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"}, {id: "../img/tenkiachi3.jpg", name:"Tenkiachi3", plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"}, {id:"../img/sf.jpg", name:"StreetFighter", plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"}, {id:"../img/naruto.jpg", name:"Naruto", plataformas:"PS3,PS4,XBOX360, XBOX ONE", price:"19.99$"}]
        }
    ];

// FUNCIONES QUE SUMAN LOS CLICKS DE "ME GUSTA " A LAS VARIABLES DEL PRINCIPIO. SI AÑADIMOS MAS GENEROS HAY QUE CREAR OTRA FUNCION.
    function RPG() {rpg++;}
    function MMO() {mmo++;}
    function FIGHT() {fight++;}
    function CARS() {cars++;}
// METO EL VALOR DE PULSACIONES DEL BOTON EN LOS OBJETOS, BUSCO EL OBJETO CON num MAS GRANDE Y LO LINKEO CON EL id DEL OBJETO QUE A SU VEZ ES SU POSICION, PARA LUEGO USAR LA MISMA POSICION EN LAS IMAGENES.
    function recomend() {

        gen[0].num = rpg;
        gen[1].num = mmo;
        gen[2].num = cars;
        gen[3].num = fight;

        // BUSCA EL MAXIMO DE DENTRO DE gen
        let max = gen.reduce(function (prev, current) {
            return (prev.num > current.num) ? prev : current;
        });

        // EN CASO DE SIMPLEMENTE DARLE A RECOMENDADOS SIN HABER PULSADO NADA. Funciona mal RPG = Recomendados (funcionan igual)
        //HAY  QUE CAMBIAR LAS CONDICIONES
        if (  max.num <= 1 ) {

            let arr = [];

            //  TE GENERA NUMEROS ALEATORIOS NO REPETITIVOS Y LOS METE EN arrFinal.
            //  ¡¡¡¡NOTA: LOS aleatorio... CON math.random DEBEN SER ACTUALIUZADOS PARA USAR ESAS IMAGENES YA QUE ESTAN AHORA SOLO PARA 4 GENEROS CON MAX 5imagenes)
            // PD: AUMENTAR k < 10 SI QUEREMOS MAS IMAGENES, IGUAL EN EL for loop DE ABAJO.
            for (k = 0; k < 35; k++) {
                let aleatorioFila = Math.floor(Math.random() * 3); //MAXIMA FILA
                let aleatorioColumna = Math.floor(Math.random() * 3); //MAXIMA COLUMNA
                arr.push(aleatorioFila + " " + aleatorioColumna);

                arrFinal = arr.filter((item, index) => {
                    return arr.indexOf(item) === index;
                });
            }
            //USO LOS NUMEROS ANTERIORES METIDOS EN arrFinal Y CON la k (que indica la posicion del numero dentro de la array) COJO CADA UNO DE LOS NUMEROS Y LOS DIVIDO EN 2
            // CON EL METODO .substring (fila y columna) PARA LUEGO CREAR COGER LA IMAGEN.
            for (k = 0; k < 4; k++) {
                if (arrFinal[k].substring(2, 3) < Object.keys(images[arrFinal[k].substring(0, 1)].img).length) {
                    console.log(arrFinal);
                    console.log(arrFinal[k].substring(0, 1),arrFinal[k].substring(2, 3));
                    let fila = arrFinal[k].substring(0, 1);
                    let columna = arrFinal[k].substring(2, 3);
                    make(fila, columna);


                } else {
                    console.log("NO EXISTE ESTA IMAGEN");
                }
            }



        }

        else {

            for (let imagenFila = 0, imagenColumna = 0; imagenFila <= max.id; imagenFila++) {
                if (imagenFila == max.id) {
                    make(imagenFila, imagenColumna);
                    imagenColumna++;
                    for (paramc = 1; paramc < Object.keys(images[imagenFila].img).length; paramc++) {
                        make(imagenFila, paramc);
                        imagenColumna++;
                    }
                    break;
                }
            }


        }
    }
//Crea imagen y linkearla al HTML
    function make(i,j){

        let crearImagen = document.createElement("img");
        crearImagen.src = images[i].img[j].id;
        crearImagen.height = 250;
        crearImagen.width = 250;


        let name = document.createElement("p");
        name.innerHTML = "Juego: " + images[i].img[j].name;

        let plataformas = document.createElement("p");
        plataformas.innerHTML = "Plataformas: " + images[i].img[j].plataformas;

        let price = document.createElement("p");
        price.innerHTML = "Precio: " + images[i].img[j].price;



        let divGlobal = document.createElement("div");
        divGlobal.className = "col-md-6";
        divGlobal.style.marginTop = "30px";
        divGlobal.style.float = "left";

        let divImage = document.createElement("div");
        divImage.className ="col-md-7";
        divImage.style.float ="left";

        let aside = document.createElement("aside");
        aside.className = "col-md-5";
        aside.style.marginRight = "30px";
        aside.style.float = "left";
        aside.style.marginLeft ="15px";

        divImage.appendChild(crearImagen);
        aside.appendChild(name);
        aside.appendChild(plataformas);
        aside.appendChild(price);
        divGlobal.appendChild(divImage);
        divGlobal.appendChild(aside);

        document.getElementById("make").appendChild(divGlobal);
    }

    return (
        <div>
            <header>
                <div className="row">
                    <button onClick={RPG()}>RPG</button>
                    <button onClick={MMO}>MMO</button>
                    <button onClick={CARS}>CARS</button>
                    <button onClick={FIGHT}>FIGHT</button>
                    <button onClick={recomend}>RECOMENDACION</button>
                </div>
            </header>
            <main id="make"></main>

        </div>
    );
}


export default Recomendados;