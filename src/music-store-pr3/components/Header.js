import React from "react";


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
                console.log(this.state.users);
            });
    }

    Loggin(){
        let h = 1;
        const {users} = this.state;
        for( h = 0  ; h <= Object.keys(users).length ; h ++){
            if(document.getElementById("usr").value === users[h].username && document.getElementById("pass").value === users[h].password){
                this.setState({ name: "Sesion iniciada como"+ " " + users[h].username});
            }
        }
    }

    render() {
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
                    <h3 id="user" className="col-md-3">{this.state.name}</h3>

                </div>
            </>
        );
    }
}

export default Header;