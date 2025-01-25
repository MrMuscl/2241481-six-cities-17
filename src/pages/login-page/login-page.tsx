import Header from '../../components/common/header';
import { Link } from 'react-router-dom';
import LoginForm from './login-form';

function LoginPage(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Header showUserLogin={false} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm/>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
