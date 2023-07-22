import { NavLink } from 'react-router-dom';
import css from './AppBar.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={css.link} to="/contacts">
            Contacts
          </NavLink>
        )}
      </nav>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <div className={css.menu}>
          <NavLink className={css.link} to="/register">
            Register
          </NavLink>
          <NavLink className={css.link} to="/login">
            Login
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default AppBar;