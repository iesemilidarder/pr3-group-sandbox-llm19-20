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
                {/*//Para que voten nuestra pagina*/}
                <div className="ec-stars-wrapper">
                    <a href="#" data-value="1" title="Votar con 1 estrellas">&#9733;</a>
                    <a href="#" data-value="2" title="Votar con 2 estrellas">&#9733;</a>
                    <a href="#" data-value="3" title="Votar con 3 estrellas">&#9733;</a>
                    <a href="#" data-value="4" title="Votar con 4 estrellas">&#9733;</a>
                    <a href="#" data-value="5" title="Votar con 5 estrellas">&#9733;</a>
                </div>
            </footer>
        );
    }
}

export default TopicsFooter;