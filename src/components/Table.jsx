import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteExpense as deleteExpenseAction } from '../actions';
import TableElement from './TableElement';

class Table extends React.Component {
  render() {
    const { expenses, deleteExpense } = this.props;
    const isEmpty = expenses.length === 0;
    const headers = ['Descrição', 'Tag', 'Método de pagamento', 'Valor', 'Moeda',
      'Câmbio utilizado', 'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];

    return isEmpty
      ? (
        <>
          <table>
            <tbody>
              <tr>
                {headers.map((header, index) => <th key={ index }>{header}</th>)}
                {/* sugestao braba do José Demeneghi */}
              </tr>
            </tbody>
          </table>
          <div>SUA CARTEIRA ESTA VAZIA</div>
        </>
      )
      : (
        <table>
          <tbody>
            <tr>
              {headers.map((header, index) => <th key={ index }>{header}</th>)}
              {/* sugestao braba do José Demeneghi */}
            </tr>
            {isEmpty ? <td>Sua carteira esta vazia</td>
              : expenses.map((expense, index) => (
                <TableElement
                  key={ index }
                  expense={ expense }
                  deleteExpense={ deleteExpense }
                />
              ))}
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
