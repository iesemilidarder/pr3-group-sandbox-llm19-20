import React from 'react';
import myHeader from "./components/myHeader";
import myForm from "./components/myForm";
import myFooter from "./components/myFooter";
import myBody from "./components/myBody";
import ReactDOM from "react-dom";


function App() {
    return (
        <div>
            <div>
                <myHeader/>
                <div>
                    <myBody/>
                    <div>
                    <myForm/>
                    <div>
                    <myFooter/>
                    </div>
                </div>
                </div>
            </div>
        </div>

    )
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
/*
todo pasar a react

<body className="bg-secondary">
<div className="header">
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
</div>
<main>
    <br>
    <br>
    <!-- JS GenedersButons -->
    <br>
    <br>
        <NewsCard/> <!-- JS NewsCards -->
    <br>
        <UpdateCard/> </br>
    </br>
    </br>
    </br>
    </br> <!-- JS UpdateCards -->
</main>
<br>
<footer>
    <!-- JS UnderBar -->
</footer>
</br>
</body>*/
