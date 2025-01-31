import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react"; // ✅ Import Auth0

function SignUp() {
  const { loginWithRedirect } = useAuth0(); // ✅ Auth0 Hook for login

  // ✅ State Hooks
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

  // ✅ Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (confirmPassword !== password) {
      alert("Passwords do not match");
      return;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return;
    }

    console.log(name, email, password, confirmPassword, phone);

    // ✅ Reset Form Fields
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPhone('');
  };

  // ✅ Handle Clicks Outside Form
  const handleClickOutside = (event) => {
    if (event.target.tagName === "DIV") {
      alert("You clicked outside the form!");
    }
  };

  return (
    <div className="flex pt-7 justify-center" onClick={handleClickOutside}>
      <div className="shadow-2xl shadow-slate-700 rounded-xl">
        <img
          className="h-72"
          src="https://scribie.com/assets/front/illustrations/Welcome-to-scribie-512x391.svg"
          alt="Welcome Illustration"
        />
      </div>

      <div>
        <form onSubmit={handleSubmit} className="w-[484px] p-5 m-auto gap-y-1 flex flex-col rounded-xl shadow-2xl shadow-slate-700">
          <label htmlFor="name">Name*</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="border-2 outline-none p-1 border-slate-400 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            id="name"
            type="text"
            placeholder="Enter Your Name"
            value={name}
            required
          />

          <label htmlFor="email">Email*</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 outline-none border-slate-400 p-1 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            id="email"
            type="email"
            placeholder="Enter Your Email"
            value={email}
            required
          />

          <label htmlFor="password">Password*</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            type="password"
            className="border-2 outline-none border-slate-400 p-1 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Your Password"
            value={password}
            required
          />

          <label htmlFor="CPassword">Confirm Password*</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="CPassword"
            type="password"
            className="border-2 outline-none border-slate-400 p-1 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Confirm Your Password"
            value={confirmPassword}
            required
          />

          <label htmlFor="phone">Phone*</label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            id="phone"
            type="tel"
            className="border-2 outline-none border-slate-400 p-1 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Your Phone Number"
            value={phone}
            required
          />

          {/* ✅ Sign Up Button */}
          <input
            className="font-medium mt-2 bg-teal-500 text-white p-2 rounded-2xl"
            type="submit"
            value="Sign Up"
          />

          {/* ✅ Login with Auth0 Button (Redirects Back to the Page) */}
          <button
            type="button"
            className="font-medium mt-2 bg-blue-600 text-white p-2 rounded-2xl hover:bg-blue-700 transition"
            onClick={() => loginWithRedirect({ returnTo: window.location.origin })}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
