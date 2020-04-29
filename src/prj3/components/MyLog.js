import React from "react";
import {useForm} from "react-hook-form";
import "../myheader.css";


function MyLog() {
    const {register, handleSubmit, watch, errors} = useForm();


    const onSubmit = data => {
        console.log(data);

    };
/*
    let usuarios = [];

    fetch("assets/prj3/data/userNames.json")
        .then(data => data.json())
        .then(users => {
            usuarios = users.data;
            console.log(usuarios);
        });*/

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ul>
                <li>
                    <input placeholder={"Inserte el nombre de usuario"}/>
                    <input placeholder={"Inserte la contraseña"}
                           name="exampleRequired"
                           ref={register({ required: true, maxLength: 10 })}
                    />
                </li>
                <li>
                    <input style={{marginBottom: 25}} className="btn btn-primary" type="submit" value="Inicia sesión"/>
                    {errors.exampleRequired && alert("Este campo es requerido")}
                    <input className="btn btn-secondary" type="button" value="Registrate"/>

                </li>
            </ul>
        </form>
    );
}

export default MyLog;