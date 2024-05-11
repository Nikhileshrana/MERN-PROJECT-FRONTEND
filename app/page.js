"use client"
import React, { useState, useEffect } from 'react';
import axios from "axios";
import Form from "@/Components/Form";
import Link from 'next/link';
import { destroyCookie, parseCookies } from 'nookies';





const Page = () => {
  const [allUserData, setAllUserData] = useState([]);
  const [logindata, setLogindata] = useState("");
  const [loginStatus, setLoginStatus] = useState("Login");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://weak-worm-pajamas.cyclic.app/alluser");
      setAllUserData(response.data);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Form/>
      
      <ul>
        {allUserData.map(user => (
          <li key={user._id}>
            Username: {user.username}, Name: {user.name}, Passkey: {user.passkey}, Email: {user.mail}
          </li>
        ))}
      </ul>


        <Link href="/Login">Login Now.</Link>
    </>
  );
};

export default Page;
