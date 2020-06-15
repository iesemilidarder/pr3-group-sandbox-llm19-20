import React from "react";

class Buscador extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buscador:[],
            buscadorBackup:[],
            textBuscar:""
        }
    }

    componentDidMount(){
        fetch("prj3/data/songs.json")
            .then(data => data.json())
            .then(data => {
                this.setState({data: data});
            });

        this.setState({
            buscador:response.date,
            buscadorBackup:response.data
        })


    }

    filter(event){

        console.log(text.target.value);

        // obtener datos de buscar
        let text = event.target.value;
        // obtener datos de array
        const data = this.state.buscadorBackup;

        const newData = data.filter(function(item){
            // variable de song
            const itemDataSong = item.song.toUpperCase();
            // variable de url
            const itemDataUrl = item.url.toUpperCase();
            // juntarlos de song y url
            const itemData = itemDataSong+" "+itemDataUrl
            // variable de buscar
            const textData = text.toUpperCase();
            // filtrar si es verdadero o no
            return itemData.indexOf(textData) > -1
        });

        this.setState({
            buscador: newData,
            textBuscar: text,
        })
    }

    render(){
        return(
            <div className="container">
                <input className="form-control col-md-4" placeholder="Buscar..." value={this.state.text}
                       onChange={(text) => this.filter(text)}/>
            </div>
        )
    }
}

export default Buscador;

