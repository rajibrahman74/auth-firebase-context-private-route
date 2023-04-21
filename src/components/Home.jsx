import React, { useContext } from "react";
import { UserContext } from "../Providers/AuthProviders";

const Home = () => {
  const {user} = useContext(UserContext);
  console.log(user);

  return (
    <div className="max-w-7xl mx-auto px-4 hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <div className="w-[50%] flex justify-center items-center">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="w-80 rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-[50%]">
          <h1 className="text-5xl font-bold">
            Box Office News! {user && <span>{user}</span>}
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;