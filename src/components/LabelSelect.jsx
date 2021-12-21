import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class LabelSelect extends React.Component {
  render() {
    const { text, id, onChange } = this.props;
    switch (id) {
    case 'method':
      return (
        <label htmlFor={ id } onChange={ onChange }>
          { text }
          <select
            name={ id }
            id={ id }
            className="c-expense-form__select"
          >
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      );
    case 'tag':
      return (
        <label htmlFor={ id }>
          { text }
          <select
            name={ id }
            id={ id }
            onChange={ onChange }
            className="c-expense-form__select"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
      );
    default:
      return (
        <label htmlFor={ id }>
          <input
            type="checkbox"
            name={ id }
            id={ id }
          />
          { text }
        </label>
      );
    }
  }
}

LabelSelect.defaultProps = {
  onChange: undefined,
};

LabelSelect.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  isFetching: state.wallet.isFetching,
});

export default connect(mapStateToProps)(LabelSelect);
