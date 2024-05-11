"use client";
import React from 'react';

const page = () => {

  const submitform = (e) => {
    e.preventDefault();
    window.location.href = 'https://weak-worm-pajamas.cyclic.app';
  }

  return (
    <>
    <form onSubmit={submitform} action='https://weak-worm-pajamas.cyclic.app/login' method='post'>
        <label for="my_username">Enter Username</label>
        <input type='text' name='my_username' id='my_username'/>

        <label for="my_passkey">Enter Passkey</label>
        <input type='password' name='my_passkey' id='my_passkey'/>
    
        <button type='submit'>Submit Now</button>
    </form>
    </>
  )
}

export default page