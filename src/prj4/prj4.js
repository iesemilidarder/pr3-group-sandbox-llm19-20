import React from 'react';
import {useForm} from "react-hook-form";
import ReactDOM from "react-dom";

let renderCount = 0;

function App() {
    const {register, handleSubmit} = useForm();
    renderCount++;

    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={onSubmit}>
            <label>First Name</label>
            <input name="firstName"/>

            <label>Last Name</label>
            <input name="lastName"/>
            <p>Render Counter: {renderCount} </p>

            <button>Submit</button>

        </form>
    )
}
const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App/>, wrapper) : false;
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
