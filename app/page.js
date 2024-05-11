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

      const loginresponse = await axios.get("https://weak-worm-pajamas.cyclic.app/login");
      console.log(loginresponse.data);
      setLogindata(loginresponse.data);

      const { username, name, mail } = await parseCookies();

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

      {logindata.username}
      {logindata.name}
      {logindata.mail}
      {logindata.passkey}


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
