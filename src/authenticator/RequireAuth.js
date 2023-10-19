import Cookies from 'js-cookie';

const RequireAuth = () => {
  const token = Cookies.get('jwt');
  console.log("token: " + token);

  if (!token) {
    return false
  } else {
    return true
  }

};

export default RequireAuth;
