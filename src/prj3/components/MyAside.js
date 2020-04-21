import React from "react";

class MyAside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        fetch("data/userNames.json")
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
                            /*Agregar elementos del button Pendiente */
                        </button>
                    </div>
                })}
            </aside>
        );
    }
}

/*Agregar función asyn para que devuleva los elementos del userName.json*/

/*Resolver porque no me pilla el export MyAside*/

export default MyAside;














