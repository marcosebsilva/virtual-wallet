// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { RECEIVE_CURRENCY, REQUEST_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return { ...state, isFetching: true };
  case RECEIVE_CURRENCY:
    return { ...state, currencies: Object.keys(action.payload), isFetching: false };
  default:
    return state;
  }
}

export default walletReducer;
