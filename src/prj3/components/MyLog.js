import React from "react";
import {useForm} from "react-hook-form";
import "../myheader.css";//TODO El css en el mismo sitio que el componente. No tiene sentido lo que escribes
import "../mylogin.css";//TODO El css en el mismo sitio que el componente. No tiene sentido lo que escribes

function MyLog() {
    const {register, handleSubmit, watch, errors} = useForm();
    function compare(users, onSubmit ){
         users = [
            {
                "id": 1,
                "username": "leo333",
                "password": "987654"
            },
            {
                "id": 2,
                "username": "pepe234",
                "password": "123987"
            },
            {
                "id": 3,
                "username": "Lory66",
                "password": "123456"
            }
        ];
        console.log(users);
    }
    let onSubmit = data => {
        console.log(data);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
                <li>
                    <input placeholder={"Inserte el nombre de usuario"}
                           ref={register({required: true, maxLength: 10})}
                           name="user"
                    />
                    {errors.exampleRequired && <p className="dis">"Este campo es requerido"</p>}
                    <input type="password"
                           placeholder={"Inserte la contraseña"}
                           name="pass"
                           ref={register({required: true, maxLength: 10})}
                    />{errors.exampleRequired && <p className="dis">"Este campo es requerido"</p>}
                </li>
                <li>
                    <input style={{marginBottom: 25}} className="btn btn-primary" type="submit" value="Inicia sesión"/>
                    <input className="btn btn-secondary" type="button" value="Registrate"/>

                </li>
            </ul>
        </form>
    );
}

export default MyLog;