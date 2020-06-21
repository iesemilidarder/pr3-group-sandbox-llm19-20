import React, {useState} from "react";
import {useForm} from "react-hook-form";

export default function CutriLogin(props) {
    const [logged, setLogged] = useState(false);
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => {
        if (data.username && data.password) {
            const {username, password} = data;
            console.log(data);
            if (username === "test" && password === "test") {
                setLogged(true);
            }
        }
    }
    if (logged) {
        return (<>{props.children}</>);
    } else {
        return (
            <form onSubmit={handleSubmit(onSubmit)} className="form-signin">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <img className="mb-4"
                                 src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt=""
                                 width="72" height="72" style={{"textAlign": "center"}}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col"><h1 className="h3 mb-3 font-weight-normal">Please sign in</h1></div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="inputEmail" className="sr-only">Email address</label>
                            <input name="username" defaultValue="test" ref={register}
                                   id="inputEmail" className="form-control" placeholder="Email address" required
                                   autoFocus/>
                        </div>
                        <div className="col">
                            <label htmlFor="inputPassword" className="sr-only">Password</label>
                            <input name="password" ref={register({required: true})}
                                   className="form-control" placeholder="Password"
                                   type="password" id="inputPassword"/>
                            {errors.password && <span>This field is required</span>}
                        </div>

                    </div>
                    <div className="row" style={{paddingTop:"15px"}}>
                        <div className="col">
                            <input type="submit" value={"Do Login!"} className="btn btn-lg btn-primary btn-block"/>
                            <p className="mt-3 mb-3 text-muted text-center">&copy;&#160;2020 My ninja student rules!</p></div>
                    </div>
                </div>
            </form>
        );
    }

}