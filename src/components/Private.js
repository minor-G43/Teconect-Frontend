import React from "react";
import { useState, useEffect } from "react";
import { Redirect } from 'react-router';
import axios from "axios";

const Private = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");

  const fetchPrivateDate = async () => {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    //   },
    // };

    try {
      if(localStorage.getItem("authToken")!==null || localStorage.getItem("authToken")!=="") {
        const loginToken = await axios.post(`https://tconectapi.herokuapp.com/api/auth/login/${localStorage.getItem("authToken")}`);
        // console.log(loginToken);
        if(loginToken.data.success===true) {
          // localStorage.setItem("authToken", localStorage.getItem("authToken"));
          <Redirect to='/users' />
        }
      }
    } catch (error) {
      localStorage.removeItem("authToken");
      setError("You are not authorized please login");
    }
  };

  fetchPrivateDate();

  // useEffect(() => {

    
  // }, []);
  return error ? (
    <span className="error-message">{error}</span>
  ) : (
    <Redirect to='/users' />
  );
};

export default Private;