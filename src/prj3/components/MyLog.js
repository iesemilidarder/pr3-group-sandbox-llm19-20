import React from "react";
import { useForm } from "react-hook-form";
import "../myheader.css";

function MyLog() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <li >
                <label>Example</label>
                <input name="example" defaultValue="test" ref={register} />
                <label>ExampleRequired</label>
                <input
                    name="exampleRequired"
                    ref={register({ required: true, maxLength: 10 })}
                />
                {errors.exampleRequired && <p>Este campo es requerido</p>}
                <input style={{ marginBottom: 25}} className="btn btn-primary" type="submit" value="Inicia sesión"/>
                <input className="btn btn-secondary" type="button" value="Registrate"/>
            </li>
        </form>
    );
}

export default MyLog;