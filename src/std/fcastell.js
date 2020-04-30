import React from "react";
import ReactDOM from "react-dom";
//import "./fcastell.css";

const MyHeader = () => {
    return <div>
        <header className="row" style={{'backgroundColor': 'blue'}}>
            <div className="col-sm-2">
                <img src="assets/images/logo.png" alt="Logo" width="50"/>
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
            <div className="col-sm-2">Contact 555-333210</div>
            <div className="col-sm-2"><img src="assets/images/callus.jpg" alt="call us" width="40"/></div>
        </header>
    </div>
};

const MyMain = () => {
    return <div>
        <main className="row">
            <article className="col-9">
                <div className="row">
                    <div className="col-8">
                        <div id="title">
                            <h2> All About Our Products </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi eaque earum fuga iusto
                                magnam
                                molestiae quidem unde vel veritatis voluptatibus.</p>
                        </div>
                        <section>
                            <h2>Use 1 For Our Products</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias beatae esse illum
                                maiores neque,
                                nostrum officiis pariatur perspiciatis quam quasi.</p>
                        </section>
                        <section>
                            <h2>Use 2 For Our Products</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at cupiditate
                                enim
                                exercitationem illo illum mollitia, porro sunt vitae voluptates.</p>
                        </section>
                        <section>
                            <h2>Use 3 For Our Products</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab architecto
                                eius expedita fugiat
                                illo nulla quidem recusandae repudiandae vero.</p>
                        </section>
                    </div>
                    <div className="col-4">
                        <aside>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci blanditiis
                                earum magnam maxime
                                neque nostrum quo rem sequi vero vitae.</p>
                        </aside>
                        <aside className="sidebar">
                        </aside>
                    </div>
                </div>
            </article>
        </main>
    </div>
};

const MyFooter = () => {
    return <div>
        <footer className="row">
            <div className="col-md-6 navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">My web</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="footerbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-2">Contact 555-333210</div>
            <div className="col-sm-2"><img src="/assets/images/callus.jpg" alt="call us" width="40"/></div>
        </footer>
    </div>
};

function MyApp() {
    return <>
        <div className="container content">
            <MyHeader/>
            <MyMain/>
            <MyFooter/>
        </div>
    </>
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<MyApp/>, wrapper) : false;