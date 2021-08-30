import React from 'react';
import PropTypes from 'prop-types';

export default class LabelSelect extends React.Component {
  render() {
    const { text, type } = this.props;
    switch (type) {
    case 'payment':
      return (
        <label htmlFor={ type }>
          { text }
          <select name={ type } id={ type }>
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
      );
    case 'tag':
      return (
        <label htmlFor={ type }>
          { text }
          <select name={ type } id={ type }>
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
        <label htmlFor={ type }>
          { text }
          <select name={ type } id={ type }>
            <option>teste</option>
          </select>
        </label>
      );
    }
  }
}

LabelSelect.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.bool.isRequired,
};
