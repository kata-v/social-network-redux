import React from "react";

const Register = () => {
  return (
    <div>
      <p>Here there should be a form</p>
      <form className="newUser">
        <div>
          <label for="fname">
            First name <input type="text" name="fname" id="fname" />
          </label>
        </div>
        <div>
          <label for="lname">Last name <input
            type="text"
            name="lname"
            id="lname"
            /></label>
          
        </div>
        <div>
          <label for="user">Username  <input
            type="text"
            name="user"
            id="user"
            
          /></label>
         
        </div>
        <div>
          <label for="pass">Password <input
            type="password"
            name="pass"
            id="pass"
            
          /></label>
         
        </div>
        <div>
          <label for="pass">Confirm your password <input
            type="password"
            name="passTwo"
            id="passTwo"
            
          /></label>
         
        </div>
      </form>
      <button
        className="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        Register
      </button>
    </div>
  );
};

export default Register;
