import React, { useEffect } from 'react';
import '../css/News.css';
import { useNavigate } from 'react-router-dom';
import RequireAuth from '../authenticator/RequireAuth';

const News = () => {
  // Replace this with your actual authentication logic
  const isAuthenticated = RequireAuth(); // You should use your authentication logic here
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      // Redirect to the login page
      navigate('/Login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return (
      <div className="news">
        <div className="Nform">
          <h1 className="form-heading">NEWS</h1>
          <ul className="newslist">
          <li className="new">
              <h2>News 1</h2>
              <h5>New Gym Merchandise Arrives Just in Time for Summer!</h5>
              <h6>Get ready to sweat in style this summer with our brand-new line of gym merchandise. From stylish workout gear to reusable water bottles, we've got everything you need to upgrade your fitness game. Show off your dedication to a healthy lifestyle with our latest collection, available now at the gym.</h6>
            </li>
           
            <li className="new">
              <h2>News 2</h2>
              <h5>New Gym Merchandise Arrives Just in Time for Summer!</h5>
              <h6>Get ready to sweat in style this summer with our brand-new line of gym merchandise. From stylish workout gear to reusable water bottles, we've got everything you need to upgrade your fitness game. Show off your dedication to a healthy lifestyle with our latest collection, available now at the gym.</h6>
            </li>
            <li className="new">
              <h2>News 3</h2>
              <h5>New Gym Merchandise Arrives Just in Time for Summer!</h5>
              <h6>Get ready to sweat in style this summer with our brand-new line of gym merchandise. From stylish workout gear to reusable water bottles, we've got everything you need to upgrade your fitness game. Show off your dedication to a healthy lifestyle with our latest collection, available now at the gym.</h6>
            </li>
      
          </ul>
        </div>
      </div>
    );
  }

  return null; // This return statement is not necessary
};

export default News;
