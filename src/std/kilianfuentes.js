function function1() {
    console.log("hola")
}
const function2 = function () {
    console.log("hola2");
}
//nueva forma de hacerlo, arrow function 4 hooks
const myRender = () => {
  console.log("arrow function");
  const template = `
    <h1>Si me ves, esto aun no a eplotado</h1>
    <p>No sonrrias aun, la cuenta atras esta en marcha uahahaha</p>
    <p>Soy un crio...</p>
  `;
    document.getElementById(container).innerHTML = template;
};
//inserta entre las comillas una id en un HTML para que genere en esa parte del HTML el contenido de la funcion a la que llamamos myRender , myRender es el nombre de esta, a cada una tu le pones el que quieras
myRender("");

//Funcion sincro (las convencionales) realiza toda la operacion y al terminar todos los procesos envia el resultado
//Funcion asincrona

function header () {
    return (<h1>Hola mundo</h1>
    );
}

ReactDOM.render(<header/>, document.getElementById("mainContainer"));