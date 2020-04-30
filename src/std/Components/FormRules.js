import React from "react";

class FormRules extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                username: "",
                surname: ""
            },
            dbNames: ["berto", "pablo"]
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            person: {
                username: "pepito",
                surname: "palotes"
            }
        });
    }

    handleChange(event) {
        let person = this.state.person;
        person[event.target.name] = event.target.value;
        if (event.target.value.length > 4) {
            this.state.dbNames.map(i => {
                if (i === event.target.value) {
                    alert(`${i} Mola mogollon`);
                }
            });
        }
        this.setState({person: person});
    }

    render() {
        return (
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id={"name"} name={"username"}
                           type="text" value={this.state.person.username}
                           onChange={this.handleChange}/>
                </div>
                <div>
                    <label htmlFor="surname">Surname</label>
                    <input id={"surname"} name={"surname"}
                           type="text" value={this.state.person.surname}
                           onChange={this.handleChange}/>
                </div>
            </form>
        );
    }
}

export default FormRules;