import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loginAction from '../actions';
import '../Login.css';

class Login extends React.Component {
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
      <div className="c-login">
        <section className="c-login__form">
          <h1>Login</h1>
          <input
            name="email"
            type="text"
            onChange={ this.handleChange }
            placeholder="Insira o email"
            data-testid="email-input"
          />
          <input
            name="password"
            type="text"
            placeholder="Insira a senha"
            data-testid="password-input"
            onChange={ this.handleChange }
          />
          <label htmlFor="remember-me">
            <input type="checkbox" name="remember-me" id="remember-me" />
            Lembrar de mim
          </label>
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
            Cadastrar
          </Link>
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

Login.propTypes = {
  login: PropTypes.func.isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  login: (state) => dispatch(loginAction(state)),
});

export default connect(null, mapDispatchToProps)(Login);
