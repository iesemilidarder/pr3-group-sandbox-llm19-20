import React from "react";
import MainAside from "./MainAside";
import swal from "sweetalert";

class TopicsMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "value"
        };
    }

    componentDidMount() {
    }
    reiniciarBusqueda () {
        {}
        swal({
            title: "Estas seguro de reiniciar tus busquedas?",
            text: "Una vez reiniciadas no volverás a tener ninguna búsqueda anterior",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Tu inventario de música se reinició!", {
                        icon: "success",
                    });
                } else {
                    swal("Tu inventario de música se mantiene intacto... por ahora!", {
                        icon: "success",
                    });
                }
            });
}



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
                        <button onClick={this.genero} type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" value="Click para ver mensaje">
                            Buscar
                        </button>
                    </div>
                    <div>
                        <button type={this.reiniciarBusqueda()} type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" value="Click para ver mensaje">
                            Reiniciar
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