import React from 'react';
import '../Login.css';
import logo from '../images/smartphone.svg';
import ConnectedLoginForm from '../components/LoginForm';
// as suggested by Doug on this https://stackoverflow.com/questions/44437203/how-do-i-resolve-eslint-import-no-named-as-default

export default class Login extends React.Component {
  render() {
    return (
      <div className="c-login">
        <span />
        <span />
        <section className="c-login-form">
          <div className="c-login-form__logo">
            <i><img src={ logo } alt="Smartphone wallet logo" /></i>
            <h2>e-wallet</h2>
          </div>
          <ConnectedLoginForm />
        </section>
        <section className="c-login__contact">
          <div>GitHub</div>
          <div>Linkedin</div>
          <div>Portfolio</div>
        </section>
      </div>
    );
  }
}
