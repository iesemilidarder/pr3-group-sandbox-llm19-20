import React from "react";
import Player from "react-howler-player";

class SongList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        fetch("topicsmusic/songs.json")
            .then(data => data.json())
            .then(data => {
                this.setState({projects: data});
                console.log(data)
            })
    };
    render() {
        return (
            <div>
            <div className="row">
                {this.state.projects.map(item => {
                    return<div key={item.id} className="col mb-4" >
                        <h5>{item.title}</h5>
                        <img src={item.image} alt="coso"/>
                        <Player
                            src={[item.file]}
                            isDark={true}
                            // onTimeUpdate={timeUpdate}
                        />
                    </div>
                })}
            </div>

            </div>
        );
    }
}

export default SongList;