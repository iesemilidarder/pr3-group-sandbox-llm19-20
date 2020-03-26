console.log("Francesc Castell");
//
function function1() {
    console.log("hola")
}
const function2 = function () {
    console.log ("hola2");
};
// new version: arrow function
const myRender = (container) => {
    console.log("arrow function")
    const template =`
        <article class="col-12">
        <h1>Hola World</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, quos?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, tenetur.</p>
</article>
         `;
        document.getElementById(containter).innerHTML = template;
};
myRender( container: "mainContainer")