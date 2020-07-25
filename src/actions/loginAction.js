import {
  SET_LOGIN,
} from '../constants';

// Added for Login
export function setLogin(email, password, role) {
  return {
    type: SET_LOGIN,
    payload: {
      email, password, role
    },
  };
}
