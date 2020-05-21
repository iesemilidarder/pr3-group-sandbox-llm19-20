import React from "react";
import PropTypes from "prop-types";

class MigueHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "value",
            clicks: 0
        };
    }

    add() {
        const {clicks} = this.state;
        let clicks2 = this.state.clicks;
        this.setState({clicks: clicks + 1});
    }

    render() {
        const {key, clicks} = this.state;
        const {title, data} = this.props;
        return (
            <div>
                <span>Loren:</span> {key} <span> Clickado {clicks} veces</span>
                <button onClick={(e) => this.add(e)}>Clickar</button>
                <div>{title}</div>
                <ul>
                    {data.map((item, index) => {
                        return <li key={`lista${index}`}>{index}&#160;{item}</li>
                    })}
                </ul>
            </div>
        );
    }
}

MigueHeader.propTypes = {
    title: PropTypes.element.isRequired,
    data: PropTypes.array
};
MigueHeader.defaultProps = {
    data: []
};
export default MigueHeader;