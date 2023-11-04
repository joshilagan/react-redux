import React from 'react'
// we can display the input's username here by importing the useSelector function here
import { useSelector } from 'react-redux';
const Home = () => {
  //then assign the modified state thru useSelector to username variable.
  const username = useSelector((state) => state.user.value.username)
  return (
    // use the username variable here
    <h1>Home : {username}</h1>
  )
}

export default Home