import React, {useState} from "react";
import {useForm} from "react-hook-form";

export default function HeaderLogin(props) {
    const [logged, setLogged] = useState(false);
    const {register, handleSubmit, watch, errors} = useForm();
    let user="";
    const onSubmit = data => {
        if (data.username && data.password) {
            const {username, password} = data;
            console.log(data);
            if (username === "test" && password === "test") {
                setLogged(true);
                user=username;
            }
        }
    };
    if (logged) {
        return(
            <h3>Bienvenido {user}</h3>
        );
    } else {
        return (
            <div id="logged">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="inputEmail" className="sr-only">
                                Email address
                            </label>
                            <input name="username" defaultValue="test" ref={register} id="inputEmail"
                                   className="form-control" placeholder="Username" required autoFocus/>
                        </div>
                        <div className="col">
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input name="password" ref={register({required: true})}
                                   className="form-control" placeholder="Password" type="password" id="inputPassword"/>
                            {errors.password && <span>This field is required</span>}
                        </div>
                    </div>
                    <div className="row" style={{paddingTop: "15px"}}>
                        <div className="col">
                            <input type="submit" value={"Do login!"} className="btn btn-lg btn-primary btn-block"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}