import React from "react";
import MyNav from "./MyNav";
import "../myheader.css";
import MyLog from "./MyLog";

const MyHeader = () => {
    return <header>
        <div className="container" id="head">
            <div id="head" className="row">
                <div className="col-md">
                    <ul>
                        <li>
                            <img src="/prj3/img/logo.webp" alt="Logo" width="100"/>
                        </li>
                        <li>
                            <MyNav/>
                        </li>
                        <li>
                            <MyLog id="login"/>
                        </li>

                    </ul>

                </div>
            </div>
        </div>

    </header>
};
export default MyHeader;
