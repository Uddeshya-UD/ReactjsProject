import Cookies from 'js-cookie';

const RequireAuth = () => {
  const token = Cookies.get('jwt');

  if (!token) {
    return false
  } else {
    return true
  }

};

export default RequireAuth;
