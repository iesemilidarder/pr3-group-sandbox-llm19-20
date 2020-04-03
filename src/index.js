import React from "react";
import ReactDOM from "react-dom";
import StudentListLink from "./components/StudentListLink";
function MyStudentsFirstReactApp() {
    return <div>
        <header class="row">
            <div class="col-sm-2">
                <img src="/images/logo.png" alt="Logo molon" width="50"/>
            </div>
            <nav class="col-sm-6 navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">My web</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="col-sm-2">Contact 555-333210</div>
            <div class="col-sm-2"><img src="/images/callus.jpg" alt="call us" width="40"/></div>
        </header>
        <main class="row">
            <article class="col-8">
                <div id="menu">
                    <h2>Student List</h2>
                    <StudentListLink/>
                </div>
            </article>
            <aside class="col-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cupiditate doloremque eius enim
                    error est
                    expedita explicabo harum in iure, iusto, labore magni maiores quaerat, reiciendis repudiandae
                    similique
                    tempora tenetur.</p>
            </aside>
        </main>
        <footer class="row">
            Un footer
        </footer>
    </div>
}

//TODO check: Aquí tenéis una forma chula de evitar el error mediante "bicondicional" (es un if)
const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<MyStudentsFirstReactApp/>, wrapper) : false;
/*idem que wrapper no sea nulo. ES decir, que exista el ID.
if (wrapper){
    ReactDOM.render(<IndexHeader/>, wrapper)
}
*/