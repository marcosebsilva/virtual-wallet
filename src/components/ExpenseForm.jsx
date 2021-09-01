import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LabelSelect from './LabelSelect';
import LabelInput from './LabelInput';
import CoinList from './CoinList';
import { fetchCotation } from '../actions';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.id]: target.value,
    });
  }

  render() {
    const { addDispense } = this.props;
    return (
      <form className="c-expense-form">
        <LabelInput text="Valor" id="value" onChange={ this.handleChange } />
        <LabelInput text="Descrição" id="description" onChange={ this.handleChange } />
        <CoinList id="currency" onChange={ this.handleChange } />
        <LabelSelect
          text="Método de pagamento"
          id="method"
          onChange={ this.handleChange }
        />
        <LabelSelect text="Tag" id="tag" onChange={ this.handleChange } />
        <button
          className="c-expense-form__button"
          type="button"
          onClick={ () => addDispense(this.state) }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}

ExpenseForm.propTypes = {
  addDispense: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addDispense: (state) => dispatch(fetchCotation(state)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
