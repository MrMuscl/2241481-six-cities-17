import { FormEvent, useRef } from 'react';
import { useAppDispatch } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/action-api';
import { AppRoute } from '../../components/consts';

function LoginForm(): JSX.Element{

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const submitHanlder = (evt: FormEvent<HTMLFormElement>) =>{
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null){
      dispatch(login({
        login: loginRef.current.value,
        password: passwordRef.current.value
      })).then((response) => {
        if (response.meta.requestStatus === 'fulfilled'){
          navigate(AppRoute.Root);
        }
      });
    }
  };

  return (
    <form
      className="login__form form"
      action="#"
      method="post"
      onSubmit={submitHanlder}
    >
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          placeholder="Email"
          ref={loginRef}
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          placeholder="Password"
          ref={passwordRef}
          required
        />
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in</button>
    </form>
  );
}

export default LoginForm;