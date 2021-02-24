import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { id, formattedWaitTime } = action;
  switch (action.type) {
  case c.DELETE_SIGHTING:
    const newState = { ...state };
    delete newState[id];
    return newState;
  case c.UPDATE_TIME:
    const updateSighting = Object.assign({}, state[id], {formattedWaitTime});
    const updateState = Object.assign({}, state, {
      [id]: updateSighting
    });
    return updateState;
  default:
    return state;
  }
}