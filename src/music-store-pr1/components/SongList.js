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
            Currentsong: 0,
            playing: true,
            volume: 1.0,
            play: "Pause",
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
        this.state.list.push(title);
        this.state.player.push(file);
        //Es solo para que forzar el render y que haga el map de la Lista de Reproducción
        this.forceUpdate();
    };

    next() {
        if (this.state.Currentsong < this.state.player.length - 1 ) {
            this.setState((prevState) => {
                return {Currentsong: prevState.Currentsong + 1}
            })
        }
    };

    prev() {
        if (this.state.Currentsong > 0) {
            this.setState((prevState) => {
                return {Currentsong: prevState.Currentsong - 1}
            })
        }
    }

    listClick(number) {
        this.setState({Currentsong: number});
    }

    handlePlay() {
        if (this.state.playing === true) {
            this.setState({playing: false, play: "Play", playColor: "btn btn-success btn-lg"});
        } else {
            this.setState({playing: true, play: "Pause", playColor: "btn btn-warning btn-lg"});
        }
    }


    render() {
        let song = this.state.player;
        let number = this.state.Currentsong;
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
                                <button className="btn btn-secondary btn-lg" onClick={this.prev}>Previous</button>
                                <button className={this.state.playColor}
                                        onClick={this.handlePlay}>{this.state.play}</button>
                                <button className="btn btn-secondary btn-lg" onClick={this.next}>Next</button>
                            </label>
                        </div>
                        <div className="col-4">
                            <h2 className="text-center">{this.state.list[number]}</h2>
                        </div>
                        <div className="col-3">
                            <label className="d-flex justify-content-center"> Volume:
                                <span className='slider-container'>
                                  <input
                                      type='range'
                                      min='0'
                                      max='1'
                                      step='.05'
                                      value={this.state.volume}
                                      onChange={e => this.setState({volume: parseFloat(e.target.value)})}
                                      style={{verticalAlign: 'bottom'}}
                                  />
                                </span>
                                {this.state.volume.toFixed(2)}
                            </label>
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
