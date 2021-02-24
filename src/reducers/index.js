import formVisibleReducer from './form-visible-reducer';
import sightingListReducer from './sighting-list-reducer';
import { firestoreReducer } from 'redux-firestore';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterSightingList: sightingListReducer,
  firestore: firestoreReducer
});

export default rootReducer;