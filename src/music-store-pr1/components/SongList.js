import React from "react";
import Player from "react-howler-player";
import "../../../assets/topicsmusic/cursor.css";

class SongList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            key: 1000,
            player: "/topicsmusic/songs/thrift shop.mp3"
        };
        this.play = this.play.bind(this);
    }

    componentDidMount() {
        fetch("topicsmusic/songs.json")
            .then(data => data.json())
            .then(data => {
                this.setState({projects: data});
                console.log(data)
            })
    };

    play(file) {
        this.setState({player: file});
    }

    render() {
        let song = this.state.player;
        return (
            <div>
                <div>
                    <Player src={[song]} isDark={true} palying={true}/>
                </div>
                <div className="row mt-3">
                    {this.state.projects.map(item => {
                        return <div className="col mb-4 pointer" key={this.state.key++} onClick={() => this.play(item.file)}>
                            <h5>{item.title}</h5>
                            <img src={item.image} alt="coso" />
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default SongList;