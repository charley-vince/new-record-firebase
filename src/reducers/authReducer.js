import {AUTH_SUCCESS, AUTH_FAILURE, SIGN_OUT_USER} from '../actions/actionTypes'

const initialState =  {
  authenticated: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        authenticated: true,
        error: null
      };
    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        error: null
      };
    case AUTH_FAILURE:
      return {
        ...state,
        error: action.payload.message
      };
    default:
      return state;
  }
}
