import React, { Fragment } from "react";
import image from "../../images/time.jpg";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='container'>
          <h1 className='x-large'>Event Scheduler</h1>
          <p className='lead'>
            Schedule your event or task according to date or time
          </p>
          <div className='container'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
