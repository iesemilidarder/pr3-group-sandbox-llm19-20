import React from "react";
import PropTypes from "prop-types";
class CutriSlider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            currentImage:this.props.images[0]
        };
    }
    componentDidMount() {
        if (this.props.interval>0){
            //[a,b,c,d,e,f]        //[0,1*,2,3,4,5]
            this.intervalID = setInterval(
                () => this.onChangePosition(null,1),
                this.props.interval*1000
            );
        }
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
    onChangePosition(e, value) {
        const maxValue = this.props.images.length;
        let current = this.state.selected;
        current = (current + value) % maxValue;
        if (current < 0) {
            current = maxValue-1;
        }
        this.setState({selected: current,currentImage:this.props.images[current]});
    }
    render() {
        const currentPosition = this.state.selected;
        const url = this.state.currentImage;
        return (
            <div className={"container-fluid"}>
                <div className="row">
                    {currentPosition}
                    <img className={"col"}
                         src={url} alt=""
                         height={this.props.height} width={this.props.width}/>
                </div>
                <div className="row">
                    <div className="col btn-group" role="group" aria-label="Basic example">
                        <button type="button" className=" btn btn-secondary"
                                onClick={(e) => this.onChangePosition(e, -1)}
                        >Prev
                        </button>
                        <button type="button" className=" btn btn-secondary"
                                onClick={(e) => this.onChangePosition(e, 1)}
                        >Next
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default CutriSlider;
CutriSlider.propTypes = {
    images: PropTypes.array.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    interval: PropTypes.number
};
CutriSlider.defaultProps = {
    images: ["https://picsum.photos/400/250"],
    interval:0
};