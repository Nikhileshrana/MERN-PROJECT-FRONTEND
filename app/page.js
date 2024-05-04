"use client"
import React, { useState, useEffect } from 'react';
import axios from "axios";

const Page = () => {
  const [allUserData, setAllUserData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://mern-project-36gy.onrender.com/alluser");
        setAllUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const hello = () => {
    console.log("You pressed on Hello");
  };

  return (
    <>
      <div onClick={hello}>Hello</div>
      {/* Display specific properties of the user data */}
      <div>Country: {allUserData.country_name}</div>
      <div>City: {allUserData.city}</div>
      <div>Region: {allUserData.region}</div>
      {/* Add more properties as needed */}
    </>
  );
};

export default Page;
