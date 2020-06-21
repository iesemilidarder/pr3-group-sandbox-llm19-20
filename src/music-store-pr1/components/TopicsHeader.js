import React from "react";
import HeaderLogin from "./HeaderLogin";


class TopicsHeader extends React.Component {
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
            <header className="row mb-3">
                <div className="col-6">
                    <div className="row">
                        <div className="col-12 "><h1>Bienvenido a TopicsMusic</h1></div>
                    </div>
                </div>
                <div className="col-6">
                    <HeaderLogin/>
                </div>

            </header>
        );
    }
}

export default TopicsHeader;