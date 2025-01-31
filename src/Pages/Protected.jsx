import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Protected = ({ Comp }) => {
  console.log(Comp);
  console.log(Protected);
  const {  isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated ) {
      return navigate("/Login");
    }
  }, [ navigate,isAuthenticated ]);
  return <Comp />;
};

export default Protected;
