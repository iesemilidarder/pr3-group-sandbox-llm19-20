import React from "react";
import PropTypes from "prop-types";

class MyFirstComponentProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }
    onLocalClick(){
        this.props.onClick();
    }
    render() {
        const data = this.props.info;
        return (
            <div>Hola soy {this.state.name}
            <button onClick={this.onLocalClick}>Dame</button>
            </div>
        );
    }
}
export default MyFirstComponentProps;
MyFirstComponentProps.propTypes = {
    name: PropTypes.string.isRequired,
    info: PropTypes.array,
    onClick: PropTypes.func
};