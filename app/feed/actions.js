import types from './types';

export function upVotes(id, like, love) {
  let value = {};

  value = {
    feedId: id,
    like,
    love,
  };

  console.log('valuereaction', value);

  return async (dispatch) => {
    return dispatch({
      type: types.REACTION_POST,
      payload: {
        request: {
          url: '/reaction',
          method: 'POST',
          data: value,
        },
      },
    });
  };
}

export function postMessage(values) {
  let value = {};

  value = {
    content: values.post,
  };

  return async (dispatch) => {
    return dispatch({
      type: types.POST_MESSAGE,
      payload: {
        request: {
          url: '/feed',
          method: 'POST',
          data: value,
        },
      },
    });
  };
}

export function getFeeds() {
  return async (dispatch, getState) => {
    return dispatch({
      type: types.GET_FEEDS,
      payload: {
        request: {
          url: '/feeds',
          method: 'GET',
        },
      },
    });
  };
}
