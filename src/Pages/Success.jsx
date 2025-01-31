import React from "react";
import img from "../assets/success.png";
import { useSearchParams } from "react-router-dom";

const Success = () => {
 const [SearchParams] = useSearchParams();
 const res=SearchParams.get("data");
 console.log(res)
 const decoded = atob(res);
 console.log(decoded);
 let x=JSON.parse(decoded);
 console.log(x);
  return (
    <div className="flex flex-col justify-center rounded-xl border-2 w-96 shadow-xl m-auto mt-20 p-2">
      <h1>Payment Success</h1>
      <img className="h-44 w-44 text-center" src={img} alt="" />
      <h1>Payment Success</h1>
      <p>
        Total Amount :Rs
        <span className="text-sm text-red-600 underline"> 
          </span>
      </p>
        <p>
          Status:
          <span className="text-sm text-red-600 underline"> 
          </span>
        </p>
      <p>
        Transaction Id:
        <span className="text-sm text-red-600 underline"> 
        </span>
      </p>
    </div>
  );
};

export default Success;
