import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams();
    const[profile,setProfile] = useState(null)
  return (
    <div className='text-center bg-slate-400 font-semibold text-xl p-4 m-8 shadow-2xl text-white'>
        <h2>User: {userid}</h2>

    </div>
  )
}

export default User