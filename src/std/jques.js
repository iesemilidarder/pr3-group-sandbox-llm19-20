import ReactDOM from "react-dom";
import React from "react";
/*

console.log("JoanQues");

function component() {
    let cont = document.getElementById("cont");
    let btn = document.createElement("button");
    btn.innerHTML = "Test";
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
    document.getElementById(container).innerHTML = template;
};
myRender("cont");

const mySidebar = (container) => {
    const template = `
          <h2>Js Aside</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem commodi dolorum ducimus eaque est fugit
                ipsum laboriosam porro voluptate! Aspernatur aut impedit labore laborum nobis quae recusandae reprehenderit,
                tempora.</p>
    `;
    document.querySelector(container).innerHTML = template;
};
mySidebar(".sidebar");
*/

const MyMain = () => {
    return <div>
        <header className="row">
            <div className="col-md-2">
                <img src="/images/logo.png" height="68" width="60" alt="logo"/></div>
            <nav className="col-md-6 navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">My web</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="col-sm-2">Contact 555-333210</div>
            <div className="col-sm-2"><img src="/images/callus.jpg" height="40" width="40" alt="callus"/></div>
        </header>
        <main className="row">
            <article className="col-10">
                <div className="row">
                    <div className="col-8">
                        <h2>Title</h2>
                        <section>
                            <h3>title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid asperiores
                                corporis dolor dolorem, dolorum ducimus expedita facilis libero molestiae nesciunt
                                officiis
                                perspiciatis quae repellendus, saepe totam vero. Delectus, ipsam!</p>
                        </section>
                        <section>
                            <h3>title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid asperiores
                                corporis dolor dolorem, dolorum ducimus expedita facilis libero molestiae nesciunt
                                officiis
                                perspiciatis quae repellendus, saepe totam vero. Delectus, ipsam!</p>
                        </section>
                        <section>
                            <h3>title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aliquid asperiores
                                corporis dolor dolorem, dolorum ducimus expedita facilis libero molestiae nesciunt
                                officiis
                                perspiciatis quae repellendus, saepe totam vero. Delectus, ipsam!</p>
                        </section>
                    </div>
                    <div className="col-4">
                        <aside>
                            <h3>title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa delectus fugiat
                                illo
                                illum ipsam iste, iure nam numquam officiis qui ullam unde velit. At dolor magni
                                praesentium sed
                                tempora.</p>
                        </aside>
                        <aside>
                            <h3>title</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci culpa delectus fugiat
                                illo
                                illum ipsam iste, iure nam numquam officiis qui ullam unde velit. At dolor magni
                                praesentium sed
                                tempora.</p>
                        </aside>
                    </div>
                </div>
            </article>
            <div className="col-2">
                <aside>
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias autem commodi dolorum ducimus
                        eaque est fugit
                        ipsum laboriosam porro voluptate! Aspernatur aut impedit labore laborum nobis quae recusandae
                        reprehenderit,
                        tempora.</p>
                </aside>
                <aside className="sidebar">&#160;</aside>
            </div>
        </main>
        <footer className="row">
            <nav className="col-md-6 navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">My web</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">&#160;</span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="col-sm-2">Contact 555-333210</div>
        </footer>
    </div>
};
const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<MyMain/>, wrapper) : false;