import React from "react";
import ReactDOM from "react-dom";

class MartaApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.handleAdd=this.handleAdd.bind(this);
    }

    handleAdd(e) {
        const counter = this.state.counter;
        this.setState({counter: counter + 1});
    }

    render() {
        return <>
            <div className="container content">
                has clickado {this.state.counter} veces
            </div>
            <div><button onClick={this.handleAdd}>suma</button></div>
        </>
    }

}


const wrapper = document.getElementById("mainContainer");
wrapper ? ReactDOM.render(<MartaApp/>, wrapper) : false;
/*

function function1() {
    console.log("hola1")
}

const function2 = function () {
    console.log("hola2");
};
const myRender = (container) => {
    console.log("arrow function");
    document.getElementById(container).innerHTML = `
        <article class="col-12">
            <h1>Hola mundo</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur atque aut, autem dignissimos distinctio error ex facere fugiat id natus nemo nostrum quisquam quod repudiandae rerum sed velit voluptatibus?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo qui, ullam? A accusantium, animi corporis est eum harum id ipsam maiores modi natus nobis numquam perferendis, reprehenderit, rerum voluptate voluptatibus!</p>
        </article>
        
    `;
};
myRender("mainContainer");
*/


/*
class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            date : new Date(),
            customers: [{id:1,name:"yuhu"},{id:2,name:"yuhu2"}]
        };
    }
}

render(){
    const date = this.state.date;
    const clients = this.state.customers;
    const formDate = date.toLocaleTimeString();
    return(
        <h1>Hello!</h1>

    )
}

const wrapper = document.getElementById("mainContainer");
wrapper ? ReactDOM.render(<Clock/>, wrapper) : false;
*/


/*class MartaProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Marta"
        };
    }

    render() {
        return (
            <div>Hola soy{this.state.name}</div>
        );
    }
}

export default MartaProps;*/