import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ExpenseForm from '../components/ExpenseForm';

class Wallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const correctValue = expenses
      .reduce((acc, curr) => (
        acc + (curr.value * curr.exchangeRates[curr.currency].ask)), 0);
    return (
      <header>
        <p data-testid="email-field">
          { email }
        </p>
        <p data-testid="total-field">
          { correctValue }
        </p>
        <p data-testid="header-currency-field">BRL</p>
        <ExpenseForm />
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(String).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencyList: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchAPI: () => dispatch(fetchAPIAction()),
// });
export default connect(mapStateToProps)(Wallet);
