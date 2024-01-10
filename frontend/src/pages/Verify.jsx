import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Verify = () => {
    const [loading,setLoading] = useState(true)
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    useEffect(()=>{
        axios.patch(`http://localhost:8000/users/verify-email`,{},{
            headers:{
                Authorization: `${token}`
            }
        })
        .then(res=>{
            console.log(res.data)
            setLoading(false)
        })
        .catch(err=>{
            console.log(err.message)
        })
    },[])

  return (
    <>
      {
        !loading?<>email verified user registration successful</>:<>verifying email.....</>
      }
    </>
  )
}

export default Verify
