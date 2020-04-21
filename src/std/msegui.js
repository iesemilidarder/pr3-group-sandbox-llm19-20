import React from "react";
import ReactDOM from "react-dom";

console.log("Hi! I'm Marta");

function function1() {
    console.log("hola1")
}

const function2 = function () {
    console.log("hola2");
};
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

/*
TODO: Marta no subas codigo que no funciona! 21/04/2020
const MyBody() {
    return <div>
        <header className="row">
            <div className="col-md-2">
                <img src="/logo.png" alt="Logo molon" width="50">
            </div>
            <nav className="col-md-6 navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">My web</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
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
            <div className="col-sm-2"><img src="/callus.jpg" alt="call us" width="40"></div>
        </header>
        <main className="row" id="mainContainer">
            <article className="col-8">
                <h3 style="width: 400px">ALL ABOUT OUR PRODUCTS</h3>
                <h4 style="width: 200px">Summary</h4>
                <div className="row" style="300px">
                    <section style="col-md-2">
                        <h5>USE 1 FOR OUR PRODUCTS</h5>
                        <p>Description</p>
                    </section>
                    <section style="col-md-2">
                        <h5>USE 2 FOR OUR PRODUCTS</h5>
                        <p>Description</p>
                    </section>
                    <section style="col-md-2">
                        <h5>USE 3 FOR OUR PRODUCTS</h5>
                        <p>Description</p>
                    </section>
                </div>
                <div className="row" style="border-left-width: 30px;margin-left: 400px;">
                    <aside className="sidebar"></aside>
                    <aside className="sidebar"></aside>
                </div>
            </article>
            <aside className="row" style="margin-left: 600px;">
                <h5>ABOUT OUR INDUSTRY</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur blanditiis id iusto non
                    perferendis provident quasi voluptatibus. Consectetur nemo perferendis quod reprehenderit saepe
                    tempora tempore voluptatibus voluptatum. Neque, quaerat.</p>
            </aside>
        </main>
        <footer className="row">
            <nav>
                <h5>JOBS</h5>
                <h5>CONTACT</h5>
                <h5>LEGAL</h5>
            </nav>
            <nav>
                <div>
                    <h5>FOLLOW US:</h5>
                </div>
            </nav>
            <h5>C@PYRIGHT</h5>
        </footer>
    </div>
}
const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<MyMain/>, wrapper) : false;*/
