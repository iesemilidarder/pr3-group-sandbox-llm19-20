import React from "react";

class FormRules extends React.Component {
    /**
     * Iniciamos los valores de estado y asociamos la funcion (binding)
     * @param props
     */
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

    /**
     * Simulamos una carga de datos posterior al render
     */
    componentDidMount() {
        this.setState({
            person: {
                username: "pepito",
                surname: "palotes"
            }
        });
    }

    /**
     * Obtiene el estado previo
     * , modifica el valor con el obtenido del input
     * , y luego...si son más de 4 char busca en los "dbnames" para encontrar si hay coincidencia
     * , al final modifica el estado del componente
     * @param event
     */
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

    /**
     * Renderiza el componente y asocia el cambio del input a la funcion.
     * @returns {*}
     */
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