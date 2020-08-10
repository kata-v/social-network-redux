import React from "react";

const LogIn = () => {
  return (
    <div>
      <p>Please Log In to continue.</p>
      <form className="newPost">
        <div>
          <label for="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label for="password">Password</label>
          <textarea type="password" name="password" id="password" />
        </div>
      </form>
      <button
        className="btn waves-effect waves-light"
        type="button"
        value="LogIn"
      >
        Log In
      </button>
    </div>
  );
};

export default LogIn;
