import ReactDOM from "react-dom";
import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            customers: [{id:1,name:"Yuhu"},{id:2,name:"yuhu2"}]
        };
    }
    render() {
        const date = this.state.date;
        const clients = this.state.customers;
        const formatDate = date.toLocaleTimeString();
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {formatDate}.</h2>
                <ul>
                    {clients.map(i=>{
                        return <li key={"Client"+i.id}>{i.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Clock/>, wrapper) : false;

