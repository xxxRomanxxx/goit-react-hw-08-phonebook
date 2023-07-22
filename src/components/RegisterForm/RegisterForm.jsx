import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { register } from 'redux/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <div className={css.registerForm}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Username
          <input className={css.input} type="text" name="name" />
        </label>
        <label className={css.label}>
          Email
          <input className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input className={css.input} type="password" name="password" />
        </label>
        <button className={css.formBtn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;