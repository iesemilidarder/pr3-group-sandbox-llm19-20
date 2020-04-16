import React from "react";
import ReactDOM from "react-dom";


class MyMain extends React.Component {
    ingredients;

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
                let Recipe = <div key={item.id} className="mt-3 mb-4">
                    <img src={item.image} alt="food" width="840" height="540" className="mb-4"/>
                    <h2 className="mb-3">{item.title}</h2>
                    <ol>
                        {item.ingredients.map(ing => {
                            return <li>{ing}</li>
                        })}
                    </ol>
                    <p className="mt-4">{item.description}</p>
                </div>;
                ReactDOM.render(Recipe, document.getElementById("content"))
            }
        });
        window.scroll(0, 0);
    }

    render() {
        return (
            <div className="row bg-light">
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
                    <h1 className="mt-5">Clicka en la Receta que más te guste!!</h1>
                </div>
            </div>
        );

    }
}

export default MyMain

/*
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
 */