import React from 'react';

class ActivationClock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            initTime: new Date(),
            time: new Date()
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        const viewTime = Math.floor((this.state.time - this.state.initTime) / 1000);
        return (
            <span className="App-clock">
                {viewTime}s.
            </span>
        );
    }
}
export default ActivationClock;