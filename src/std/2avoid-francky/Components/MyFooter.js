import React from "react";
const MyFooter = () => {
    return <div>
        <footer className="row">
            <div className="col-md-6 navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">My web</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="footerbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-sm-2">Contact 555-333210</div>
            <div className="col-sm-2"><img src="/assets/images/callus.jpg" alt="call us" width="40"/></div>
        </footer>
    </div>
};

export default MyFooter;