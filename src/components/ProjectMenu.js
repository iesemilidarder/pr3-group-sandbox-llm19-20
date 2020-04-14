import React from "react";

class ProjectMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        fetch("data/studentProjects.json")
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
                    return <li key={i.id}><a href={i.link}>{i.name}</a></li>
                })}
            </ul>
        );
    }
}
export default ProjectMenu;