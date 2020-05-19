import React from "react";

class Prueba extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            resultado: "",
        };
        this.handleBuscador = this.handleBuscador.bind(this);
    }
    // duda para usar shouldComponentUpdate (?)
    componentDidMount() {
        fetch("prj3/data/songs.json")
            .then(data => data.json())
            .then(data => {
                this.setState({data: data});
            });
    }
    // BUSCA LO QUE HAY EN DATA Y COMPRUEBA SI LO ESCRITO ES IGUAL QUE EL NOMBRE DE UNA CANCIÓN, PORBLEMA, RENDERIZA
    // CUANDO PULSO EL BOTON POR LO QUE SE VE EL DIV CON LA CANCION EN UNA MILESIMA DE SEGUNDO xD
    // Aqui LO DE song EN VEZ DE NOMBRES SERÁN url de YOUTUBE... Mirar song.json EN assets -> prj3 -> data
    handleBuscador(){
        let j = 1;
        for( j = 0  ; j <=  Object.keys(this.state.data).length ; j ++){
            if(document.getElementById("buscador").value === this.state.data[j].song){
                this.setState({resultado: this.state.data[j].song});
            }
        }
    }

    render() {
        return (
            <>
                <div id="0">DIV1</div>
                <div id="1">DIV2</div>
                <div id="2">DIV3</div>
                <div id="3">DIV4</div>
                <div>{this.state.resultado}</div>
                <form>
                    <input id="buscador" name="buscador"/>
                    <button onClick={this.handleBuscador}>Buscame!</button>
                    <div id="resultado"/>
                </form>
            </>
        );
    }
}

export default Prueba;