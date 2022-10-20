import React from "react";
import resumepic from './../images/resume.png'


const Resume = (props) => {
  return (
    <div>
      <h1>Resume</h1>
  
      <section className="resume-picture">
      <img src={ resumepic } className="card-img-top" alt="image of a resume" />

      </section>

    </div>
);
};

export default Resume;
