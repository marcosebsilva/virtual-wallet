import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginAction from '../actions';
import LabelInput from './LabelInput';

export class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    }, () => {
      const { password, email } = this.state;
      const MIN_PASSWORD_LENGTH = 6;
      const VALID_EMAIL = /\S+@\S+\.\S+/;
      const isEmailValid = VALID_EMAIL.test(email);
      const isPasswordValid = password.length >= MIN_PASSWORD_LENGTH;
      const newStatus = !(isEmailValid && isPasswordValid);
      this.setState({ isDisabled: newStatus });
    });
  }

  render() {
    const { isDisabled } = this.state;
    const { login } = this.props;
    return (
      <>
        <form className="login-form">
          <h1 className="login-form__title">Login</h1>
          <LabelInput
            id="email"
            text="Email"
            onChange={ this.handleChange }
            className="login-form__text-input"
          />
          <LabelInput
            className="login-form__text-input"
            id="password"
            text="Senha"
            onChange={ this.handleChange }
            type="password"
          />
        </form>
        <div className="c-buttons">
          <div className="main-buttons">
            <Link to="/carteira">
              <button
                className="main-buttons__signin"
                disabled={ isDisabled }
                type="button"
                onClick={ () => login(this.state) }
              >
                Entrar
              </button>
            </Link>
            <Link to="/cadastro">
              <button
                className="main-buttons__signup"
                type="button"
              >
                Cadastrar
              </button>
            </Link>
          </div>
          <a className="c-buttons__link" href="www.google.com">Esqueceu sua senha?</a>
        </div>
      </>
    );
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  login: (state) => dispatch(loginAction(state)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
