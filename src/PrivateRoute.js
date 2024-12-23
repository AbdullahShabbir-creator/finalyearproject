import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('token') !== null;
  
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return children;
};


export default ProtectedRoute;