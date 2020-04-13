import React from "react";

const MyHeader = () =>{
    return <div>
        <header style={{backgroundColor: "#6f42c1"} }className="row">

            <h1 style={{fontColor: "#ffffff"} } className="col-md-4">Topics Food</h1>

<input type="text" value="Buscador" className="col-3" />
                <img src="/img/logo.png"  alt="logo" className="col-5"/>

        </header>

    </div>

export default MyHeader;}