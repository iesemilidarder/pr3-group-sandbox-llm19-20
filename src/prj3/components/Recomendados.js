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
        {name: "rpg", num: "0", id: "0"},
        {name: "mmo", num: "0", id: "1"},
        {name: "cars", num: "0", id: "2"},
        {name: "fight", num: "0", id: "3"}
    ];
    let images = [{
        name: "rpg",
        img: [{
            id: "/prj3/img/destiny.png",
            name: "Destiny",
            plataformas: "PS3",
            price: "19.99$",
            gen: "MMORPG"
        }, {
            id: "/prj3/img/pokemon.jpg",
            name: "Pokemon",
            plataformas: "Switch",
            price: "19.99$",
            gen: "RPG"
        }, {
            id: "/prj3/img/inazuma.jpg",
            name: "Inazum",
            plataformas: "3ds",
            price: "19.99$",
            gen: "RPG"
        }, {
            id: "/prj3/img/radiant.jpg",
            name: "Radiant Historia",
            plataformas: "DS,3DS",
            price: "19.99$",
            gen: "RPG"
        }]
    },
        {
            name: "mmo",
            img: [{
                id: "/prj3/img/black.jpg",
                name: "BlackDesert",
                plataformas: "PC,PS4",
                price: "19.99$",
                gen: "MMO"
            }, {
                id: "/prj3/img/wow.jpg",
                name: "WOW",
                plataformas: "PC",
                price: "19.99$",
                gen: "MMO"
            }, {
                id: "/prj3/img/tera.jpg",
                name: "Tera",
                plataformas: "PC",
                price: "19.99$",
                gen: "MMO"
            }, {id: "/prj3/img/re.jpg", name: "Rebirth", plataformas: "PS4", price: "19.99$",  gen: "MMO"}]
        },
        {
            name: "cars",
            img: [{
                id: "/prj3/img/dirt.jpg",
                name: "Dirt Rally",
                plataformas: "PS4,PC",
                price: "19.99$",
                gen: "Conducción",
            }, {
                id: "/prj3/img/cars.jpg",
                name: "Cars",
                plataformas: "PS2",
                price: "19.99$",
                gen: "Conducción"
            }, {
                id: "/prj3/img/f1.jpg",
                name: "F1",
                plataformas: "PC,PS4",
                price: "19.99$",
                gen: "Conducción"
            }, {id: "/prj3/img/moto.jpg", name: "Moto GP19", plataformas: "PS3,PS4", price: "19.99$", gen: "Conducción"}]
        },
        {
            name: "fight",
            img: [{
                id: "/prj3/img/kakarot.jpg",
                name: "Kakarot",
                plataformas: "PS4,PC",
                price: "19.99$",
                gen: "Lucha"
            }, {
                id: "/prj3/img/tenkiachi3.jpg",
                name: "Tenkiachi3",
                plataformas: "PS2,WII",
                price: "19.99$",
                gen: "Lucha"
            }, {
                id: "/prj3/img/sf.jpg",
                name: "StreetFighter",
                plataformas: ",PC",
                price: "19.99$",
                gen: "Lucha"
            }, {id: "/prj3/img/naruto.jpg", name: "Naruto", plataformas: "XBOXONE", price: "19.99$", gen: "Lucha"}]
        }
    ];

// FUNCIONES QUE SUMAN LOS CLICKS DE "ME GUSTA " A LAS VARIABLES DEL PRINCIPIO. SI AÑADIMOS MAS GENEROS HAY QUE CREAR OTRA FUNCION.
    function RPG() {
        rpg++;
    }

    function MMO() {
        mmo++;
    }

    function FIGHT() {
        fight++;
    }

    function CARS() {
        cars++;
    }

// METO EL VALOR DE PULSACIONES DEL BOTON EN LOS OBJETOS, BUSCO EL OBJETO CON num MAS GRANDE Y LO LINKEO CON EL id DEL OBJETO QUE A SU VEZ ES SU POSICION, PARA LUEGO USAR LA MISMA POSICION EN LAS IMAGENES.
    function recomend() {

        //VUELVE INVISIBLE LOS DIV DE JUEGOS viejos Y nuevos Y VISIBLE EL DE IMAGENES
        document.getElementById("make").style.display = "block";
        document.getElementById("make").innerHTML = "";

        gen[0].num = rpg;
        gen[1].num = mmo;
        gen[2].num = cars;
        gen[3].num = fight;

        // BUSCA EL MAXIMO DE DENTRO DE gen
        let max = gen.reduce(function (prev, current) {
            return (prev.num > current.num) ? prev : current;
        });

        // EN CASO DE SIMPLEMENTE DARLE A RECOMENDADOS SIN HABER PULSADO NADA. Funciona mal RPG = Recomendados (funcionan igual, mismo resultado)
        if (max.num <= 1) {

            let arr = [];

            //  TE GENERA NUMEROS ALEATORIOS NO REPETITIVOS Y LOS METE EN arrFinal.
            //  ¡¡¡¡NOTA: LOS aleatorio... CON math.random DEBEN SER ACTUALIUZADOS PARA USAR ESAS IMAGENES YA QUE ESTAN AHORA SOLO PARA 4 GENEROS CON MAX 4 imagenes)
            // PD: AUMENTAR k < 35 PARA MAYOR NUMERO DE COMBINACIONES QUE PERMITIRAN MÁS IMAGENES ABAJO, IGUAL EN EL for loop DE ABAJO.
            for (k = 0; k < 35; k++) {
                let aleatorioFila = Math.floor(Math.random() * 4) ; //MAXIMA FILA, AL PARECER AQUI EL PRIMERO NO ES 0, ES 1 !!!!
                let aleatorioColumna = Math.floor(Math.random() * 4); //MAXIMA COLUMNA, AL PARECER AQUI EL PRIMERO DEL ARRAY ES 1!!!
                arr.push(aleatorioFila + " " + aleatorioColumna);

                arrFinal = arr.filter((item, index) => {
                    return arr.indexOf(item) === index;
                });
            }
            //USO LOS NUMEROS ANTERIORES METIDOS EN arrFinal Y CON la k (que indica la posicion del numero dentro de la array) COJO CADA UNO DE LOS NUMEROS Y LOS DIVIDO EN 2
            // CON EL METODO .substring (fila y columna) PARA LUEGO CREAR COGER LA IMAGEN.
            // PD: NUNCA PONER ESTA k < X CON EL MISMO VALOR X QUE EL DE ARRIBA YA QUE SU arrFinal VARIA EN CUANTO A VALORES(POR SI ACASO PONER k MAS BAJO AQUÍ)
            for (k = 0; k < 4; k++) {
                if (arrFinal[k].substring(2, 3) < Object.keys(images[arrFinal[k].substring(0, 1)].img).length) {
                    console.log(arrFinal);
                    console.log(arrFinal[k].substring(0, 1), arrFinal[k].substring(2, 3));
                    let fila = arrFinal[k].substring(0, 1);
                    let columna = arrFinal[k].substring(2, 3);
                    make(fila, columna);


                } else {
                    console.log("NO EXISTE ESTA IMAGEN");
                }
            }


        } else
            // EN CASO DE DARLE ME GUSTA MAS DE 1 VEZ A ALGUN JUEGO DEL MISMO GENERO NOS RECOMENDARÁ JUEGOS DE DICHO GÉNERO
        {
            // TODO : CAMBIAR === Y TIPO-VALOR
            for (let imagenFila = 0, imagenColumna = 0; imagenFila <= max.id; imagenFila++) {
                if (imagenFila == max.id) {
                    make(imagenFila, imagenColumna);
                    imagenColumna++;
                    for (paramc = 1; paramc < Object.keys(images[imagenFila].img).length; paramc++) {
                        make(imagenFila, paramc);
                    }
                    break;
                }
            }


        }
    }


//Crea imagen y linkearla al HTML
    function make(i, j) {

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

        let genero = document.createElement("p");
        genero.innerHTML = "Género: " + images[i].img[j].gen;



        let divGlobal = document.createElement("div");
        divGlobal.className = "col-md-6";
        divGlobal.style.marginTop = "30px";
        divGlobal.style.float = "left";

        let divImage = document.createElement("div");
        divImage.className = "col-md-1";
        divImage.style.float = "left";

        let aside = document.createElement("aside");
        aside.className = "col-md-11";
        aside.style.marginRight = "30px";
        aside.style.float = "left";
        aside.style.marginLeft = "15px";

        divImage.appendChild(crearImagen);
        aside.appendChild(name);
        aside.appendChild(plataformas);
        aside.appendChild(price);
        aside.appendChild(genero);
        divGlobal.appendChild(divImage);
        divGlobal.appendChild(aside);

        document.getElementById("make").appendChild(divGlobal);
    }
    // NO SE ME OCURRIA NADA MAS PARA HACER DESAPARECER LAS IMAGENES DEL PRINCIPIO
    //none = desaparece   block = aparecer     EL innerHTML= " " ES PARA ELIMINAR EL CONTENIDO EN MAKE YA QUE SE QUEDA AH
    function viejo (){
        document.getElementById("nuevo").style.display = "none";
        document.getElementById("make").style.display = "none";
        document.getElementById("viejo").style.display = "block";
        document.getElementById("make").innerHTML = "";
    }

    function nuevo(){
        document.getElementById("viejo").style.display = "none";
        document.getElementById("make").style.display = "none";
        document.getElementById("nuevo").style.display = "block";
        document.getElementById("make").innerHTML = "";
    }


    return (
        <div>
            <header >
                <div  style={{ marginLeft: 45 }}>
                    <div className={"col-md-6"} style={{float: "left"}}>
                        <button onClick={nuevo}>Nuevos</button>
                        <button onClick={viejo}>Viejos </button>
                    </div>

                    <div className={"col-md-6"} style={{float: "left"}}>
                        <button onClick={recomend}>Recomendación</button>
                    </div>
                </div>

                <div className="col-md-6" style={{float: "left"}}>
                    <div id="nuevo" style={{ display: "none"}}>

                        <div className={"col-md-6"} style={{marginTop: 30, float: "left"}}>
                            <div className={"col-md-1"} style={{float: "left"}}>
                                <img src="/prj3/img/forza.jpg" alt="" height="250" width="250"/>
                            </div>
                            <aside className={"col-md-11"} style={{marginRight: 40, marginLeft: 20, float: "left"}}>
                                <p>Forza</p>
                                <p>Plataformas: XBOX ONE, PC </p>
                                <button onClick={CARS}>Me gusta</button>
                            </aside>
                        </div>

                        <div className={"col-md-6"} style={{marginTop: 30, float: "left"}}>
                            <div className={"col-md-1"} style={{float: "left"}}>
                                <img src="/prj3/img/destiny2.jpg" alt="" height="250" width="250"/>
                            </div>
                            <aside className={"col-md-11"} style={{marginRight: 40, marginLeft: 20, float: "left"}}>
                                <p>Destiny 2</p>
                                <p>Plataformas: PS4, XBOX ONE,PC</p>
                                <button onClick={MMO}>Me gusta</button>
                            </aside>
                        </div>

                        <div className={"col-md-6"} style={{marginTop: 30, float: "left"}}>
                            <div className={"col-md-1"} style={{float: "left"}}>
                                <img src="/prj3/img/project.jpg" alt="" height="250" width="250"/>
                            </div>
                            <aside className={"col-md-11"} style={{marginRight: 40, marginLeft: 20, float: "left"}}>
                                <p>Project Cars 3</p>
                                <p>Plataformas: PS4, XBOX ONE, PC</p>
                                <button onClick={CARS}>Me gusta</button>
                            </aside>
                        </div>

                        <div className={"col-md-6"} style={{marginTop: 30, float: "left"}}>
                            <div className={"col-md-1"} style={{float: "left"}}>
                                <img src="/prj3/img/mk11.jpg" alt="" height="250" width="250"/>
                            </div>
                            <aside className={"col-md-11"} style={{marginRight: 40, marginLeft: 20, float: "left"}}>
                                <p>Mortal Kombat 11</p>
                                <p>PLATAFORMAS: PS4, XBOX ONE, PC</p>
                                <button onClick={FIGHT}>Me gusta</button>
                            </aside>
                        </div>

                    </div>

                    <div id="viejo" style={{ display: "none"}}>

                        <div className={"col-md-6"} style={{marginTop: 30, float: "left"}}>
                            <div className={"col-md-1"} style={{float: "left"}}>
                                <img src="/prj3/img/need.jpg" alt="" height="250" width="250"/>
                            </div>
                            <aside className={"col-md-11"} style={{marginRight: 40, marginLeft: 20, float: "left"}}>
                                <p>Undercover</p>
                                <p>Plataformas: PS3</p>
                                <button onClick={CARS}>Me gusta</button>
                            </aside>
                        </div>


                        <div className={"col-md-6"} style={{marginTop: 30, float: "left"}}>
                            <div className={"col-md-1"} style={{float: "left"}}>
                                <img src="/prj3/img/tenkiachi3.jpg" alt="" height="250" width="250"/>
                            </div>
                            <aside className={"col-md-11"} style={{marginRight: 40, marginLeft: 20, float: "left"}}>
                                <p>DB TB3</p>
                                <p>PLATAFORMAS: PS2, WII </p>
                                <button onClick={FIGHT}>Me gusta</button>
                            </aside>
                        </div>

                        <div className={"col-md-6"} style={{marginTop: 30, float: "left"}}>
                            <div className={"col-md-1"} style={{float: "left"}}>
                                <img src="/prj3/img/jstars.jpg" alt="" height="250" width="250"/>
                            </div>
                            <aside className={"col-md-11"} style={{marginRight: 40, marginLeft: 20, float: "left"}}>
                                <p>JSTARS</p>
                                <p>PLATAFORMAS: DS</p>
                                <button onClick={FIGHT}>Me gusta</button>
                            </aside>
                        </div>

                        <div className={"col-md-6"} style={{marginTop: 30, float: "left"}}>
                            <div className={"col-md-1"} style={{float: "left"}}>
                                <img src="/prj3/img/planet.jpg" alt="" height="250" width="250"/>
                            </div>
                            <aside className={"col-md-11"} style={{marginRight: 40, marginLeft: 20, float: "left"}}>
                                <p>Planetside 2</p>
                                <p>PLATAFORMAS: PS4, PC</p>
                                <button onClick={MMO}>Me gusta</button>
                            </aside>
                        </div>

                    </div>

                </div>

                <aside className="col-md-6" style={{float: "right"}} >


                    <div id="make">

                    </div>

                </aside>
            </header>



        </div>
    );
}


export default Recomendados;