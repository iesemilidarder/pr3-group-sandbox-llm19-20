import React from "react";
import ReactDOM from "react-dom";
//import ComponetProps from "./2avoid/ComponetProps";
//import Card from "./2avoid/Card";
//import Form from "./2avoid/Form";
//import SliderCutre from "./2avoid/SliderCutre";
//import LoginCutre from "./2avoid/LoginCutre";
const MyHeader = () => {
    const myImages =["https://picsum.photos/400/250","https://dummyimage.com/400x250/000/fff","https://www.quilt-ys.com/wp-content/uploads/2020/05/covidfree-400x250.jpg"];
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
        <div className="col-12">
            <SliderCutre images={myImages}/>
        </div>
    </div>
};
const MyMain = () => {
    return <div>
        <main className="row">
            <article className="col-10">
                <div className="row">
                    <div className="col-8">
                        <h2>Title</h2>
                        <ComponetProps name={"Joan"}/>
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
                        <section>
                            <Card title={"Hola"} description={"holaaaaa"}/>
                            <Form/>
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
    </div>
};
const MyFooter = () => {
    return <div>
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
const MyApp = () => {
    return <div>
        <LoginCutre>
            <MyHeader/>
            <MyMain/>
            <MyFooter/>
        </LoginCutre>
    </div>
};
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<MyApp/>, wrapper) : false;