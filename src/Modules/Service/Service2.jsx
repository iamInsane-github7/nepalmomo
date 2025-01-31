import React from "react";
import SerFood  from "../../assets/SerFood.jpg";
import play from "../../assets/play.png"; 
const Service2 = () => {
  return (
    <div className="mt-12 text-white bold">
      <img src={SerFood} className="w-full  h-[600px]" alt="" />

      <div className="relative -top-72 p-24">
        <h1 className="text-3xl ">Dine with us</h1>
        <p>
          Enjoy our momo in the confort of your own home with our delivery
          services
        </p>
        <button className="mt-4 border-2 bg-sky-950 rounded-3xl p-2">
          <img src={play} alt="" className="w-5 h-4 inline" />
          Watch the Video
        </button>
      </div>
    </div>
  );
};

export default Service2;
