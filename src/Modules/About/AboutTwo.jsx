import React from "react";
import AboutImage1 from "../../assets/aboutOne.png";
import play from "../../assets/play.png";

const AboutTwo = () => {
  return (
    <div>
      
      <div>
        <img src={AboutImage1} alt="About Background" className="h-[800px] w-full mt-24" />
      </div>

      
      <div className="text-center relative -top-[300px] right-[300px] text-black">
        <h1 className="font-bold text-3xl">Process behind the making</h1>
        <p className="mt-2">
          See how we make momos that you like from only the best ingredients.
        </p>

        
        <button className="h-12 w-52 mt-4 border-r-4   rounded-full border-2 bg-sky-800">
                    <img src={play} className="h-3 w-5 m-5"></img>
                    <span className="relative -top-11 -right-5">Watch the video</span>
                  </button>
      </div>
    </div>
  );
};

export default AboutTwo;
