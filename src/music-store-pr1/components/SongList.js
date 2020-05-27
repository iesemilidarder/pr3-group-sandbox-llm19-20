import React, {Component} from 'react'
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
            playing: false,
            volume: 1.0,
            CurrentBtn: "btn btn-light",

        };
        this.addList = this.addList.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.listClick = this.listClick.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
        this.handlePause = this.handlePause.bind(this);

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
        console.log(this.state.list);
        console.log(this.state.player);
        //Es solo para que forzar el render y que haga el map de la Lista de Reproducción
        this.forceUpdate();
    };

    next() {
        this.setState((prevState) => {
            return {Currentsong: prevState.Currentsong + 1}
        })

    };

    prev() {
        this.setState((prevState) => {
            return {Currentsong: prevState.Currentsong - 1}
        })
    }

    listClick(number) {
        this.setState({Currentsong: number});
    }

    handlePlay() {
        this.setState({
            playing: true
        })
    }

    handlePause() {
        this.setState({
            playing: false
        })
    };


    render() {
        let song = this.state.player;
        let number = this.state.Currentsong;
        return (
            <main className="row">
                <div className="col-10">
                    <div>
                        <ReactHowler autoPlay src={[song[number]]}
                                     playing={this.state.playing}
                                     volume={this.state.volume}
                        />
                    </div>
                    <div>
                        <div className='volume'>
                            <label>
                                Volume:
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
                        <button onClick={this.prev}>Previous</button>
                        <button onClick={this.handlePlay}>Play</button>
                        <button onClick={this.handlePause}>Pause</button>
                        <button onClick={this.next}>Next</button>
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
                        return <button key={i} onClick={() => this.listClick(i)} type="button" className={this.state.CurrentBtn}>{song}</button>
                    })}
                </aside>
            </main>
        );
    }
}

export default SongList;
