"use client"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Form from "@/Components/Form"
import Link from 'next/link'

const Page = () => {
  const [allUserData, setAllUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://mern-project-backend-93y0.onrender.com/alluser");
        setAllUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <Form/>
      
      <ul>
        {allUserData.map(user => (
          <li key={user._id}>
            Username: {user.username}, Name: {user.name}, Passkey: {user.passkey} , Email : {user.mail}
          </li>
        ))}
      </ul>

      <Link href="/Login">Login Now.</Link>
      <Link href="/UploadAudio">Upload Data Here</Link>

    </>
  );
};

export default Page;
