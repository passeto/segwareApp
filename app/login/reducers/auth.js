import types from '../types';

const INITIAL_STATE = {
  token: '',
  isLoading: false,
};

function reducer(state = INITIAL_STATE, { type, ...action }) {
  //const { payload } = action;

  if (types.AUTH_REQUEST === type) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (types.AUTH_REQUEST_SUCCESS === type) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.data,
    };
  }

  if (types.AUTH_REQUEST_FAIL === type) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (types.AUTH_REGISTER === type) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (types.AUTH_REGISTER_SUCCESS === type) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (types.AUTH_REGISTER_FAIL === type) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (types.FORGOT_PASSWORD === type) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (types.FORGOT_PASSWORD_SUCCESS === type) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (types.FORGOT_PASSWORD_FAIL === type) {
    return {
      ...state,
      isLoading: false,
    };
  }
  return state;
}

export default reducer;
