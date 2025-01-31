import React from "react";
import Lady from '../../assets/lady.png'
<assets></assets>

const AboutOne = () => {
  return (
    <div className="flex gap-44 justify-center w-[1000px] items-center m-auto">
      <div className="w-[450px] p-10">
        <h1 className="mb-10">About us</h1>
        <p>WE PRIDE OURSELF ON</p>
        <p>
          <span className="text-orange-600">Our authentic momo recipes</span>{" "}
          passed down through generations
        </p>
      </div>
      <div className="w-[550px]">
        <img src={Lady} alt="Lady" className="w-96 h-96 m-auto justify-center" />
      </div>
    </div>
  );
};

export default AboutOne;
