console.log("Daniel Castañedas");


function func1() {
    console.log("Funcion 1")

    //¿Para que sirve return?
    return func1;
}

const func2 = function () {
    console.log("Funcion 2");
};



const myRender = content => {
    console.log("arrow function");
    const template = `
        <article class="col-md">
            <h1>Adios mundo cruel :(</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur atque aut, autem dignissimos distinctio error ex facere fugiat id natus nemo nostrum quisquam quod repudiandae rerum sed velit voluptatibus?</p>
        </article>
        `;
    document.getElementById(content).innerHTML = template;
};

myRender("cont");
