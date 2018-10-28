import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
const Input = props => (
  <center>
  <div className="input-group input-group-md">
    <input className="form-control" type="text" {...props} />
  </div>
  </center>
  
);


export default Input;
