import React from "react";


const myHeader = () => {
    return <header id="myHeader">
        <div className="container-fluid">
            <nav className="row navbar navbar-dark bg-dark">
                <div className="col-6">
                    <span className="navbar-brand text-success" href="#"><B>MUSIC</B></span>
                </div>
                <div className="col-6">
                    <form action="#" className="content float-right">
                        <input type="submit" className="float-right bg-secondary border-dark"
                               onClick="document.location='login.html'" value="Sign up"/>
                        <input type="submit" className="float-right bg-success border-dark"
                               onClick="document.location='login.html'" value="Log in"/>
                    </form>
                </div>
            </nav>
        </div>
    </header>
};

export default myHeader();