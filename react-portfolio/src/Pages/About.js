import React from 'react';
import PropTypes from 'prop-types';
import userpic from './../images/user.jpg'

const About = props => {
  return (
    <div>
      <h1> About </h1>
      <div className='about-text'>
        <img src={userpic} className='UserPic' alt='user picture'/>
    <p>gnkjsdngkjsdgnjksdgnsdngs dsfnsdknfdjsknf fn sdjkfn sdjkfn sdjkf nsdkjfn sdkf nsd
    </p>
    <p>kdasgbsdkbgksdjb gksdbgkdsbgkjdsbgsdjkgbsdkgjbdsg</p>
      </div>
    </div>
  )
}

About.propTypes= {}

export default About;