import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 navbar bg-[#f2f2f2]">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">authMater</a>
        </div>
        <div className="flex gap-10 mr-12 font-semibold">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://media.licdn.com/dms/image/D5603AQEY32qG8cq1RA/profile-displayphoto-shrink_800_800/0/1671728550172?e=1687392000&v=beta&t=Lww2um2wKGlaelf40bEdZqYRqZRTajZjXDyx5ZQyWR0" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;