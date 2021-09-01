// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';
export const API_ADDRESS = 'https://economia.awesomeapi.com.br/json/all';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';

const login = ({ email }) => ({
  type: LOGIN,
  payload: {
    email,
  },
});

const requestAPI = () => ({
  type: REQUEST_API,
});

const receiveCurrency = (currencyList) => ({
  type: RECEIVE_CURRENCY,
  payload: currencyList,
});

export function fetchAPI() {
  return async (dispatch) => {
    dispatch(requestAPI());
    const currency = await (await fetch(API_ADDRESS)).json();
    dispatch(receiveCurrency(currency));
  };
}
const addExpense = (state, cotation) => ({
  type: ADD_EXPENSE,
  payload: {
    ...state,
    exchangeRates: { ...cotation },
  },
});

export function fetchCotation(state) {
  return async (dispatch) => {
    const currencyExchange = await (await fetch(API_ADDRESS)).json();
    dispatch(addExpense(state, currencyExchange));
  };
}

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export default login;
