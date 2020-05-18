import React, {useState} from "react";
import {useForm} from "react-hook-form";

export default function HeaderLogin(props) {
    const [logged, setLogged] = useState(false);
    const {register, handleSubmit, watch, errors} = useForm();
    const [user, setUser] = useState("");
    const onSubmit = data => {
        if (data.username && data.password) {
            const {username, password} = data;
            console.log(data);
            fetch("topicsmusic/users.json")
                .then(data => data.json())
                .then(data => {
                    data.map(users => {
                        if (username === users.username && password === users.password) {
                            setLogged(true);
                        }
                    })
                })
        }
    };
    if (logged) {
        return (
            <div className="mt-2">
                <p className="text-center"><h3>Bienvenido {user}</h3></p>
            </div>
        );
    } else {
        return (
            <div id="logged">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row mt-2">
                        <div className="col-5">
                            <label htmlFor="inputEmail" className="sr-only">
                                Email address
                            </label>
                            <input name="username" ref={register}
                                   id="inputEmail" onChange={event => setUser(event.target.value)}
                                   className="form-control" placeholder="Username" required
                                   autoFocus/>
                        </div>
                        <div className="col-5">
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input name="password" ref={register({required: true})}
                                   className="form-control" placeholder="Password" type="password"
                                   id="inputPassword"/>
                            {errors.password && <span>This field is required</span>}
                        </div>
                        <div className="col-2">
                            <input type="submit" value={"Login!"}
                                   className="btn btn-primary btn-block"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}