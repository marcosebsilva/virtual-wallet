// Coloque aqui suas actions
export const LOGIN = 'LOGIN';

const login = ({ email }) => ({
  type: LOGIN,
  payload: {
    email,
  },
});

export default login;
