import React from "react";
import Clock from "./Reloj";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            name: "",
            loggin: false
        };
        this.Loggin = this.Loggin.bind(this);
    }

    componentDidMount() {
        fetch("prj3/data/userNames.json")
            .then(users => users.json())
            .then(users => {
                this.setState({users: users});
                //console.log(this.state.users);
            });
    }

    Loggin(){
        const {users, name} = this.state;
        users.map( item => {
            if (item.username === document.getElementById("usr").value && item.password === document.getElementById("pass").value ){
                this.setState({ name: "Sesion iniciada como"+ " " + item.username, loggin: true});
            }
        });
    }

    render() {
        if(this.state.loggin){
            const {name} = this.state;
           return(
               <div>
                   <div className="row">
                       <div className="col-md-5">
                           <h3 id="user">{name}</h3>
                       </div>
                       <div className="col-md-7">
                           <Clock/>
                       </div>
                   </div>
                   <h4>Bienvenido :)</h4>
               </div>
           )
        }else{
            return (
                <>
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                <div className="col-md-10" style={{float: "left"}}>
                                    <form>
                                        <label>Usuario:<input id="usr" name="usr" type="text"/></label>
                                        <label style={{marginLeft: 15}}>Contraseña:<input id="pass" name="pass"
                                                                                          type="text" required={"pass"}/></label>
                                    </form>
                                </div>
                                <div className="col-md-2">
                                    <button onClick={this.Loggin}>Loggear</button>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3">
                            <Clock/>
                        </div>
                    </div>
                </>
            );
        }

    }
}

export default Header;