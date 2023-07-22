import { useSelector } from 'react-redux';
import { getUser, getIsLoggedIn, getRefreshing } from 'redux/selector';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getRefreshing);
  const user = useSelector(getUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};