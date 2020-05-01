import React from "react";

class MyProps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        };
    }

    onLocalClick() {
        this.props.onClick();
    }

    render() {
        const data = this.props.info;
        return (
            <div> Hi I'm {this.state.name}
                <button onClick={this.onLocalClick}>Dame</button>
            </div>
        );
    }
}

export default MyProps;
MyProps.propTypes = {
    name: PropTypes.string.isRequired,
    info: PropTypes.array,
    onClick: PropTypes.func
};