import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            customers: []
        };
    }

    componentDidMount() {
        fetch("data/cardExample.json")
            .then(data => data.json())
            .then(data => {
                this.setState({date: new Date(), customers: data});
            });
    }

    render() {
        const date = this.state.date;
        const clients = this.state.customers;
        const formatDate = date.getTime();
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {formatDate}.</h2>
                <ul>
                    {clients.map(i => {
                        return <li key={"client" + i.id}>{i.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const wrapper = document.getElementById("mainContainer");
wrapper ? ReactDOM.render(<Clock/>, wrapper) : false;