import React from 'react';
import ReactDOM from "react-dom";

//import Slider from "./2avoid/Slider";
//import PropsComponent from "./2avoid/props";
//import Contador from "./2avoid/Contador";
//import LoginDani from "./2avoid/login";
//import LoginGuay from "./2avoid/LoginGuay";

//import Prueba from "./2avoid/Prueba";
//import Header from "./2avoid/Header";

//import Body from "./2avoid/Body";
function DaniApp(){
    return(
      <div>
       {/*   <Header/>
          <Prueba/>*/}
      </div>
    );
}

const wrapper = document.getElementById("daniapp");
wrapper ? ReactDOM.render(<DaniApp/>, wrapper) : false;




