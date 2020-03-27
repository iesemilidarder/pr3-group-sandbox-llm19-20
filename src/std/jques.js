console.log("JoanQues");

function component() {
    let cont = document.getElementById("cont");
    let btn= document.createElement("button");
    btn.innerHTML="Test";
    cont.appendChild(btn);
}
component();

const myRender = (container) => {
    const template = `
    <section>
    <h3>JS Power</h3>
    <p>Creado desde js</p></p>
    </section>
    `;
    document.getElementById(container).innerHTML=template;
};
myRender("cont");