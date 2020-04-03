/*
function fucntion1() {
console.log("Miguel Expósito")
}
const function2 = function () {
console.log("Miguel Expósito 2.0")
};

//new version: 4hooks
const myRender = (container) => {
    console.log("arrow function");
    const template = `
      <h1>Hola</h1>    
    `;
    document.getElementById(container).innerHTML = template;
};

myRender("myArticle");
*/


console.log("Miguel Expósito");

function creatingAside() {
    let asd = document.createElement("aside"),
        site = document.querySelector("#myAside");
    site.append(asd);
    asd.innerHTML = (`
            <div class="mb-5 ml-4">
                <h6>SUPER CLIENT RECVIEWS</h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi
                    ducimus eum, ex
                    officia quaerat quia ratione veritatis voluptatibus voluptatum! A
                    dignissimos impedit nam nemo
                    placeat praesentium quaerat totam voluptatem.
                </p>
            </div>
            <div class="ml-4">
                <h6>SUPER CLIENT RECVIEWS</h6>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi
                    ducimus eum, ex
                    officia quaerat quia ratione veritatis voluptatibus voluptatum! A
                    dignissimos impedit nam nemo
                    placeat praesentium quaerat totam voluptatem.
                </p>
            </div>
    `
    );
}

function creatingAside2() {
    const aside1 = `
        <aside>
            <h6>SUPER CLIENT RECVIEWS</h6>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi
                ducimus eum, ex
                officia quaerat quia ratione veritatis voluptatibus voluptatum! A
                dignissimos impedit nam nemo
                placeat praesentium quaerat totam voluptatem.
            </p>
        </aside>
 `;
    const aside2 = `
        <aside>
            <h6>SUPER CLIENT RECVIEWS</h6>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto commodi
                ducimus eum, ex
                officia quaerat quia ratione veritatis voluptatibus voluptatum! A
                dignissimos impedit nam nemo
                placeat praesentium quaerat totam voluptatem.
            </p>
        </aside>
`;
    document.querySelector("#myAside").innerHTML = aside1 + aside2
}

const myMusic = (container, title) => {
    console.log("arrow function");
    getPlayList().then(playLists=>{
        document.querySelector(container).innerHTML = `
            <h1>${title}</h1>
            `;
    });
    };


const getPlayList = async () =>{
    let data = await fetch("https://sandbox-mongo.herokuapp.com/api/rest/v1/playlists");
    let jsonData = await  data.json();
    let titles = [];
    jsonData.map(elem=>{

    });
    return titles;
    return "";
};


creatingAside2();
myMusic("#prueba", "Prueba1");