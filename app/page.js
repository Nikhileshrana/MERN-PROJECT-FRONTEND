"use client"
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Link from 'next/link';
import Cookies from 'js-cookie';
import Box from "@/Components/Box";

const page = () => {

  const [heading, setHeading] = useState("Nikhilesh Rana's Panel");
  const [subheading, setSubheading] = useState("Welcome to my panel!");
  const [login, setLogin] = useState(false);
  const [block3, setBlock3] = useState(<Link href="Login">Login</Link>);
  const [block4, setBlock4] = useState("Created by Nikhilesh Rana"); 
  

  useEffect(() => {
    if(Cookies.get('username'))
    {
      setHeading("Welcome "+Cookies.get('username'));
      setSubheading("You are logged in as "+Cookies.get('username'));
      setLogin(true);
      setBlock3(<Link href="Alldata">View All Data</Link>);
      setBlock4(<Link href="/" onClick={()=>{
          Cookies.remove('username');
          Cookies.remove('mail');
          Cookies.remove('name');
          Cookies.remove('passkey');
          window.location.href = '/';
      }}>Logout</Link>);
    }
  },[]);



  return (
    <>
      <Box heading={heading} subheading={subheading} login={login} block3={block3} block4={block4}/>

      <div className='darkanimback'></div>
      <div className='darkanimback2'></div>
      <div className='darkanimback3'></div>
      <div className='darkanimback4'></div>
      <div className='darkanimback5'></div>
    </>
  )
}

export default page