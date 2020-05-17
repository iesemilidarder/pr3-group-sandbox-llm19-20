import React from "react";
import MainAside from "./MainAside";

class TopicsMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "value"
        };
    }

    componentDidMount() {
    }

    //al buscar saldría esto.
    cositafina = (e) => {
        if (confirm("Este buscador no busca, es pirata c:")) {
            alert("¡Gracias por aceptar!");
        } else {
            alert("¡Gracias por cancelar!");
        }
        return false;
    };


    render() {
        return (
            <div>
                <div className="input-group row">
                    <div className="input-group-prepend">
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with radio button"
                           placeholder="Busca aquí tu música favorita...">

                    </input>
                    <div>
                        <button onClick={this.cositafina()} type="button" className="btn btn-primary"
                                data-toggle="button" aria-pressed="false" value="Click para ver mensaje">
                            Buscar
                        </button>
                    </div>
                </div>
                <div className="row">
                    <main className="col-9">
                        <h1>Aqui ira la música</h1>
                    </main>
                    <aside className="col-3">
                        <MainAside/>
                    </aside>

                </div>

            </div>


        );
    }
}

export default TopicsMain;