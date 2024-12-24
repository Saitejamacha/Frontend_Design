import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login_img from "../../assets/login_img.jpg";
import "./index.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const correctCredentials = {
    email: "saiteja@gmail.com",
    password: "teja",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get input values
    const email = e.target.firstName.value;
    const password = e.target.password.value;

    setIsLoading(true);
    setTimeout(() => {
      if (
        email === correctCredentials.email &&
        password === correctCredentials.password
      ) {
        navigate("/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
        setIsLoading(false);

        setTimeout(() => setError(""), 2000);
      }
    }, 1000);
  };

  const onClickSignUpBtn = () => {
    navigate("/signup");
  };

  return (
    <div className="signin-container">
      <div className="signin-left-side-con">
        <div className="signin-header">
          <img
            src="https://www.logolynx.com/images/logolynx/8e/8ef32dd71f87da00f50986ba953374dc.jpeg"
            alt="E-tech-Logo"
            className="company-logo"
          />
          <button className="sign-up-button" onClick={onClickSignUpBtn}>
            Sign Up
          </button>
        </div>
        <div className="signin-text-con">
          <h2 className="sign-main-text">Log In to Your E-tech Account!</h2>
          <p className="text-styles">
            Discover a supportive community of online instructors. <br />
            Get instant access to all course creation resources.
          </p>
        </div>
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="input-styles"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="form-options">
            <label>
              <input type="checkbox" name="rememberMe" />
              Remember me
            </label>
            <label className="forgot-password">Forgot Password?</label>
          </div>
          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>
        {/* <div className="sign-in-alter-con">
          <hr style={{ width: "45%" }} />
          OR
          <hr style={{ width: "45%" }} />
        </div> */}
        <div className="signin-alt">
          <div className="horizontal-lines">
            <span>OR</span>
          </div>
        </div>

        <div className="signin-alt-btn-con">
          <button className="social-signin">
            <img
              src="https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
              alt="google-logo"
              className="social-logo-styles"
            />
            Sign In With
          </button>
          <button className="social-signin">
            <img
              src="http://www.freeiconspng.com/uploads/image--facebook-icon--omori-wiki-12.png"
              alt="facebook-logo"
              className="facebook-logo-styles"
            />
            Sign In With
          </button>
        </div>
      </div>
      <div className="signin-right">
        <img src={login_img} alt="signin-img" className="signin-img" />
      </div>
    </div>
  );
};

export default SignIn;
