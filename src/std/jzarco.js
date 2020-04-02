console.log("Esto es un simple console log, no hay mas");
console.log("Esto es un simple console log2, no hay mas");
console.log("Esto es un simple console log3, no hay mas");

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
    <h3>Titulo</h3>
    <p>He intentado algo</p></p>
    </section>
    `;
    document.getElementById(container).innerHTML=template;
};
myRender("cont");

const mySidebar = () =>  {
    const template = `
          <h2>El conchudo del aside</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem commodi dolorum ducimus eaque est fugit
                ipsum laboriosam porro voluptate! Aspernatur aut impedit labore laborum nobis quae recusandae reprehenderit,
                tempora.</p>
    `;
    document.querySelector(".sidebar").innerHTML=template;

};
const getplaylist = async () => {
  let data = await fetch( "https://sandbox-mongo.herokuapp.com/api/rest/v1/playlists")
      let jsonData = data.json()
        .then(data=>{
            console.log(data)
        })
    return "";
}