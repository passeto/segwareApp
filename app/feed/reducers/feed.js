import types from '../types';

const INITIAL_STATE = {
  like: false,
  loves: false,
  isLoading: false,
  isLoadingPost: false,
  data: {},
};

function reducer(state = INITIAL_STATE, { type, ...action }) {
  if (types.GET_FEEDS === type) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (types.GET_FEEDS_SUCCESS === type) {
    return {
      ...state,
      isLoading: false,
      data: action.payload.data,
    };
  }

  if (types.GET_FEEDS_FAIL === type) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (types.POST_MESSAGE === type) {
    return {
      ...state,
      isLoadingPost: true,
    };
  }

  if (types.POST_MESSAGE_SUCCESS === type) {
    return {
      ...state,
      isLoadingPost: false,
    };
  }

  if (types.POST_MESSAGE_FAIL === type) {
    return {
      ...state,
      isLoadingPost: false,
    };
  }

  if (types.REACTION_POST === type) {
    return {
      ...state,
    };
  }

  if (types.REACTION_POST_SUCCESS === type) {
    return {
      ...state,
    };
  }

  if (types.REACTION_POST_FAIL === type) {
    return {
      ...state,
    };
  }
  return state;
}

export default reducer;
