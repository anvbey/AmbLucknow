import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Link to='/'>Go to home</Link>
    </div>
  )
}

export default About
