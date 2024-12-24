import React from "react";
import { useNavigate } from "react-router-dom";
import signup_img from "../../assets/sign_up_img.webp";
import "./index.css";

const SignUp = () => {
  const navigate = useNavigate();

  const onClickSignInBtn = () => {
    navigate("/");
  };

  return (
    <div className="signup-container">
      <div className="signup-left-side-con">
        <div className="signup-header">
          <img
            src="https://www.logolynx.com/images/logolynx/8e/8ef32dd71f87da00f50986ba953374dc.jpeg"
            alt="E-tech-Logo"
            className="company-logo"
          />
          <button className="sign-in-button" onClick={onClickSignInBtn}>
            Sign In
          </button>
        </div>
        <div className="signup-text-con">
          <h2 className="sign-main-text">Create Your E-tech Account!</h2>
          <p className="text-styles">
            Join a supportive community of online instructors. <br />
            Get instant access to all course creation resources.
          </p>
        </div>
        <form className="signup-form">
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
              className="input-styles"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required
              className="input-styles"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="input-styles"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              className="input-styles"
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <div className="signup-alt">
          <div className="horizontal-lines">
            <span>OR</span>
          </div>
        </div>

        <div className="signup-alt-btn-con">
          <button className="social-signup">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
              alt="google-logo"
              className="social-logo-styles"
            />
            Sign Up With
          </button>
          <button className="social-signup">
            <img
              src="http://www.freeiconspng.com/uploads/image--facebook-icon--omori-wiki-12.png"
              alt="facebook-logo"
              className="facebook-logo-styles"
            />
            Sign Up With
          </button>
        </div>
      </div>
      <div className="signup-right">
        <img src={signup_img} alt="signup-img" className="signup-img" />
      </div>
    </div>
  );
};

export default SignUp;
