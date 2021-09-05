import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import loginAction from '../actions';
import LabelInput from './LabelInput';
import LabelSelect from './LabelSelect';

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
        <form className="c-login-form__form">
          <h1>Login</h1>
          <LabelInput
            id="email"
            text="Email"
            onChange={ this.handleChange }
            className="login-text-input"
          />
          <LabelInput
            className="login-text-input"
            id="password"
            text="Senha"
            onChange={ this.handleChange }
            type="password"
          />
          <LabelSelect id="remember-me" text="Lembrar de mim" />
        </form>
        <div className="c-login-form__buttons">
          <div>
            <Link to="/carteira">
              <button
                disabled={ isDisabled ? 'disabled' : undefined }
                type="button"
                onClick={ () => login(this.state) }
              >
                Entrar
              </button>
            </Link>
            <Link to="/cadastro">
              <button
                type="button"
              >
                Cadastrar
              </button>
            </Link>
          </div>
          <a href="www.google.com">Esqueceu sua senha?</a>
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
