"use client"
import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import Link from 'next/link';
import Box from "@/Components/Box";
import Cookies from 'js-cookie';





const Page = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userdata, setUserData] = useState({}); // Initialize as object instead of array

    const formSubmit = async(e) => {
        e.preventDefault();
        const response = await axios.post("https://semantic-nerita-nikhileshrana-a6770589.koyeb.app/login",{
            user_username: username,
            user_password: password
        });
        console.log(response.data);
        setUserData(response.data);

        Cookies.set('username', response.data.username);
        Cookies.set('mail', response.data.mail);
        Cookies.set('name', response.data.name);
        Cookies.set('passkey', response.data.passkey);
        window.location.href = "/";
    }

    useEffect(() => {
        // Print cookies after they have been set
        console.log("Username Cookie:", Cookies.get('username'));
        console.log("Mail Cookie:", Cookies.get('mail'));
        console.log("Name Cookie:", Cookies.get('name'));
        console.log("Passkey Cookie:", Cookies.get('passkey'));
    }, [userdata]); // Run the effect whenever userdata changes

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <>
            <Box heading={"Login"} subheading={"Enter Credentials to Continue"} block3={
                <form onSubmit={formSubmit}>
                    <input onChange={handleUsernameChange} type="text" placeholder="Username" />
                    <input onChange={handlePasswordChange} type="password" placeholder="Password" />
                    <button type="submit">Login</button>
                </form>
            } block4={<Link href="Register">Don't have an account? Register here.</Link>}></Box>
            <div className='darkanimback'></div>
            <div className='darkanimback2'></div>
            <div className='darkanimback3'></div>
            <div className='darkanimback4'></div>
            <div className='darkanimback5'></div>
        </>
    )
}

export default Page;
