import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ float: "right", marginBottom: 10, backgroundColor:'#ffce00', color:'#000000'}} className="btn btn-success">
    {props.children}
  </button>
);
