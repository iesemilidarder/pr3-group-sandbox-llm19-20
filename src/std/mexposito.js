import React from "react";
import ReactDOM from "react-dom";
/*
import FormRules from "./2avoid/FormRules"

class MiguelApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            customers: []
        };
    }

    componentDidMount() {
        fetch("data/cardExample.json")
            .then(data => data.json())
            .then(data => {
                this.setState({date: new Date(), customers: data});
            });
    }

    render() {
        const date = this.state.date;
        const clients = this.state.customers;
        const formatDate = date.getTime();
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {formatDate}.</h2>
                <FormRules/>
                <ul>
                    {clients.map(i => {
                        return <li key={"client" + i.id}>{i.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const wrapper = document.getElementById("main");
wrapper ? ReactDOM.render(<MiguelApp/>, wrapper) : false;

 */
/*

function CreateMyHeader() {
    return <header id="CreateMyHeader" className="row bg-primary">
        <div className="col-md-2">
            <img src="/images/logo.png" alt="Logo molon" width="50"/>
        </div>
        <nav className="col-md-6 navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">My web</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon">&#160;</span>
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
}

function CreateMyMain() {
    return <main id="MyMain" className="row mt-5">
        <article className="col-10">
            <div className="row">
                <div className="col-9">
                    <h1>ALL ABOUT OUR PRODUCTS</h1>
                    <h3>Summary</h3>

                    <section className="mt-5">
                        <div className="row">
                            <div className="col-6">
                                <h1>ALL ABOUT OUR PRODUCTS</h1>
                                <h3>Summary</h3>
                                <section>
                                    <h5>USE 1 FOR OUR PRODUCTOS</h5>
                                    <p>Description</p>
                                </section>
                                <section className="mt-5">
                                    <h5>USE 2 FOR OUR PRODUCTOS</h5>
                                    <p>Description</p>
                                </section>
                                <section className="mt-5">
                                    <h5>USE 3 FOR OUR PRODUCTOS</h5>
                                    <p>Description</p>
                                </section>
                            </div>
                            <div className="col-6 mt-5" id="myAside">
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
                                <aside className="mt-5">
                                    <h6>WHAT THE PRESS SAY</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium
                                        aliquid asperiores
                                        assumenda commodi consequuntur, dolore doloremque eius enim et in labore
                                        laborum nihil, omnis
                                        perferendis rem veritatis vitae voluptas?
                                    </p>
                                </aside>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </article>
        <div className="col-2 mt-5">
            <h5>ABOUT OUR INDUSTRY</h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores cumque dolor, doloremque
                dolores
                earum eos et illo in, ipsum iusto magnam, maiores minus numquam odit possimus quis voluptate voluptatum.
            </p>
        </div>
    </main>
}

function CreateMyFooter() {
    return <footer id="MyFooter" className="row bg-success">
        <div className="col-6 ">
            <nav className="navbar navbar-light">
                <a className="navbar-brand" href="#">JOBS</a>
                <a className="navbar-brand" href="#">CONTACT</a>
                <a className="navbar-brand" href="#">LEGAL</a>
            </nav>
        </div>
        <div className="col-6">
            <nav className="navbar navbar-light">
                <a className="navbar-brand" href="#">FOLLOW US:</a>
                <h6>COPYRIGHT</h6>
            </nav>
        </div>
    </footer>
}

function MiguelApp() {
    return <div>
        <CreateMyHeader/>
        <CreateMyMain/>
        <CreateMyFooter/>
    </div>
}


 */

/*
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
*/

