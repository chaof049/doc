import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Dropdown = () => {
    const [drop,setDrop] = useState(false)
    const navigate = useNavigate()
    const handleLogout =()=>{
      localStorage.removeItem('token')
      navigate('/')
      window.location.reload()
    }
  return (
    
    <div className='flex justify-center items-center cursor-pointer'>
    <img src="https://img.freepik.com/free-vector/hand-drawn-doctor-cartoon-illustration_23-2150680327.jpg?w=740&t=st=1704124687~exp=1704125287~hmac=933a50b5c8c33b3f5b7e77c673a2b8bc502d3d9ebb24f97614fab2e309585a0b" className=' border-[1px] h-10 w-10 rounded-full' onClick={()=>{setDrop(!drop)}} />
      <div className={`h-fit p-2 fixed top-12 right-5 sm:right-16 z-10 ${(drop===true)?'solid':'hidden'} `}>
          <div className={`bg-white text-sm text-[#3a3939] rounded-xl px-2 py-5 w-[14rem]`} style={{boxShadow: '0 4px 6px -1px rgba(0, 0, 256, 0.2)', }} >
            <Link to='/editprofile'>
              <button className={`w-full text-left hover:bg-blue-900 hover:text-[#e8e7e7] rounded-md py-2 my-1 px-2`}>
                My Profile
              </button>
            </Link>
            <Link to='/appointments'>
              <button className={`w-full text-left hover:bg-blue-900 hover:text-[#e8e7e7] rounded-md py-2 my-1 px-2`}>
                My Appointments
              </button>
            </Link>
            <div className='h-[0.8px] bg-[#cbcaca] my-3'></div>
              <button className={`w-full text-left hover:bg-blue-900 hover:text-[#e8e7e7] rounded-md py-2 my-1 px-2`} onClick={()=>handleLogout()}>Logout</button>
          </div>
      </div>
  </div>
  )
}

export default Dropdown
