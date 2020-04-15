import React from "react";


class MyMain extends React.Component {

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

    showRecipe(id) {
        const projects = this.state.projects;
        projects.map(item => {
            if (id === item.id) {
                return document.getElementById("content").innerHTML =
                    `<div key=\"` + item.id + `\" className="mt-3 mb-4 justify-content-center">
                <img src=\"` + item.image + `\" alt="food" width="400" height="220" className="center-block"/>
                <h2>` + item.title + `</h2>
                <ol>
                    `
                    + item.ingredients.map(ing => {
                        return `<li> ` + ing + ` </li>`;
                    }).join('') + `
                </ol>
                <p>` + item.description + ` </p>
            </div>
    `
            }

        });
    }

    render() {
        return (
            <div className="row">
                <aside className="col-3">
                    {this.state.projects.map(item => {
                        return <div key={item.id}>
                            <button className="mt-3 mb-4" onClick={() => this.showRecipe(item.id)}>
                                <h5>{item.title}</h5>
                                <img src={item.image} alt="food" width="200" height="140"/>
                            </button>
                        </div>
                    })}
                </aside>
                <div id="content" className="col-9">
                </div>
            </div>
        );

    }
}

export default MyMain