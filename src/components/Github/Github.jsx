/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// import { response } from 'express'
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    // MEthod 1

/*
    const[data,setData] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/users/himanshu-singh07')
        .then(response => response.json())
        .then((data) =>{
            console.log("Data", data)
            // alert(data)
            setData(data);
        })
    },[])*/

    // Method2

    const data = useLoaderData()
  return (
    <div className='shadow-xl text-right m-4 p-4 bg-cyan-900 text-white font-semibold text-2xl'>Github Follwers :{data.followers}
        <h2>{data.username}</h2>
        <img width={300} src={data.avatar_url} alt="GIT PICTURE" />

    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
   const response= await fetch('https://api.github.com/users/himanshu-singh07')

   return response.json();
}