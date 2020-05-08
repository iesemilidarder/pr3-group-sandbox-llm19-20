import React from "react";

const MyFooter = () => {
    const message = () => alert("Vas a acceder a otro Sitio Web");
    return <div>
        <footer className="footer-copyright text-center py-3">
            <h5 className="text-success">© 2020 Copyright - Topics Foot </h5>
            <div className="row">
                <div className="col-2">
                </div>
                <div className="footer-copyright text-center py-3 col-8">
                    <div onClick={message}>
                        <a href="https://www.google.es/maps/dir//Berge+urskog,+830+21+Tandsbyn,+Suecia/@62.9335151,14.8350012,431m/data=!3m1!1e3!4m16!1m6!3m5!1s0x466f988dd1a4df43:0xf5cc501147ac4557!2sBerge+urskog!8m2!3d62.9335167!4d14.8373746!4m8!1m0!1m5!1m1!1s0x466f988dd1a4df43:0xf5cc501147ac4557!2m2!1d14.8373746!2d62.9335167!3e2?hl=es"
                           target="_blank"><p><b>C/</b> Berge urskog, 830 21 Tandsbyn, Suecia </p></a>
                    </div>
                    <p><b>LUNES:</b> 20.00 A 23.30. <b>MARTES A SÁBADO:</b> 13.00-15.30 &
                        20:00-23:30. <b>DOMINGO:</b> CERRADO</p>
                </div>
            </div>
        </footer>
    </div>
};

export default MyFooter;