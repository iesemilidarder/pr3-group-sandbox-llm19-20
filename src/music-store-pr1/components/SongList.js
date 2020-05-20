import React from "react";
import Player from "react-howler-player";
import "../cursor.css";

class SongList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            key: 1000,
            player: ""
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
        this.setState((prevState, props) => {
            return {
                player: file
            };
        })
    };

    render() {
        let song = this.state.player;
        return (
            <div>
                <div>
                    <Player src={[song]} isDark={true}/>
                </div>
                <div className="row">
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