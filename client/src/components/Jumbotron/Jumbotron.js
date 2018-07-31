import React from "react";


const bgImage = 'https://farm3.static.flickr.com/2861/34136364891_a839dfb93e_b.jpg';

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 750, backgroundColor:"black", backgroundImage:`url(${bgImage})`, backgroundRepeat: "no-repeat"}}
    className="jumbotron">
    {children}
  </div>
);

export default Jumbotron;
