import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
function Auth({ children }) {
  const [loggedIn, setLoggedIn] = useState(true);
  useEffect(() => {
    const jwt = localStorage.getItem('jwt') || '';
    if (!jwt) {
      setLoggedIn(false);
    }
  }, [loggedIn]);

  if (!loggedIn) {
    return <Navigate to='/login' replace />;
  }
  return children;
}
export default Auth;
