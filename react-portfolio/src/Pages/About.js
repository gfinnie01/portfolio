import React from 'react';
import PropTypes from 'prop-types';
import userpic from './../images/user.jpg'

const About = props => {
  return (
    <div>
      <h1> About </h1>
      <div className='about-text'>
        <img src={userpic} className='UserPic' alt='user picture'/>
    <p>Hello, my name is Grant Finnie. 
    </p>
    <p>Enthusiastic and motivated recent graduate from the UNC-Charlotte Full Stack Coding bootcamp, looking to grow my skills as a front end web developer in an innovative environment. </p>
      </div>
    </div>
  )
}

About.propTypes= {}

export default About;