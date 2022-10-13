import {
  READING_OBJECT,
  READING_OBJECTS,
  READING_OBJECT_SUCCESS,
  READING_OBJECTS_SUCCESS,
  READING_OBJECT_FAILURE,
  READING_OBJECTS_FAILURE,
  CREATING_OBJECT,
  CREATING_OBJECT_SUCCESS,
  CREATING_OBJECT_FAILURE,
  DELETING_OBJECT,
  DELETING_OBJECT_SUCCESS,
  DELETING_OBJECT_FAILURE,
  UPDATING_OBJECT,
  UPDATING_OBJECT_SUCCESS,
  UPDATING_OBJECT_FAILURE,
  CALLING_ACTION,
  CALLING_ACTION_SUCCESS,
  CALLING_ACTION_FAILURE,
} from './actions';

const isActionForCollection = (action) => {
  switch (action.type) {
    case READING_OBJECTS:
    case READING_OBJECTS_SUCCESS:
    case READING_OBJECTS_FAILURE:
    case CREATING_OBJECT:
    case CREATING_OBJECT_SUCCESS:
    case CREATING_OBJECT_FAILURE:
      return true;
    default:
      return false;
  }
};
const getMethod = (action) => {
  switch (action.type) {
    case READING_OBJECT:
    case READING_OBJECT_SUCCESS:
    case READING_OBJECT_FAILURE:
    case READING_OBJECTS:
    case READING_OBJECTS_SUCCESS:
    case READING_OBJECTS_FAILURE:
      return 'read';
    case CREATING_OBJECT:
    case CREATING_OBJECT_SUCCESS:
    case CREATING_OBJECT_FAILURE:
      return 'create';
    case DELETING_OBJECT:
    case DELETING_OBJECT_SUCCESS:
    case DELETING_OBJECT_FAILURE:
      return 'delete';
    case UPDATING_OBJECT:
    case UPDATING_OBJECT_SUCCESS:
    case UPDATING_OBJECT_FAILURE:
      return 'update';
    case CALLING_ACTION:
    case CALLING_ACTION_SUCCESS:
    case CALLING_ACTION_FAILURE:
      return action.action;
    default:
      return 'unknown';
  }
};

const isActionFailure = (action) => {
  switch (action.type) {
    case READING_OBJECT_FAILURE:
    case READING_OBJECTS_FAILURE:
    case CREATING_OBJECT_FAILURE:
    case DELETING_OBJECT_FAILURE:
    case UPDATING_OBJECT_FAILURE:
    case CALLING_ACTION_FAILURE:
      return true;
    default:
      return false;
  }
};

const api = (state = {}, action = {}) => {
  switch (action.type) {
    case READING_OBJECT:
    case READING_OBJECTS:
    case READING_OBJECT_SUCCESS:
    case READING_OBJECTS_SUCCESS:
    case READING_OBJECT_FAILURE:
    case READING_OBJECTS_FAILURE:
    case CREATING_OBJECT:
    case CREATING_OBJECT_SUCCESS:
    case CREATING_OBJECT_FAILURE:
    case DELETING_OBJECT:
    case DELETING_OBJECT_SUCCESS:
    case DELETING_OBJECT_FAILURE:
    case UPDATING_OBJECT:
    case UPDATING_OBJECT_SUCCESS:
    case UPDATING_OBJECT_FAILURE:
    case CALLING_ACTION:
    case CALLING_ACTION_SUCCESS:
    case CALLING_ACTION_FAILURE:
    {
      const { objectType, type } = action;
      const method = getMethod(action);
      const objectId = isActionForCollection(action) ? '*' : action.objectId;
      const error = isActionFailure(action) ? action.error : null;
      const isLoading = (type === READING_OBJECT) || (type === READING_OBJECTS) || (type === DELETING_OBJECT)
                    || (type === CREATING_OBJECT) || (type === UPDATING_OBJECT) || (type === CALLING_ACTION);
      const nextState = {
        ...state,
      };
      nextState[objectType] = {
        ...nextState[objectType],
      };
      nextState[objectType][objectId] = {
        ...nextState[objectType][objectId],
      };
      nextState[objectType][objectId][method] = {
        ...nextState[objectType][objectId][method],
      };
      nextState[objectType][objectId][method].loadingState = isLoading;
      nextState[objectType][objectId][method].error = error;
      return nextState;
    }
    default:
      return {};
  }
};

export default api;
