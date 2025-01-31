import { CiFacebook } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="flex m-16 ml-36">
        {/* Logo and Description */}
        <div className="w-96">
          <NavLink to="/" className="flex items-center gap-x-5 mb-8">
            <img src={logo} alt="logo" className="h-10" />
            <span className="text-green-900 font-bold text-4xl">Momos</span>
          </NavLink>
          <p>
            Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
            molestie. Volutpat quis egestas porttitor turpis sit in. Lorem nunc
            nullam morbi urna amet suspendisse nullam ac vivamus.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex ml-36">
          <div className="flex flex-col w-36 items-left gap-y-3">
            <h1 className="text-green-900 font-bold text-2xl">Momos</h1>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/menu">Our Menu</NavLink>
            <NavLink to="/services">Our Services</NavLink>
            <NavLink to="/advice">Allergy Advice</NavLink>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col w-36 ml-24 mr-24 items-left gap-y-3">
            <span className="text-green-900 font-bold text-2xl">Legals</span>
            <NavLink to="/terms">Terms & Conditions</NavLink>
            <NavLink to="/privacy">Privacy Policy</NavLink>
            <NavLink to="/support">Support</NavLink>
          </div>

          {/* Social Media Links */}
          <div>
            <h1 className="text-green-900 font-bold text-2xl">Follow Us</h1>
            <div className="flex flex-row gap-x-5 mt-5">
              <NavLink to="https://facebook.com" target="_blank">
                <CiFacebook className="bg-black text-white rounded-full size-8" />
              </NavLink>
              <NavLink to="https://tiktok.com" target="_blank">
                <AiFillTikTok className="rounded-full size-8" />
              </NavLink>
              <NavLink to="https://instagram.com" target="_blank">
                <FaSquareInstagram className="rounded-full size-8" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-center m-10 text-gray-400">
        <p>Copyright © {new Date().getFullYear()} Everest Momo Pvt Ltd. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
