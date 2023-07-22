import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shoudeRedirect = !isRefreshing && !isLoggedIn;

  return shoudeRedirect ? <Navigate to={redirectTo} /> : Component;
};