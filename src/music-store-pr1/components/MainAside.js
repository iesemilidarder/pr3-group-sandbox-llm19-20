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
            <div>
                <p className="h2 text-muted">Biblioteca</p>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Perfil</li>
                    <li className="list-group-item">Generos</li>
                    <li className="list-group-item">Playlist</li>
                    <li className="list-group-item">Configuracion</li>
                </ul>
            </div>
        )
    }
}

export default MainAside;