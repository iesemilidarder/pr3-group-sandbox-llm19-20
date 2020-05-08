
import React from 'react';
import ReactDOM from "react-dom";

function DaniApp(){
    return(
      <div>
          <div>
              <header className="row">
                  <div className="col-md-2" >
                      <img src="/logo.png" alt="Logo molon" width="50"/>
                  </div>
                  <nav className="col-md-6 navbar navbar-expand-lg navbar-light bg-light">
                      <a className="navbar-brand" href="#" >My web</a>
                      <button className="navbar-toggler" type="button" data-toggle="collapse"
                              data-target="#navbarSupportedContent"
                              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon">&#160;</span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="navbar-nav mr-auto">
                              <li className="nav-item active">
                                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Link</a>
                              </li>
                          </ul>
                      </div>
                  </nav>
                  <div className="col-sm-2">Contact 555-333210</div>
                  <div className="col-sm-2"><img src="/callus.jpg" alt="call us" width="40"/></div>

              </header>
              <main className="row" style={{marginTop: 20}}>

                  <article className="col-md-9">
                      <div className="col-md-8" style={{float: "left"}}>
                          <div >
                              <h5>ALL ABOUT OUR PRODUCTS</h5>
                              <p>Summery</p>
                          </div>
                          <div >
                              <h5>ALL ABOUT OUR PRODUCTS</h5>
                              <p>Description</p>
                          </div>
                          <div >
                              <h5>ALL ABOUT OUR PRODUCTS</h5>
                              <p>Description</p>
                          </div>
                          <div >
                              <h5>ALL ABOUT OUR PRODUCTS</h5>
                              <p>Description</p>
                          </div>
                      </div>
                      <aside className="col-md-4" style={{float: "right"}}>
                          <div>
                              <h6>SUPER CLIENT REVIEWS</h6>
                              <p>Lorem ipsum dolore magnam necessitatibus neque quae temporibus.</p>
                          </div>
                          <div>
                              <h6>WHAT THE PRESS SAY</h6>
                              <p>Lorem ipsum dolor sit amet, cor adipisicing elit. Omnis.</p>
                          </div>
                      </aside>

                  </article>
                  <aside className="col-md-3">
                      <div>
                          <h5>ABOUT OUR INDUSTRY</h5>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, numquam!</p>
                      </div>

                  </aside>
              </main>
          </div>
      </div>
    );
}

const wrapper = document.getElementById("daniapp");
wrapper ? ReactDOM.render(<DaniApp/>, wrapper) : false;




