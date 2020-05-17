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
            <div className="row">
                <div className="col-6">

                </div>
                <div className="col-6">
                    <HeaderLogin/>
                </div>

            </div>
        );
    }
}

export default TopicsHeader;