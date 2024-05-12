"use client"
import React, { useState } from 'react'
import axios from "axios";
import cors from 'cors';
import Link from 'next/link';
import { parseCookies } from 'nookies';
import { destroyAllCookies } from 'nookies';
import Box from "@/Components/Box";
const page = () => {
    const [usersdata, setusersdata] = useState([]);
    const apifetch=async()=>{
        try
        {
          const response = await axios.get("https://semantic-nerita-nikhileshrana-a6770589.koyeb.app/alluser");
          console.log(response.data);
          setusersdata(response.data);
        }
        catch(e){console.log(e);}
      }

      
       
  return (
    <>


      <Box header={"All Users Data"} subheading={"Retreived from mongodb"}
      block3={<ul>
        {usersdata.map((user) => (
          <li key={user.id}>{user.name} , {user.mail} , {user.passkey} , {user.username}</li>
        ))}
      </ul>} 
      block4={<button onClick={apifetch}>Fetch Data</button>}></Box>
      <div className='darkanimback'></div>
      <div className='darkanimback2'></div>
      <div className='darkanimback3'></div>
      <div className='darkanimback4'></div>
      <div className='darkanimback5'></div>


    </>
)
}

export default page