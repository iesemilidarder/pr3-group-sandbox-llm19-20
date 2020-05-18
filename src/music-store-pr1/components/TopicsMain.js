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


//he puesto esto de peliculas para poner algo mas dinámico y no solo ser de musica y ofrecer así a nuestros clientes un cambio por si están aburrido
    //si es una shit lo quito xD
    busquedaApi (){
        swal({
            title: 'Buscar peliculas si existen, por si quieres cambiar',
            text:  'Buscar una pelicula, p.e "La La Land".',
            content: "input",
            button: {
                text: "Buscar!",
                closeModal: false,
            },
        })
            .then(name => {
                if (!name) throw null;

                return fetch(`https://itunes.apple.com/search?term=${name}&entity=movie`);
            })
            .then(results => {
                return results.json();
            })
            .then(json => {
                const movie = json.results[0];

                if (!movie) {
                    return swal("Me sabe mal pero...", "Está pelicula no consta en nuestras memorias");
                }

                const name = movie.trackName;
                const imageURL = movie.artworkUrl100;

                swal({
                    title: "Aquí está tu tesoro:",
                    text: name,
                    icon: imageURL,
                });
            })
            .catch(err => {
                if (err) {
                    swal("Oh no!", "No existe ningún resultado!", "error");
                } else {
                    swal.stopLoading();
                    swal.close();
                }
            });
    }


    musicApi() {
        fetch(`https://github.com/soundcloud/java-api-wrapper/tree/master/src/examples/java/com/soundcloud/api/examples`)
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
                        <button onClick={this.musicApi} type="button" className="btn btn-outline-primary" data-toggle="button" aria-pressed="false" value="Click para ver mensaje">
                            Buscar
                        </button>
                    </div>
                    <div>
                        <button onClick={this.reiniciarBusqueda} type="button" className="btn btn-outline-secondary" data-toggle="button" aria-pressed="false" value="Click para ver mensaje">
                            Reiniciar
                        </button>
                    </div>
                    <div>
                        <button onClick={this.busquedaApi}type="button" className="btn btn-outline-primary" value="Peliculas">
                            Peliculas
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