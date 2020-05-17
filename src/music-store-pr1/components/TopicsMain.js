import React from "react";

class TopicsMain extends React.Component {
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
                <div className="input-group">
                    <div className="input-group-prepend">
                    </div>
                    <input type="text" className="form-control" aria-label="Text input with radio button" placeholder="Busca aquí tu música favorita...">

                    </input>
                    <div>
                        <button  type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false">
                            Buscar
                        </button>
                    </div>
                </div>

            </div>


        );
    }
}

export default TopicsMain;