import React from "react";

const MyForm = () => {
    return <header className="row">
        <form id="application" className="col-md-5">
            <input className="btn btn-primary" type="button" value="Inicia sesión"/>
            <input className="form-control my-3" type="text" name="usser" placeholder="Nombre usuario"/>
            <input className="form-control my-3" type="password" name="pass" placeholder="Contraseña"/>
        </form>
        <div className="col-md-4">
            <input className="btn btn-secondary" type="button" value="Registrate"/>

        </div>
    </header>
};
/*
let form = document.getElementById('application');

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('me diste un click')})*/
    /*

    let datos = new FormData(formulario);

    console.log(datos)
    console.log(datos.get('usuario'))
    console.log(datos.get('pass'))

    fetch('post.php',{
        method: 'POST',
        body: datos
    })
        .then( res => res.json())
        .then( data => {
            console.log(data)
            if(data === 'error'){
                respuesta.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    Llena todos los campos
                </div>
                `
            }else{
                respuesta.innerHTML = `
                <div class="alert alert-primary" role="alert">
                    ${data}
                </div>
                `
            }
        } )
})
*/
export default MyForm;