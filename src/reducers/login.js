import { SET_LOGIN } from '../constants';

const initialState = {
  login: [],
};

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        login: action.payload,
      };
    default:
      return state;
  }
}