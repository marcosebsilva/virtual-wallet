import React from 'react';
import PropTypes from 'prop-types';

export default class TableElement extends React.Component {
  render() {
    const { expense, deleteExpense } = this.props;
    const {
      exchangeRates,
      currency,
      id,
      description,
      tag,
      method,
      value } = expense;
    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>
          {exchangeRates[currency].name
            .replace('/Real Brasileiro', '')}
        </td>
        <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
        <td>{(expense.value * exchangeRates[currency].ask).toFixed(2)}</td>
        <td>Real</td>
        <td>
          <button
            type="button"
            data-testid="delete-btn"
            onClick={ () => deleteExpense(id) }
          >
            Excluir
          </button>
          {/* <button
            type="button"
            data-testid="edit-btn"
            onClick={ () => deleteExpense(id) }
          >
            Editar
          </button> */}
        </td>
      </tr>
    );
  }
}

TableElement.propTypes = {
  expense: PropTypes.objectOf(Object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};
