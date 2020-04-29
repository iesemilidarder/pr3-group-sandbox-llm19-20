import React from "react";


/*let form = document.getElementById('form');


form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('me diste un click')

});*/


const LoginForm = () => {
    return (
        <div>
            <form id="form">
                <input type={"text"} name={"usuario"} placeholder={"Ingresa usuario"} className={"form-control my-3"}/>
                <input type={"password"} name={"pass"} placeholder={"Ingresa contraseña"}
                       className={"form-control my-3"}/>
                <button type={"submit"} className={"btn btn-primary"}>Enviar</button>
                <div className={"mt-3"} id="respuesta">

                </div>
            </form>
        </div>)
        ;
};

export default LoginForm;

