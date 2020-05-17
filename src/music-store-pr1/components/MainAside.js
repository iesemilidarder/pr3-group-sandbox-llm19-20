import React from "react";

class MainAside extends React.Component {
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
            <ol>
                <li>Categorias</li>
                <li>Biblioteca</li>
                <li>Playlist</li>
                <li>Podcasts</li>
                <li>Generos</li>
                <li>La que no me invento</li>
            </ol>
        );
    }
}

export default MainAside;