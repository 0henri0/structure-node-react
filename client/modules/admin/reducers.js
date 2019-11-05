import * as Type from './types';

const initinalState = {
  statusModelCreate: false
};

export default function (state = initinalState, action) {
  switch (action.type) {
  case Type.STATUS_CREATE:
    return {
      statusModelCreate: !state.statusModelCreate
    };

  default:
    return state;
  }
}