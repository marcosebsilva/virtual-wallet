import { ADD_EXPENSE, DELETE_EXPENSE, RECEIVE_CURRENCY, REQUEST_API } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  isFetching: false,
};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_API:
    return { ...state, isFetching: true };
  case RECEIVE_CURRENCY:
    return { ...state, currencies: Object.keys(action.payload), isFetching: false };
  case ADD_EXPENSE:
    return {
      ...state,
      expenses: [
        ...state.expenses,
        { ...action.payload,
          id: state.expenses.length,
        }] };
  case DELETE_EXPENSE:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.id),
    };
  default:
    return state;
  }
}
