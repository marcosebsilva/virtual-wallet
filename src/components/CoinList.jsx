import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAPI } from '../actions/index';

class CoinList extends React.Component {
  componentDidMount() {
    const { fillCurrencies } = this.props;
    fillCurrencies();
  }

  render() {
    const { currencies, isFetching } = this.props;
    return (
      <label htmlFor="coins">
        Moedas
        <select id="coins">
          {isFetching ? <option>Loading</option>
            : currencies.filter((currency) => currency !== 'USDT')
              .map((currency, index) => (
                <option key={ index }>
                  {currency}
                </option>
              ))}
        </select>
      </label>
    );
  }
}

CoinList.propTypes = {
  currencies: PropTypes.arrayOf(String).isRequired,
  isFetching: PropTypes.bool.isRequired,
  fillCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fillCurrencies: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
