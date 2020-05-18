import React from "react";

class SongList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        fetch("https://sandbox-mongo.herokuapp.com/api/rest/v1/songs")
            .then(data => data.json())
            .then(data => {
                this.setState({projects: data});
                console.log(data)
            })
    };
    render() {
        return (
            <div>
                {this.state.projects.map(item => {
                    return<div key={item.id}>
                        <h6>{item.title}</h6>
                    </div>
                })}
            </div>
        );
    }
}

export default SongList;