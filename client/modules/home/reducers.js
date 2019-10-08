import * as Type from './types';

const initinalState = {
  item: []
};

export default function (state = initinalState, action) {
  switch (action.type) {
  case Type.FETCH_MOMENT:
    return {
      ...state,
      ...{ moments: action.payload }
    };

  default:
    return state;
  }
}