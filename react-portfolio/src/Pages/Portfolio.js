import React from 'react';
import project1 from './../images/project1.png';
import project2 from './../images/project2.png';
import project3 from './../images/project3.png';
import project4 from './../images/project123.png';
import './../App.css'
const Portfolio = props => {
  return (
    <div className='container'>
    <h1> Portfolio </h1>
    <section>
      <div className="card" style={{width: '18rem'}}>
        <img src={ project1 } className="card-img-top" alt="image of a project" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://github.com/gfinnie01/Note-Taker" className="btn btn-primary">
            Note Taker
          </a>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img src={ project2 } className="card-img-top" alt="image of a project" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://github.com/gfinnie01/Team-Management" className="btn btn-primary">
            Team Manager
          </a>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img src={ project3 } className="card-img-top" alt="image of a project" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://github.com/gfinnie01/Object-Relational-Mapping" className="btn btn-primary">
            ORM Repository
          </a>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img src={ project4 } className="card-img-top" alt="image of a project" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://github.com/gfinnie01/README-Generator" className="btn btn-primary">
            README Generator
          </a>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Portfolio;