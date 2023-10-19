import React from 'react';

import './News.css'

const News = () => {
 
  return (
    <><div className="news">
<div className="Nform">
<h1 className="form-heading">NEWS</h1>

<ul className="newslist">
  <li className="new">
    <h2>News 1</h2>
    <h5>New Gym Merchandise Arrives Just in Time for Summer !</h5>
    <h6>Get ready to sweat in style this summer with our brand-new line of gym merchandise.
         From stylish workout gear to reusable water bottles, we've got everything you need
          to upgrade your fitness game. Show off your dedication to a healthy lifestyle with our 
          latest collection, available now at the gym.</h6>
  </li>
  <li className="new">
    <h2>News 2</h2>
    <h5>Group Fitness Challenge: Join Now and Win Big! </h5>
    <h6>Ready to take your fitness journey to the next level? Join our latest group fitness challenge and stand a 
        chance to win amazing prizes! Whether you're looking to shed those extra pounds or build muscle, our challenge offers customized 
        plans to help you achieve your goals. Don't miss this exciting opportunity to transform your life.</h6>
  </li>
  <li className="new">
    <h2>News 3</h2>
    <h5>New Fitness Class Alert: Dance Your Way to Health! </h5>
    <h6>Dance enthusiasts, this one's for you! We're thrilled to announce the launch of our newest fitness class - DanceFit!
         Get your groove on while burning calories and having a blast. Join us every Wednesday evening for a
          fun-filled workout that will leave you smiling and sweating. It's not just a class; it's a dance party!</h6>
  </li>
  
</ul>
      </div>
    </div></>
  
  );
};

export default News;
