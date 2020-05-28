import React from 'react'
import ReactHowler from 'react-howler'

class SongList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            key: 1000,
            player: [],
            list: [],
            CurrentSong: 0,
            playing: true,
            volume: 1.0,
            play: "/topicsmusic/pause.png",
            playColor: "btn btn-warning btn-lg"
        };
        this.addList = this.addList.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.listClick = this.listClick.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
    }

    componentDidMount() {
        fetch("topicsmusic/songs.json")
            .then(data => data.json())
            .then(data => {
                this.setState({projects: data});
                console.log(data)
            });
    };

    addList(title, file) {
        if (file === this.state.player[this.state.player.length - 1]) {
            console.log("no")
        } else {
            this.state.list.push(title);
            this.state.player.push(file);
            //Es solo para que forzar el render y que haga el map de la Lista de Reproducción
            this.forceUpdate();
        }
    };

    next() {
        if (this.state.CurrentSong < this.state.player.length - 1) {
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

    render() {
        let song = this.state.player;
        let number = this.state.CurrentSong;
        return (
            <main className="row">
                <div className="col-10">
                    <div>
                        <ReactHowler src={[song[number]]}
                                     playing={this.state.playing}
                                     volume={this.state.volume}/>
                    </div>
                    <div className="row mb-4">
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
                        <div className="col-4">
                            <h2 className="text-center">{this.state.list[number]}</h2>
                        </div>
                        <div className="col-3 ">
                            <div className="row d-flex justify-content-center">
                                <h6>Volume</h6>
                                <h6 className="ml-3">{this.state.volume.toFixed(2)}</h6>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <input
                                    type='range'
                                    min='0'
                                    max='1'
                                    step='.05'
                                    value={this.state.volume}
                                    onChange={e => this.setState({volume: parseFloat(e.target.value)})}
                                    style={{verticalAlign: 'bottom'}}/>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        {this.state.projects.map(item => {
                            return <div className="col mb-4 pointer" key={this.state.key++}
                                        onClick={() => this.addList(item.title, item.file)}>
                                <h5>{item.title}</h5>
                                <img src={item.image} alt="coso"/>
                            </div>
                        })}
                    </div>
                </div>
                <aside className="col-2">
                    <h4>Lista de Reproducción</h4>
                    {this.state.list.map((song, i) => {
                        return <button key={i} onClick={() => this.listClick(i)} type="button"
                                       className="btn btn-light">{song}</button>
                    })}
                </aside>
            </main>
        );
    }
}

export default SongList;
