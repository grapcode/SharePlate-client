import React from 'react';
import { Link, NavLink } from 'react-router';
import splogo from '../assets/shareP-logo.png';
import MyContainer from './my-components/MyContainer';
import { IoReorderThreeOutline } from 'react-icons/io5';

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/availableFoods">Available Foods</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100 shadow-sm">
      <MyContainer>
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <IoReorderThreeOutline size={32} />
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            {/* logo */}
            <div className="flex gap-3 justify-center items-center ">
              <img className="w-10" src={splogo} alt="" />
              <Link to="/" className="text-2xl font-bold text-primary">
                SharePlate
              </Link>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>

          <div className="navbar-end">
            {/* dropdown */}
            {/* <div className="dropdown">
              <div tabIndex={0} role="button" className="btn m-1">
                <img
                  className="w-12 rounded-full border border-secondary p-1"
                  src="https://i.ibb.co.com/wFZ5C2D7/photo-1581184953987-5668072c8420.jpg"
                  alt=""
                />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div> */}
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
