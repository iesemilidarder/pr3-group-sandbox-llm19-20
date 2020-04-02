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

const mySidebar = (container) =>  {
    const template = `
          <h2>Js Aside</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem commodi dolorum ducimus eaque est fugit
                ipsum laboriosam porro voluptate! Aspernatur aut impedit labore laborum nobis quae recusandae reprehenderit,
                tempora.</p>
    `;
    document.querySelector(container).innerHTML=template;
};
mySidebar(".sidebar");