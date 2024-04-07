import React, { useState } from "react";
import "./login.css";
import { validateUser } from "../services/userService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const createUser = async () => {
    navigate("/signup");
  };

  const loginUser = async () => {
    try {
      validateUser(username, password).then(() => {
        navigate("/");
      });
    } catch (e) {}
  };

  return (
    <div className="body">
      <div className="card w-6/12 h-80 bg-base-100 shadow-xl my-6 flex items-center justify-center toast-font">
        <div className="title">
          <span>Toasters</span>
        </div>
        <div className="modal-body-row">
          <div>
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div>
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="password"
                className="grow"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="mt-6">
          <button className="btn-new h-10" onClick={createUser}>
            Sign-up
          </button>
          <button className="btn-new h-10" onClick={loginUser}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    backgroundColor: "#f6f6f6",
    height: "100vh",
    display: "flex",
  },
};
