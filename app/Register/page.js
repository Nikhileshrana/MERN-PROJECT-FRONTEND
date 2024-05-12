"use client"
import React, { useState } from 'react';
import axios from "axios";
import Box from '@/Components/Box'; // Make sure Box component is correctly imported

const MyForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        mail: '',
        passkey: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const response = await axios.post('https://mern-backend-nikhileshrana-9ace3f25.koyeb.app/createuser', formData);
            console.log('Form submitted:', response.data);
            window.location.href = "/";

        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error
        }
    };

    return (
        <>
            <Box heading={"Register Yourself"} subheading={"Create an account"} block4={"Created By Nihilesh Rana"} block3={
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder='Username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Name'
                        value={formData.name}
                        onChange={handleChange}
                    />


                    <input
                        type="email"
                        id="mail"
                        name="mail"
                        placeholder='Mail'
                        value={formData.mail}
                        onChange={handleChange}
                    />

                    <input
                        type="password"
                        id="passkey"
                        name="passkey"
                        placeholder='Passkey Numeric Only!.'
                        value={formData.passkey}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            } />
            <div className='darkanimback'></div>
            <div className='darkanimback2'></div>
            <div className='darkanimback3'></div>
            <div className='darkanimback4'></div>
            <div className='darkanimback5'></div>
        </>
    );
};

export default MyForm;
