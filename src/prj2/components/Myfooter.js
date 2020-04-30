import React from "react";

const Myfooter = () => {
    return <div>
        <footer style={{'background-color': 'lightseagreen'}}>
            <div className="container">
                <div className="row text-center">
                    <div className="col my-4 mx-4">
                        <h5>Aviso Legal EmiliAirlines</h5>
                        <a href="#" className="stretched-link">Información Legal y Terminos de protección de datos. </a>
                    </div>
                    <div className="col my-4 mx-4">
                        <h5>Contact EmiliAirlines</h5>
                        <p><i className="fas fa-phone"
                              style={{'font-size': '17px;', 'margin-right': '5px;'}}></i><span>EmiliAirlines PhoneNum</span>
                        </p>
                        <p><i className="fas fa-at" style={{'font-size': '20px;'}}></i><span>EmiliAirlines Email</span></p>
                    </div>
                    <div className="col my-4 mx-4">
                        <h5>Some ExtraExtraFooter</h5>
                        <p>EmiliAirlines SocialMedia</p>
                        <i className="fab fa-twitter-square mx-1" style={{'font-size': '25px;'}}></i>
                        <i className="fab fa-facebook-square mx-1" style={{'font-size': '25px;'}}></i>
                        <i className="fab fa-linkedin mx-1" style={{'font-size': '25px;'}}></i>
                    </div>
                </div>
                <p>EmiliAirlines Copyright<i className="far fa-registered ml-1" style={{'font-size': '15px;'}}></i></p>
            </div>
        </footer>
    </div>
};

export default Myfooter;