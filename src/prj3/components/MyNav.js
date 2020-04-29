import React from "react";
import "../myheader.css";

const MyNav = () => {
    return <nav>
        <div className="container">
            <ul className="col-md-6">
                <li><a href="#"><h1>SELECCIONADOS </h1></a></li>
                <li><a href="#"><h1>PODCASTS</h1></a></li>
                <li><a href="#"><h1>NOVEDADES</h1></a></li>
            </ul>
        </div>
    </nav>
};

export default MyNav;