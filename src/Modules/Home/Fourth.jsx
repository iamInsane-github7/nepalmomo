import React from "react";
import chef from "../../assets/chef.png";
import play from "../../assets/play.png";
import QualityFood from "../../assets/QualityFood.png";
import Private from "../../assets/Private.png";
import Button from "../../Components/Button";

const Fourth = () => {
  return (
    <>
      <div className="mt-24 ">
        <h1 className="text-center text-3xl">
          <span className="text-orange-600">We offer People</span> the service
          they want
        </h1>
        <div
          className="h-[800px] w-full bg-contain bg-center bg-no-repeat text-center p-72 text-white "
          style={{ backgroundImage: `url(${chef}) ` }}
        >
          <h1 className="text-4xl">Process Behind the Making</h1>
          <p>See how only chiefs cooks the best momos</p>
          <button className="h-12 w-52 mt-4 border-r-4   rounded-full border-2 bg-sky-800">
            <img src={play} className="h-3 w-5 m-5"></img>
            <span className="relative -top-11 -right-5">Watch the video</span>
          </button>
        </div>
            
      </div>
      <div className="flex flex-col  w-[80%] m-auto p-2 justify-center items-center text-center">
        <div className="flex gap-44">
        <div className=" border-2 p-2 w-[25%] ">
          <img
            src={QualityFood}
            alt=""
            className="h-20 m-auto justify-center items-center text-center mb-10"
          />
          <h1 className="font-bold  text-2xl mb-10 m-auto">Quality Food</h1>
          <p className="text-cyan-100">
            Only the best food with top Quality products and ingredients
          </p>
        </div>
        <div className=" p-2 border-2 w-[25%]">
          <img src={Private} alt="" />
          <h1>Quality Food</h1>
          <p>Only the best food with top Quality products and ingredients</p>
        </div>
        <div className="p-2  border-2 w-[25%]">
          <img src={QualityFood} alt="" />
          <h1>Quality Food</h1>
          <p>Only the best food with top Quality products and ingredients</p>
        </div >
        
        
        
        </div>
        <Button  title="Explore our Service"/>
      </div>
      
    </>
  );
};
export default Fourth;
