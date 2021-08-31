// Coloque aqui suas actions
export const LOGIN = 'LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const RECEIVE_CURRENCY = 'RECEIVE_CURRENCY';
export const API_ADDRESS = 'https://economia.awesomeapi.com.br/json/all';

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

export default login;
