import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
    const error= useRouteError();
    console.log(error);
    const navigate = useNavigate();
  return (
    <div>
      <h1>{error.statusText}</h1>
      <p>{error.error.message}</p>
      <button onClick={()=>navigate('/')}>Go back</button>
    </div>
  )
}

export default Error
