import React from "react";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Menu from "./Pages/Menu";
import Momo from "./Pages/Momo";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Advice from "./Pages/Advice";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";
import { Routes, Route } from "react-router-dom";
import Success from "./Pages/Success";
import Failure from "./Pages/Failure";
import Profile from "./Pages/Profile";
import ProductDescription from "./Pages/ProductDescription";
import Footer from "./Components/Footer";
import Protected from "./Pages/Protected";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Momo />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/menu" element={<Protected Comp={Menu} />} />
        <Route
          path="/ProductDescription/:id"
          element={<ProductDescription />}
        />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Cart" element={<Protected Comp={Cart} />} />
        <Route path="/Advice" element={<Advice />} />
        <Route path="/Payment" element={<Protected Comp={Payment} />} />
        <Route path="/Success" element={<Success />} />
        <Route path="/Failure" element={<Failure />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
