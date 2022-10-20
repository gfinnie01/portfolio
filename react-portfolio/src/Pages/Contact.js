import React from "react";

const Contact = (props) => {
  return (
    <div>
      <h1> Contact </h1>
      <form>
        <div className="mb-3">
          
        <label for="exampleFormControlInput1" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="your name"
            placeholder="Name"
          />
          
          <label for="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">
            message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            ></textarea>
        </div>
            <div className="mb-3">
            <button className="btn btn2">
              submit
            </button>
            </div>
      </form>
    </div>
  );
};

export default Contact;
