import React from "react";

class SearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: "value"
        };
    }

    componentDidMount() {
        fetch("topicsmusic/songs.json")
            .then(data => data.json())
            .then(data => {
                this.setState({projects: data});
                console.log(data)
            });
    };

    render() {
        return (
            <>
            </>
        );
    }
}

export default SearchResult;