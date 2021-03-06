import React from "react";
import Clock from "./Clock";
import CutriSlider from "./CutriSlider";

const ProjectHeader = () => {
    const myImages =["https://api.adorable.io/avatars/170/JohnDoe.png"
        ,"https://api.adorable.io/avatars/170/PepitoPalotes.png"
        ,"https://api.adorable.io/avatars/170/HollyMolli.png"]
    const myImages2 = ["https://picsum.photos/400/250"
        , "https://picsum.photos/400/250", "https://picsum.photos/400/250"];
    return (
        <header className="row ">
            <div className="col-sm-2 myHeaderLogo">
                <img src="/images/logo.png" alt="Logo molon" width="50"/>
            </div>
            <nav className="col-sm-6 navbar navbar-expand-lg navbar-light bg-light ">
                <a className="navbar-brand" href="#">My web</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">&#160;</span>
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
            <div className="col-sm-2">
                <div>Contact 555-333210</div>
                <div><Clock/></div>
            </div>
            <div className="col-sm-2"><img src="/images/callus.jpg" alt="call us" width="40"/></div>
            <div className="col-md-12">
                <CutriSlider images={myImages} height={200}/>
            </div>
        </header>
    );
};
export default ProjectHeader;