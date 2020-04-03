import React from "react";
import ReactDOM from "react-dom";
import StudentListLink from "./components/StudentListLink";
function IndexHeader() {
    return <div>
        <header className="row">
            <div className="col-sm-2">
                <img src="/images/logo.png" alt="Logo molon" width="50"/>
            </div>
            <nav className="col-sm-6 navbar navbar-expand-lg navbar-light bg-light">
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
            <div className="col-sm-2"><img src="/images/callus.jpg" alt="call us" width="40"/></div>
        </header>
        <main className="row">
            <article className="col-8">
                <div id="menu">
                    <h2>Student List</h2>
                    <StudentListLink/>
                </div>
            </article>
            <aside className="col-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate doloremque eius enim
                    error est
                    expedita explicabo harum in iure, iusto, labore magni maiores quaerat, reiciendis repudiandae
                    similique
                    tempora tenetur.</p>
            </aside>
        </main>
        <footer className="row">
            Un footer
        </footer>
    </div>
}
//TODO check: Aquí tenéis una forma chula de evitar el error mediante "bicondicional" (es un if)
const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<IndexHeader/>, wrapper) : false;