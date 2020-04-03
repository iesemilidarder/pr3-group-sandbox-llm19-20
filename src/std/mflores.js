import React from "react";
import ReactDOM from "react-dom";
/*import "./mflores.css";*/

const MyFloresPage = () => {
    return <div className="col-md-12" style={{'backgroundColor':'lightblue'}}>
        <header className="row">
            <div className="col-md-2">
            </div>
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

        </header>
        <main className="row">
            <article className="col-md-10">
                <div className="row">
                    <div className="col-md-7">
                        <section style={{'backgroundColor':'orange'}}>
                            <h5>PRODUCT 1</h5>
                            <p>Best Car You Ever Find</p>
                        </section>
                        <section style={{'backgroundColor':'orange'}}>
                            <h5>PRODUCT 2</h5>
                            <p>Best Tools You Ever See</p>
                        </section>
                        <section style={{'backgroundColor':'orange'}}>
                            <h5>PRODUCT 3</h5>
                            <p>Best Fuel You Ever Buy</p>
                        </section>
                    </div>
                    <div className="col-md-5">
                        <aside style={{'backgroundColor':'yellow'}}>
                            <h4>SOMETHING HERE</h4>
                            <p>Hola</p>
                        </aside>
                        <aside style={{'backgroundColor':'yellow'}}>
                            <h5>something here</h5>
                            <p>Caracola</p>
                        </aside>
                    </div>
                </div>
            </article>
            <aside/>
        </main>
        <footer className="row">
            <p>
                Some Footer
            </p>
        </footer>
    </div>
};
const wrapper = document.getElementById("page");
wrapper ? ReactDOM.render(<MyFloresPage/>, wrapper) : false;