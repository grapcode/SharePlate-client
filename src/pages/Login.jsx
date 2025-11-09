import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';

const Login = () => {
  // 🔰 get authProvider Func
  const {
    signInWithEmailAndPasswordFunc,
    signInWithGoogleFunc,
    user,
    setUser,
    setLoading,
  } = useContext(AuthContext);

  // 🔰 After successful signin, navigate to card id
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  // ⚡ show password
  const [show, setShow] = useState(false);

  // 🎯  Forgot password
  const emailRef = useRef(null);

  // ♻️ user signin thakle -- signin dekhabe na
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true }); // লগইন থাকলে আগের পেজে পাঠাও
    }
  }, [user, navigate, from]);

  // ⚡ handle signin/login from
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // ⚡ signin with email func
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setLoading(false);
        // 🍁 form signup 3rd: sendEmailVerification condition
        // if (!res.user.emailVerified) {
        //   toast.error('Your email is not verified.');
        //   setUser(null);
        //   return;
        // }
        const user = res.user;
        toast.success('Sign up was successful.');
        setUser(user);
        navigate('/');
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
  };

  // 🎯 handle Forgot password
  const handleForgotPassword = () => {};

  //   💥 google signin

  const handleGoogleSignin = () => {
    setLoading(true);
    signInWithGoogleFunc()
      .then((res) => {
        setLoading(false);
        toast.success('google signin successful');
        setUser(res.user);
        navigate('/');
      })
      .catch((e) => {
        setLoading(false);
        toast.error(e.message);
      });
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen w-screen -mx-[calc((100vw-100%)/2)]">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-3xl text-center pt-6 font-bold ">Welcome Back</h1>
          {/* ⚡ form */}

          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              {/* email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                // 🎯 Forgot password email value: system-2
                ref={emailRef}
                className="input"
                placeholder="Email"
              />
              {/* ⚡ password */}
              <div className="space-y-2 relative">
                <label className="label">Password</label>
                <input
                  type={show ? 'text' : 'password'}
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-8 bottom-5 cursor-pointer z-50"
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
              {/* 🎯 Forgot password */}
              <div>
                <span
                  to="/forgot-password"
                  onClick={handleForgotPassword}
                  className="link link-hover"
                >
                  Forgot password?
                </span>
              </div>
              {/* login btn */}
              <button className="btn btn-primary border-0 text-white mt-4">
                Login
              </button>

              {/* 💥 Google btn */}
              <button
                type="button"
                onClick={handleGoogleSignin}
                className="btn mt-2 bg-white text-black border-[#e5e5e5]"
              >
                <FcGoogle />
                Login with Google
              </button>
              <p className="text-sm text-black/60">
                Don't have account?{' '}
                <Link
                  to="/signup"
                  className="text-secondary hover:text-primary font-medium underline "
                >
                  Sign Up
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
