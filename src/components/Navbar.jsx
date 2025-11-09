import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import splogo from '../assets/shareP-logo.png';
import MyContainer from './my-components/MyContainer';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { FadeLoader } from 'react-spinners';

const Navbar = () => {
  // 🔰 get user from authProvider
  const { user, setUser, signoutUserFunc, loading } = useContext(AuthContext);
  console.log(user);

  // ⚡ handle sign out btn
  const handleSignout = () => {
    // signOut(auth)
    signoutUserFunc()
      .then(() => {
        toast.success('Signout success!');
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

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

          {/* 💥 user condition 💥 */}
          <div className="navbar-end">
            {/* dropdown start*/}
            {loading ? (
              <FadeLoader />
            ) : user ? (
              <div className="dropdown relative text-center p-1">
                <button tabIndex={0} role="button" className="cursor-pointer">
                  <img
                    className="md:size-15 size-12 rounded-full"
                    src={
                      user?.photoURL ||
                      'https://img.icons8.com/?size=80&id=108652&format=png'
                    }
                    alt=""
                    title={user?.displayName}
                  />
                </button>

                {/* under div is dropdown */}

                <div
                  tabIndex="-1"
                  className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm absolute top-16 md:-left-18 -left-38"
                >
                  <li>
                    <Link to="/addFood">Add Food</Link>
                  </li>
                  <li>
                    <Link to="/manageFoods">Manage Foods</Link>
                  </li>
                  <li>
                    <Link to="/myRequests">My Requests</Link>
                  </li>

                  <button
                    onClick={handleSignout}
                    className="btn btn-primary border-0 "
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            )}
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
