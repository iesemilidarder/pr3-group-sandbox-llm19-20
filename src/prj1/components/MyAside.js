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
            <aside className="col-3">
                {projects.map(item => {
                    return <button className="mt-3 mb-4">
                        <h5>{item.title}</h5>
                        <img src={item.image} alt="food" width="200" height="140"/>
                    </button>
                })}
            </aside>
        );

    }
}


export default MyAside;
