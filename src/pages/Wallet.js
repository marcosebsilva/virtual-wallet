import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../index.css';

import ExpenseForm from '../components/ExpenseForm';
import Table from '../components/Table';

class Wallet extends React.Component {
  render() {
    const { email, expenses } = this.props;
    const correctValue = expenses
      .reduce((acc, curr) => (
        acc + (curr.value * curr.exchangeRates[curr.currency].ask)), 0);
    return (
      <>
        <header>
          <h1 data-testid="email-field">
            { email }
          </h1>
          <div className="c-total">
            <h2 data-testid="total-field" className="c-total__value">
              $
              { correctValue.toFixed(2) }
            </h2>
            <h2 data-testid="header-currency-field" className="c-total__currency">
              BRL
            </h2>
          </div>
        </header>
        <ExpenseForm />
        <Table />
      </>
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

export default connect(mapStateToProps)(Wallet);
