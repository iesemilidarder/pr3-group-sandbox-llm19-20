import React from "react";

class BlankClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "value"
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
            </>
        );
    }
}

export default BlankClassComponent;