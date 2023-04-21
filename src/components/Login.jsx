import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Providers/AuthProviders";
import "./Login.css";

const Login = () => {
  const { signInUser, singInWithGoogle } = useContext(UserContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        const signIn = result.user;
        console.log(signIn);
        form.reset();
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    singInWithGoogle()
      .then((result) => {
        const loggedGoogleUser = result.user;
        console.log(loggedGoogleUser);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse justify-evenly">
        <div className="w-[50%] text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="w-[50%] card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <button
                onClick={handleGoogleSignIn}
                className="google-signin-button"
              >
                <img
                  src="https://developers.google.com/identity/images/g-logo.png"
                  alt="Google logo"
                />
                Sign in with Google
              </button>
            </div>
            <Link className="text-center text-sm" to="/register">
              <button className="label-text-alt link link-hover">
                newsMaster Register
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;