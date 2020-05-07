import React from "react";

class Clicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        const counter = this.state.counter;
        this.setState({counter: counter + 1});
    }

    render() {
        return (
            <div>
                <span>Haz clickado {this.state.counter} veces.</span>
                <button onClick={(e)=>{this.handleAdd();}}>
                    Suma
                </button>
            </div>
        );
    }
}

export default Clicker;