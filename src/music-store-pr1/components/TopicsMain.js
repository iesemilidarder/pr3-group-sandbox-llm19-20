import React from "react";
import swal from "sweetalert";
import ReactHowler from "react-howler";

class TopicsMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            key: 1000,
            listFiles: [],
            listTitles: [],
            CurrentSong: 0,
            playing: true,
            volume: 1.0,
            play: "/topicsmusic/pause.png",
            playColor: "btn btn-warning btn-lg",
            searching: false,
            result: ""
        };
        this.addList = this.addList.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.listClick = this.listClick.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.searching = this.searching.bind(this);
        this.reiniciarBusqueda = this.reiniciarBusqueda.bind(this);
    }

    componentDidMount() {
        fetch("topicsmusic/songs.json")
            .then(data => data.json())
            .then(data => {
                this.setState({projects: data});
                console.log(this.state.projects)
            });
    }


    reiniciarBusqueda() {
        {
        }
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
                    this.setState({searching: false});
                    this.forceUpdate();
                    this.setState({result: ""})
                } else {
                    swal("Tu inventario de música se mantiene intacto... por ahora!", {
                        icon: "success",
                    });
                }
            });
    }


//he puesto esto de peliculas para poner algo mas dinámico y no solo ser de musica y ofrecer así a nuestros clientes un cambio por si están aburrido
    //si es una shit lo quito xD
    busquedaApi() {
        swal({
            title: 'Buscar peliculas si existen, por si quieres cambiar',
            text: 'Buscar una pelicula, p.e "La La Land".',
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


    addList(title, file) {
        if (file === this.state.listFiles[this.state.listFiles.length - 1]) {
            this.setState({CurrentSong: this.state.listFiles.length - 1});
        } else {
            this.state.listTitles.push(title);
            this.state.listFiles.push(file);
            //Es solo para que forzar el render y que haga el map de la Lista de Reproducción
            this.forceUpdate();
        }
    };

    next() {
        if (this.state.CurrentSong < this.state.listFiles.length - 1) {
            this.setState((prevState) => {
                return {CurrentSong: prevState.CurrentSong + 1}
            })
        }
    };

    prev() {
        if (this.state.CurrentSong > 0) {
            this.setState((prevState) => {
                return {CurrentSong: prevState.CurrentSong - 1}
            })
        }
    }

    listClick(number) {
        this.setState({CurrentSong: number});
    }

    handlePlay() {
        if (this.state.playing === true) {
            this.setState({playing: false, play: "/topicsmusic/play.png", playColor: "btn btn-success btn-lg"});
        } else {
            this.setState({playing: true, play: "/topicsmusic/pause.png", playColor: "btn btn-warning btn-lg"});
        }
    }

    searching() {
        this.setState({searching: true});
        let searchText = document.getElementById("search").value;
        let Result = "";
        console.log(searchText);
        this.state.projects.map(item => {
            if (searchText === item.title) {
                Result = <div className="col mb-4 pointer" key={this.state.key++}
                              onClick={() => this.addList(item.title, item.file)}>
                    <h5>{item.title}</h5>
                    <img src={item.image}  alt="coso" width="280" height="200"/>
                </div>;
                this.setState({result: Result})
            }
        });
        this.forceUpdate();
    }


    render() {
        let song = this.state.listFiles;
        let number = this.state.CurrentSong;
        return (
            <div>
                <div className="input-group row mb-4">
                    <div className="input-group-prepend">
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with radio button"
                           placeholder="Busca aquí tu música favorita..." id="search">

                    </input>
                    <div>
                        <button onClick={this.searching} type="button" className="btn btn-outline-primary"
                                data-toggle="button" aria-pressed="false" value="Click para ver mensaje">
                            Buscar
                        </button>
                    </div>
                    <div>
                        <button onClick={this.reiniciarBusqueda} type="button" className="btn btn-outline-secondary"
                                data-toggle="button" aria-pressed="false" value="Click para ver mensaje">
                            Reiniciar
                        </button>
                    </div>
                    <div>
                        <button onClick={this.busquedaApi} type="button" className="btn btn-outline-primary"
                                value="Peliculas">
                            Peliculas
                        </button>
                    </div>
                </div>
                <div className="row">
                    <main className="row">
                        <div className="col-10">
                            <div>
                                <ReactHowler src={[song[number]]}
                                             playing={this.state.playing}
                                             volume={this.state.volume}/>
                            </div>
                            <div className="row mb-5">
                                <div className='volume col-5'>
                                    <label className="d-flex justify-content-between">
                                        <button className="btn btn-primary btn-lg" onClick={this.prev}>
                                            <img src="/topicsmusic/prev.png" height="40" alt="play"/>
                                        </button>
                                        <button className={this.state.playColor} onClick={this.handlePlay}>
                                            <img src={this.state.play} height="40" alt="play"/>
                                        </button>
                                        <button className="btn btn-primary btn-lg" onClick={this.next}>
                                            <img src="/topicsmusic/next.png" height="40" alt="play"/>
                                        </button>
                                    </label>
                                </div>
                                <div className="col-5">
                                    <h3 className="text-center">{this.state.listTitles[number]}</h3>
                                </div>
                                <div className="col-2 ">
                                    <div className="d-flex justify-content-center">
                                        <h6>Volume</h6>
                                        <h6 className="ml-3">{this.state.volume.toFixed(2)}</h6>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <input type='range' min='0' max='1' step='.05' value={this.state.volume}
                                               onChange={e => this.setState({volume: parseFloat(e.target.value)})}
                                               style={{verticalAlign: 'bottom'}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                {this.state.projects.map(item => {
                                    if (this.state.searching === false) {
                                        return <div className="col mb-4 pointer" key={this.state.key++}
                                                    onClick={() => this.addList(item.title, item.file)}>
                                            <h5>{item.title}</h5>
                                            <img src={item.image}  alt="coso" width="280" height="200"/>
                                        </div>;
                                    }
                                })}
                                {this.state.result}
                            </div>
                        </div>
                        <aside className="col-2">
                            <h4>Lista de Reproducción</h4>
                            {this.state.listTitles.map((song, i) => {
                                return <button key={i} onClick={() => this.listClick(i)} type="button"
                                               className="btn btn-secondary col-12 mb-2">{song}</button>
                            })}
                        </aside>
                    </main>
                </div>
            </div>
        );
    }
}

export default TopicsMain;