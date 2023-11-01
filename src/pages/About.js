import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate ();

    const naveHandler = () => {
        navigate('/Products')
    }
  return (
    <>
    <div>
      <h1>About us page</h1>
    </div>
    <div>
    <button onClick={naveHandler}>Click for Products</button>
    </div>
    </>
  )
}

export default About
