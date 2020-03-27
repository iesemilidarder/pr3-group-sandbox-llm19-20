console.log("Francesc Castell");

//
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
            <h1>Hola mundo</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur atque aut, autem dignissimos distinctio error ex facere fugiat id natus nemo nostrum quisquam quod repudiandae rerum sed velit voluptatibus?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo qui, ullam? A accusantium, animi corporis est eum harum id ipsam maiores modi natus nobis numquam perferendis, reprehenderit, rerum voluptate voluptatibus!</p>
        </article>
    `;
};

myRender("mainContainer");


const mySidebar = (container) => {
    const template = `
        <h2>Js Aside</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, fugit!</p>
   `;
    document.querySelector(container).innerHTML = template;
};
mySidebar();