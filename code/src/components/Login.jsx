import React, { useState } from "react";
import { Preheader } from "../subcomponents/Preheader";
import { LoginHeader } from "../subcomponents/LoginHeader";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";
import Auth from "../auth/Auth";
const apiUrl = "https://apingweb.com/api/login";

export const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();

  // handling state change on entering email/password
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  // handling login request
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loginData?.email === "") {
      toast.error("Please enter an Email");
      return;
    }
    if (loginData?.password === "") {
      toast.error("Please enter your password!");
      return;
    }

    let formData = new FormData();
    formData.append("email", loginData?.email);
    formData.append("password", loginData?.password);

    setShowSpinner(true);
    const response = await fetch(apiUrl, {
      body: formData,
      method: "POST",
    });

    const data = await response.json();
    setShowSpinner(false);
    if (data?.status === 200) {
      toast.success(data?.message);
      Auth.login(data);
      navigate("/home", { state: { data: data?.result } });
    } else if (data?.status !== 200) {
      toast.error(data?.message);
    }
  };

  return (
    <>
      <Preheader />
      <LoginHeader />
      <div className="input-form-container">
        <div className="Login-heading">Login to your account.</div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            className="input-field"
            type="text"
            name="email"
            onChange={handleChange}
            value={loginData?.email}
          ></input>
          <input
            placeholder="Password"
            className="input-field"
            type="text"
            name="password"
            onChange={handleChange}
            value={loginData?.password}
          ></input>

          <div className="forgot-password-container">
            <div>
              {" "}
              <input type="checkbox" name="remember" />
              <label>Remember me</label>
            </div>

            <span>Forgot Password</span>
          </div>
          <div className="login-btn-container">
            <div className="spinner-container">
              <ColorRing
                visible={showSpinner}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </div>
            <button className="login-submit-btn" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};
