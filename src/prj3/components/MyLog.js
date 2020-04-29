import React from "react";
import {useForm} from "react-hook-form";
import "../myheader.css";
import "../mylogin.css";

function MyLog() {
    const {register, handleSubmit, watch, errors} = useForm();

    let users= [
        {
            "id": 1,
            "username": "Cioran666",
            "password": "987654"
        },
        {
            "id": 2,
            "username": "Stoa33",
            "password": "123987"
        },
        {
            "id": 3,
            "username": "Lory66",
            "password": "123456"
        }
    ];


    const onSubmit = data => {
        console.log(data);

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
                <li>
                    <input placeholder={"Inserte el nombre de usuario"}/>
                    {errors.exampleRequired && <p id="dis">"Este campo es requerido"</p>}
                    <input placeholder={"Inserte la contraseña"}
                           name="exampleRequired"
                           ref={register({ required: true, maxLength: 10 })}
                    />{errors.exampleRequired && <p>"Este campo es requerido"</p>}
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