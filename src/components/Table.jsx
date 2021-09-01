import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense as deleteExpenseAction } from '../actions';

class Table extends React.Component {
  render() {
    const { expenses, deleteExpense } = this.props;
    const isEmpty = expenses.length === 0;
    const headers = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <table>
        <tbody>
          <tr>
            {headers.map((header, index) => <th key={ index }>{header}</th>)}
            {/* sugestao braba do José Demeneghi */}
          </tr>
          {isEmpty ? <td>Sua carteira esta vazia</td>
            : expenses.map((expense, index) => {
              const {
                exchangeRates,
                currency,
                id } = expense;
              return (
                <tr key={ index }>
                  <td>{expense.description}</td>
                  <td>{expense.tag}</td>
                  <td>{expense.method}</td>
                  <td>{expense.value}</td>
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
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
}
Table.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  expenses: store.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(deleteExpenseAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
