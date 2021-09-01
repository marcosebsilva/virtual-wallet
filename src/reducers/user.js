import { LOGIN } from '../actions';

const INITIAL_STATE = {
  email: 'dusdoom@gmail.com',
};

export default function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOGIN:
    return { ...state, email: action.payload.email };
  default:
    return state;
  }
}
