import React from 'react'

const Form = () => {
  return (
    <>
    <div>Sign-Up</div>
    <form action='https://mern-project-backend-93y0.onrender.com/createuser' method='post'>
        <label for="usernamee"></label>
        <input id='username' name='username' type='text' placeholder='Eg.Astrodude'/>

        <label for="name"></label>
        <input name='name' id='name' type='text' placeholder='Eg.Nikhilesh Rana'/>

        <label for="mail"></label>
        <input id='mail' name='mail' type='mail' placeholder='Eg. hi@gmail.com'/>

        <label for="passkey"></label>
        <input id='passkey' name='passkey' type='number' typeof='password' placeholder='Secret PIN'/>

        <button type='submit'></button>
    </form>
    </>
  )
}

export default Form