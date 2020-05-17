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

    // todo Quiero que sea el buscador el botón este pero sale al principio, si alguien sabe que me ayude porfi, está donde el otro todo.
    genero() {
//Ingresamos un mensaje a mostrar
        let genero = prompt("¿Cuál es tu género favorito?", "");
//Detectamos si el usuario ingreso un valor
        if (genero != null){
            alert("Tu genero  favorito es " + genero);
        }
//Detectamos si el usuario NO ingreso un valor
        else {
            alert("No me vaciles y pon algo");
        }
    }


    render() {
        return (
            <div>
                <div className="input-group row">
                    <div className="input-group-prepend">
                    </div>
                    <div>
                       todo  <button onClick={this.genero()} type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" value="Click para ver mensaje">
                            Buscar tu musica favorita clickando aquí
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