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
            <footer className="footer-copyright text-center py-3">
                 <p>Copyright 2020</p>
                <p>Spotifi del Grupo 1 to guapo</p>
            </footer>
        );
    }
}

export default TopicsFooter;