import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.loginForm}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input className={css.input} type="password" name="password" />
        </label>
        <button className={css.formBtn} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;