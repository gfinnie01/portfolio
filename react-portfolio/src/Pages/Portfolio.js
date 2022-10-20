import React from 'react';
import project1 from './../images/project1.png'

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
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img src={ project1 } className="card-img-top" alt="image of a project" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <div className="card" style={{width: '18rem'}}>
        <img src={ project1 } className="card-img-top" alt="image of a project" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Portfolio;