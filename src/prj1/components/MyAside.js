//Esto ya no sirve pa nah, ni lo mireis.

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
                this.setState({projects: data});
            });
    }

    render() {
        const projects = this.state.projects;
        return (
            <aside className="col-3">
                {projects.map(item => {
                    return <div key={item.id}>
                    <button className="mt-3 mb-4">
                        <h5>{item.title}</h5>
                        <img src={item.image} alt="food" width="200" height="140"/>
                    </button>
                    </div>
                })}
            </aside>
        );
    }
}
export default MyAside;


