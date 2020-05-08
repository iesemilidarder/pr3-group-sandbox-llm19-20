import React from "react";
import PropTypes from "prop-types";

class Cutrislayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "value"
        };
    }

    componentDidMount() {
        //[a,b,c,d,e,f]         //[0, 1, 2, 3,
    }
    onChangePosition(e,value){
        const maxValue = this.props.images.length;
        let current = this.state.selected;
        current = Math.abs((current + value) % maxValue);
        if (current)
        this.setState({selected:current});
    }

    render() {
        return (
            <>
                <div className={"container-fluid"}>
                    <div>
                        <img className={"col"} src="https://picsum.photos/400/250" alt=""/>
                    </div>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary">Prev</button>
                        <button type="button" className="btn btn-secondary">Netx</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Cutrislayer;
Cutrislayer.propTypes = {
    images: PropTypes.string.isRequired,

};
Cutrislayer.defaultProps = {
    images: []
};