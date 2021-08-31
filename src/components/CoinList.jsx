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
    const { currencies, isFetching, onChange, id } = this.props;
    return (
      <label htmlFor={ id }>
        Moedas
        <select id={ id } onChange={ onChange }>
          {isFetching ? <option>Loading</option>
            : currencies.filter((currency) => currency !== 'USDT')
              .map((currency, index) => (
                <option value={ currency } key={ index }>
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
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fillCurrencies: () => dispatch(fetchAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CoinList);
