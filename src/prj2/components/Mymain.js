import React from "react";

const Mymain = () => {
    return <div>
        <main>
            <div className="container">
                <div className="jumbotron my-3">
                    <h1 className="display-4">Bienvenidos a EmiliAirlines!</h1>
                    <p className="lead">Aquí encontrarás los mejores vuelos al mejor precio, en viajes Emili tenemos conocimiento de todos los vuelos nacionales e internacionales, viajes Emili mas preparados que la mili.</p>
                </div>
            </div>
            <div className="container shadow p-3 mb-5 bg-white rounded my-4">
                <form>
                    <div className="row">
                        <i className="fas fa-plane-departure ml-3" style="font-size: 20px;"></i>
                        <h3 className="mx-3">Vuelos.</h3>
                    </div>
                    <div className="row">
                        <div className="col">
                            <h5>Elija un origen.</h5>
                            <input type="text" className="form-control" placeholder="Origen"/>
                        </div>
                        <div className="col">
                            <h5>Elija un destino.</h5>
                            <input type="text" className="form-control" placeholder="Destino"/>
                        </div>
                        <div className="col">
                            <label htmlFor="start"><strong>Elija una fecha de ida.</strong></label>
                            <input type="date" id="start" name="trip-start"
                                   value="2020-04-24"
                                   min="2020-04-24" max="2022-12-31"/>
                        </div>
                        <div className="col">
                            <label htmlFor="start"><strong>Elija una fecha de vuelta.</strong></label>
                            <input type="date" id="end" name="trip-start"
                                   value="2020-04-24"
                                   min="2020-04-25" max="2022-12-31"/>
                        </div>
                        <div className="col">
                            <h5>Elija nº de adultos.</h5>
                            <input type="text" className="form-control" placeholder="Número de adultos"/>
                        </div>
                    </div>
                    <button type="button" className="btn btn-danger my-2">Buscar vuelo</button>
                </form>
            </div>
            <div className="container shadow p-3 mb-5 bg-white rounded">
                <div className="row my-4 mx-4">
                    <h3>Los mejores destinos según nuestros clientes.</h3>
                    <div className="media mt-3">
                        <img
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yer1-421bb5b8-9fc2-4d5a-b2d1-1e1f81b26b82.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmNGJkN2E2LWY3NjMtNDUxOC05YjgxLWJkZmQ0MGNlM2ZjOVwvZDI2eWVyMS00MjFiYjViOC05ZmMyLTRkNWEtYjJkMS0xZTFmODFiMjZiODIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.p5vfqGmq9kIylfG3glHGa20CAPUtoWlAxKEGpIvGOi8"
                            className="align-self-center mr-3" alt="img-destino3"/>
                            <div className="media-body">
                                <h5 className="mt-0">Top 1</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                    sollicitudin. Cras
                                    purus
                                    odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                                    nisi
                                    vulputate
                                    fringilla. Donec lacinia congue felis in faucibus.</p>
                                <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Cum sociis
                                    natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                    </div>
                    <button id="btnbook1" type="button" className="btn btn-danger btn-lg btn-toolbar my-2">Reserva ya!
                    </button>
                </div>
                <hr className="my-4"/>
                    <div className="row my-4 mx-4">
                        <div className="media">
                            <div className="media-body">
                                <h5 className="mt-0">Top 2</h5>
                                <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                    sollicitudin. Cras
                                    purus
                                    odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
                                    nisi
                                    vulputate
                                    fringilla. Donec lacinia congue felis in faucibus.</p>
                                <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                                    leo. Cum sociis
                                    natoque
                                    penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                            <img
                                src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f4bd7a6-f763-4518-9b81-bdfd40ce3fc9/d26yeuy-cc973d76-ed8b-4a5e-92a9-d32243570fbe.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmNGJkN2E2LWY3NjMtNDUxOC05YjgxLWJkZmQ0MGNlM2ZjOVwvZDI2eWV1eS1jYzk3M2Q3Ni1lZDhiLTRhNWUtOTJhOS1kMzIyNDM1NzBmYmUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.bYuPh7GUSN7RX36sFhhw1REZOzEOGzEKg5qeUGIhShA"
                                className="align-self-center mr-3" alt="img-destino3"/>
                        </div>
                        <button id="btnbook2" type="button" className="btn btn-danger btn-lg my-2 flo">Reserva ya!
                        </button>
                    </div>
                    <hr className="my-4"/>
                        <div className="row my-4 mx-4">
                            <div className="media">
                                <img src="https://www.hontour.com/images/upload/team/5428.png"
                                     className="align-self-center mr-3"
                                     alt="img-destino3"/>
                                    <div className="media-body">
                                        <h5 className="mt-0">Top 3</h5>
                                        <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                            sollicitudin. Cras
                                            purus
                                            odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
                                            nunc ac nisi
                                            vulputate
                                            fringilla. Donec lacinia congue felis in faucibus.</p>
                                        <p className="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis
                                            ornare vel eu leo. Cum sociis
                                            natoque
                                            penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                    </div>
                            </div>
                            <button id="btnbook3" type="button" className="btn btn-danger btn-lg my-2">Reserva ya!
                            </button>
                        </div>
            </div>
        </main>
    </div>
};

export default Mymain;