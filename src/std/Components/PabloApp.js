import React from "react";
/*/import PabloProps from "../2avoid/pvillanueva";*/

const HeaderPvillanueva = () => {
    return(
        <div>
            <header className="row">
                <div className="col-md-2">
                    <img src="/images/logo.png" alt="Logo molon" width="50"/>
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
                <div className="col-sm-2"><img src="/images/callus.jpg" alt="call us" width="40"/></div>
            </header>
        </div>
        )
};

const MainPvillanueva = () => {
    return (
        <div>
            <main className="row">
                <div className="col-8">
                    <article id="react-MainContainer"/>
                    <article id="mainContainer"/>
                </div>
                <article className="col-md-10">
                    <div className="row">
                        <div className="col-md-8">
                            <section id="myArticle"/>
                            <section>
                                <h5>USE 1 FOR OUR PRODUCTS</h5>
                                <p>Description</p>
                            </section>
                            <section>
                                <h5>USE 2 FOR OUR PRODUCTS</h5>
                                <p>Description</p>
                            </section>
                            <section>
                                <h5>USE 3 FOR OUR PRODUCTS</h5>
                                <p>Description</p>
                            </section>
                        </div>
                        <div className="col-md-4">
                            <aside>
                                <h6>SUPER CLIENT REVIEWS</h6>
                                <p>Client recommendations about the product</p>
                            </aside>
                            <aside>
                                <h6>WHAT THE PRESS SAY</h6>
                                <p>Summary of independent journalist
                                    evaluation of the product (LINK)</p>
                            </aside>
                        </div>
                    </div>
                </article>
                <aside className="col-md-2">
                    <h6>ABOUT OUR INDUSTRY</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Ad aperiam cupiditate dolores earum eum impedit, iusto, labore
                        laboriosam molestias provident quas quidem quo unde!
                        Eveniet id possimus quae quod ullam!</p>
                    <aside className="sidebar"/>
                </aside>
            </main>
        </div>
        )

};

const FooterPvillanueva = () => {
    return (
        <div>
            <footer className="row">
            </footer>
        </div>
        )
};

const PabloApp = () => {
    return (
        <div>
            <HeaderPvillanueva/>
            <MainPvillanueva/>
            <FooterPvillanueva/>
            <PabloProps name={"Pape"} onClick={()=>{alert(1)}} info={[1,2,3]}/>
        </div>
        )
};

export default PabloApp;