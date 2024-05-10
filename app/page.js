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
      const response = await axios.get("https://mern-project-backend-93y0.onrender.com/alluser");
      setAllUserData(response.data);


      const { username, name, mail } = parseCookies();
      console.log(parseCookies().username);

      if (username && name && mail) {
        setLoginStatus("Logged In");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const destroycookies = () => {
    destroyCookie(null, 'username');
    destroyCookie(null, 'name');
    destroyCookie(null, 'mail');
    setLoginStatus("Logged Out");
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

      {loginStatus === "Logged In" ? (
        <div>
          <h2>User Information:</h2>
          <p>Username: {parseCookies().username}</p>
          <p>Name: {parseCookies().name}</p>
          <p>Email: {parseCookies().mail}</p>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}

      <h2>{logindata}</h2>


      {loginStatus === "Logged In" &&(
        <button onClick={destroycookies}>Logout</button>
      )}

      {loginStatus !== "Logged In" && (
        <Link href="/Login">Login Now.</Link>
      )}
    </>
  );
};

export default Page;
