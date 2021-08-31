import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LabelSelect from '../components/LabelSelect';
import LabelInput from '../components/LabelInput';
import CoinList from '../components/CoinList';

class Wallet extends React.Component {
  render() {
    const { email } = this.props;
    return (
      <header>
        <p data-testid="email-field">
          { email }
        </p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
        <form>
          <LabelInput text="Valor" id="value" />
          <LabelInput text="Descrição" id="description" />
          <CoinList />
          <LabelSelect text="Método de pagamento" id="payment" type="payment" />
          <LabelSelect text="Tag" id="tag" type="tag" />
        </form>
      </header>
    );
  }
}

Wallet.propTypes = {
  email: PropTypes.string.isRequired,

};

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencyList: state.wallet.currencies,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchAPI: () => dispatch(fetchAPIAction()),
// });
export default connect(mapStateToProps)(Wallet);
