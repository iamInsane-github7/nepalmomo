import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare, FaInstagram, FaRegUserCircle } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { useContext } from "react";
import { cartContext } from "../Context/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";

import logo from "../assets/logo.png";

const NavBar = () => {
  const { isAuthenticated,logout,user } = useAuth0();

  console.log(user);
  const { state } = useContext(cartContext);

  const totalItems = state.cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div className="flex justify-around">
      <div>
        <NavLink to="/" className="flex items-center gap-x-5">
          <img src={logo} alt="logo" className="h-10" />
          <h1 className="text-green-900 font-bold">Momo</h1>
        </NavLink>
      </div>

      <div className="flex items-center gap-6 text-slate-400">
        <NavLink to="/About">About Us</NavLink>
        <NavLink to="/Menu">Our Menu</NavLink>
        <NavLink to="/Services">Our Services</NavLink>
        <NavLink to="/Advice">Advice Allergy</NavLink>
        {isAuthenticated ? (
          <NavLink
            onClick={() => {
              logout({ returnTo: window.location.origin });
            }}
          
          >
            LogOut
          </NavLink>
        ) : (
          <div className="space-x-3">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signUp">Sign Up</NavLink>
          </div>
)}
        

        <NavLink to="/Cart" className="relative">
          <FiShoppingCart size={40} />
          <span className="p-1 bg-red-600 text-white rounded-full absolute top-0 right-0 w-5 h-5 flex justify-center items-center">
            {totalItems}
          </span>
        </NavLink>
      </div>

      <div className="flex items-center gap-x-6">
        <NavLink to="https://www.facebook.com" target="_blank">
          <FaFacebookSquare
            size={40}
            className="p-1 bg-black text-white rounded-full"
          />
        </NavLink>
        <NavLink to="https://www.instagram.com" target="_blank">
          <FaInstagram
            size={40}
            className="p-1 bg-black text-white rounded-full"
          />
        </NavLink>
        <NavLink to="https://www.tiktok.com" target="_blank">
          <AiFillTikTok
            size={40}
            className="p-1 bg-black text-white rounded-full"
          />
        </NavLink>

        <NavLink
          className="bg-orange-600 hover:bg-orange-400 w-32 rounded-3xl flex justify-center items-center h-12 text-white"
          to="/contact"
        >
          Contact Us
        </NavLink>

        {isAuthenticated && user ? (
          <NavLink
            className="rounded-full flex justify-center items-center"
            to="/Profile"
          >
            <img
              className="h-10 rounded-full"
              src={user.picture}
              alt="User Profile"
            />
          </NavLink>
        ) : (
          <div>
            <FaRegUserCircle
              size={40}
              className="p-1 bg-black text-white rounded-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
