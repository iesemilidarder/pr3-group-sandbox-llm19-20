import React from "react";

const MyHeader = () => {
    return <div>
        <header className="row" style={{'backgroundColor': 'blue'}}>
            <div className="col-sm-2">
                <img src="assets/images/logo.png" alt="Logo" width="50"/>
            </div>
            <nav className="col-md-6 navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">My web</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="col-sm-2">Contact 555-333210</div>
            <div className="col-sm-2"><img src="assets/images/callus.jpg" alt="call us" width="40"/></div>
        </header>
    </div>
};
export default MyHeader;