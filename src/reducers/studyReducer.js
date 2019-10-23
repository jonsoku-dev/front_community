import { GET_STUDIES } from '../actions/types';

const initialState = {
  studies: {},
  study: null,
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_STUDIES:
      return {
        ...state,
        studies: payload.data,
        loading: false,
      };
    default:
      return state;
  }
};
