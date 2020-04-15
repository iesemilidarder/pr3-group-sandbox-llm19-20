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

    render() {
        const projects = this.state.projects;
        return (
            <div className="col-9" >
                {projects.map(item => {
                    return <div key={item.id} className="mt-3 mb-4 justify-content-center">
                        <img src={item.image} alt="food" width="400" height="220" className="center-block"/>
                        <h2>{item.title}</h2>
                        <ol>
                            {item.ingredients.map(ing => {
                                return <li>{ing}</li>
                            })}
                        </ol>
                        <p>{item.description} </p>
                    </div>
                })}
            </div>
        );

    }
}

const renderMain = () =>{

};
export default MyMain