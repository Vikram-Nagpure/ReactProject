import React from 'react';
import './App.css';

function Card() {
  return (
    <div className="container">
      <div className="row align-items-center card-container">
        <div className="col-12 col-md-6 card-content">
          <h1>Hi, I'm Vikram Nagpure.</h1>
          <p>A FREELANCER WEB DEVELOPER FROM INDIA. I CONVERT CUSTOM <br /> WEB DESIGNS TO BOOTSTRAP TEMPLATES.</p>
          <p>I MAKE YOUTUBE VIDEOS AND WRITE BLOGS.</p>
          <button className="btn btn-primary">I'M AVAILABLE</button><br />
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-square-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
        <div className="col-12 col-md-6 card-image">
          <img
            src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg"
            alt="Programming Illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
