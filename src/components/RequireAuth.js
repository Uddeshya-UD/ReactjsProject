import Cookies from 'js-cookie';
import React from 'react';

const RequireAuth = ({ children }) => {
  const token = Cookies.get('jwt');
console.log("token: "+token)
  // if (!token) {
  //   // Redirect or handle unauthorized access
  //   return <Redirect to="/login" />;
  // }

  // // If the token exists, render the children components
  // return children;
};

export default RequireAuth;
