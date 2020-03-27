console.log("Andrea Alonso");

function function1() {
    console.log("hola1")
}

const function2 = function () {
    console.log("hola2");
};
// new version: arrow function 4 hooks
const myRender = (container) => {
    console.log("arrow function");
    document.getElementById(container).innerHTML = `
        <article class="col-12">
            <h1>Hola mundo preprados para tomarse una Corona?</h1>
            <p>Insertar tomar unas cañitas modo on</p>
            <p>Sobrevivir al Coronavirus modo on</p>
        </article>
    `;
};

myRender("mainContainer");


