import * as c from './ActionTypes';

export const deleteSighting = id => ({
  type: c.DELETE_SIGHTING,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});