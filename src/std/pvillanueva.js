function function1() {
    console.log("Hi! Im Pablo");
}
const function2 = function () {
    console.log("Hi! Im Pablo");
};

const myRender = (container) => {
    console.log("arrow function");
    const template = `
        <h1>Hola Mundo</h1>
    `;
    document.getElementById(container).innerHTML = template;
};
myRender("myArticle");