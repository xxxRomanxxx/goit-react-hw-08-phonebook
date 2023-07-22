import { useDispatch } from 'react-redux';
import css from './UserMenu.module.css';
import { useAuth } from 'hooks/useAuth';
import { logout } from 'redux/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};