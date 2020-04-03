import React from "react";
import ReactDOM from "react-dom";

const MyPage = () => {
    return <div>
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
            <article/>
            <aside/>
        </main>
        <footer className="row">
        </footer>
    </div>
};
const wrapper = document.getElementById("page");
wrapper ? ReactDOM.render(<MyPage/>, wrapper) : false;

export default MyPage;