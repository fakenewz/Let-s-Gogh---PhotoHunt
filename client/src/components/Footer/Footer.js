import React from "react";
import "./Footer.css";

const Footer = () => (
    <footer className="footer-custom">
    <div className="container footer-custom">
      <div className="row">
        <div className="col l6 s12 footer-custom">
          <h5 className="footer-custom">Company Bio</h5>
          <p className="footer-custom">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


        </div>
        <div className="col l3 s12">
          <h5 className="black-text"></h5>
          <ul>
            <li><a className="black-text" href="#!"></a></li>
            <li><a className="black-text" href="#!"></a></li>
            <li><a className="black-text" href="#!"></a></li>
            <li><a className="black-text" href="#!"></a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <h5 className="black-text">Navigaton</h5>
          <ul>
            <li><a className="black-text" href="#!">Home Page</a></li>
            <li><a className="black-text" href="#!">Admin Page</a></li>
            <li><a className="black-text" href="#!">Student Quiz</a></li>
            <li><a className="black-text" href="#!">Teacher Quiz</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Made by <a className="black-text text-lighten-3" href="https://github.com/fakenewz/Let-s-Gogh---PhotoHunt">LET'S GOGH PHOTOHUNT!</a>
      </div>
    </div>
  </footer>


);


export default Footer;
