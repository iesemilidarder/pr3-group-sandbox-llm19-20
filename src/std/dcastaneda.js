console.log("Daniel Castañedas");


function func1() {
    console.log("Funcion 1")

    //¿Para que sirve return?
    return func1;
}

const func2 = function () {
    console.log("Funcion 2");
};



const myRender = (content) => {
    console.log("arrow function");
    const template = `
        <article class="col-md">
            <h1>Adios mundo cruel :(</h1>
            <p>Esto saldrá bieen</p>
        </article>
        `;
    document.querySelector(content).innerHTML = template;
};

myRender("#cont");
