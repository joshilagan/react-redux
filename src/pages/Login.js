import React from 'react'
import { login, logout } from "../store";
import { useState } from 'react'
//useDispatch is for getting states
//useSelector is for modifying states 
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
    const [newUsername, setNewusername] = useState("")
    //assign the useDispatch function to a variable so we
    //can use it anywhere on this page
    const dispatch = useDispatch()
    //assign useSelector() to a variable called username, set the parameter to get the username value in the store.js
    //user is the user redux or key in the store function in store.js, value is the value of the redux or the key in the userSlice object, username is the value
    //of the username
    const username = useSelector((state) => state.user.value.username)

  
  return (
    <div>
    <h1>{/* replace the this is the login page with {username} */}
        {/* THIS IS THE LOGIN PAGE */}
        {username}
        <input onChange={(e) => {
            setNewusername(e.target.value)
        }}/>
        {/* call out the login function here from store.js using
        the dispatch(). the parameter inside this will be the payload in store.js, we'll give this a payload value of "username: newUsername" */}
        <button onClick={() => dispatch(login({ username: newUsername}))}>Submit Login</button>
        {/* call out the logout function here from store.js using the dispatch()
        we dont need to put anything inside the parameter */}
        <button onClick={() => dispatch(logout())}>Logout</button>
    </h1>
    </div>
  )
}
export default Login