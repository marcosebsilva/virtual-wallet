import React from 'react';
import '../Login.css';
import logo from '../images/smartphone.svg';
import ConnectedLoginForm from '../components/LoginForm';
// as suggested by Doug on this https://stackoverflow.com/questions/44437203/how-do-i-resolve-eslint-import-no-named-as-default

export default class Login extends React.Component {
  render() {
    return (
      <div className="c-login">
        <span className="background-small-circle" />
        <span className="background-big-circle" />
        <section className="c-login-form">
          <div className="logo">
            <i className="logo__icon">
              <img src={ logo } alt="Smartphone wallet logo" />
            </i>
            <h2 className="logo__text">e-wallet</h2>
          </div>
          <ConnectedLoginForm />
        </section>
        <section className="c-login__contact">
          <a href="https://github.com/marcosebsilva" target="_blank" rel="noreferrer">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="github icon"
              href="google.com"
            />
          </a>
          <a href="https://www.linkedin.com/in/marcosestevaobs/" target="_blank" rel="noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="linkedin icon" />
          </a>
        </section>
      </div>
    );
  }
}
