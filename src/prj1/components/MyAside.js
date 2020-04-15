import React from "react";

class MyAside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        fetch("data/menu.json")
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({projects: data});
            });
    }

    render() {
        const projects = this.state.projects;
        return (
            <ul>
                {projects.map(i => {
                    return <div className="mt-3 mb-4">
                        <h5>{i.title}</h5>
                        <img src={i.image} alt="food" width="200" height="140"/>
                    </div>
                })}
            </ul>
        );
    }
}

export default MyAside;
