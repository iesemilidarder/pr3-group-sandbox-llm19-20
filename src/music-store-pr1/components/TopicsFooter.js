import React from "react";

class TopicsFooter extends React.Component {
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
            <div>
                 <p>Copyright 2020</p>
                <p>Spotifi del Grupo 1 to guapo</p>
            </div>
        );
    }
}

export default TopicsFooter;