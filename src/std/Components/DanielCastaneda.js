import React from 'react';

class DanielCastaneda extends React.Component{
    render(){
        return
            <div>
                <header className="row">
                    <div className="col-md-2">
                        <img src="/logo.png" alt="Logo molon" width="50">
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
                    <div className="col-sm-2"><img src="/callus.jpg" alt="call us" width="40"></div>
                </header>
                <main className="row">
                    <article className="col-md-10">
                        <h1>Hello world</h1>
                        <section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, animi cum deleniti ea harum illum
                            laborum
                            libero maxime minus molestias, nam nobis officia praesentium ratione sequi soluta, tenetur unde
                            voluptatibus!
                        </section>
                    </article>
                    <div className="col-md-10" id="cont"/>
                    <aside className="col-md-2">
                        <h1>Esto es un right aside</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur at commodi cum, dignissimos
                            doloremque ea eius eveniet expedita illo inventore iste nam necessitatibus odio porro totam, ullam,
                            voluptates voluptatibus.</p>
                    </aside>
                </main>
            </div>
    }
}

export default DanielCastaneda;

