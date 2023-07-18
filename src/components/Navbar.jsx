import React from 'react'
import { Link, useNavigate } from "react-router-dom"

function Navbar() {

    const navigate = useNavigate()


  return (
    <div className='rounded-div flex justify-between items-center h-20 font-semibold'>
        <Link to="/">
            <h1 className='text-2xl'>CRYPTO API</h1>
        </Link>
       
       
    </div>
  )
}

export default Navbar