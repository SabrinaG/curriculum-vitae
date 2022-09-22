// Available Actions based on CRUD
export const READING_OBJECT = 'READING_OBJECT';
export const READING_OBJECT_SUCCESS = 'READING_OBJECT_SUCCESS';
export const READING_OBJECT_FAILURE = 'READING_OBJECT_FAILURE';
export const READING_OBJECTS = 'READING_OBJECTS';
export const READING_OBJECTS_SUCCESS = 'READING_OBJECTS_SUCCESS';
export const READING_OBJECTS_FAILURE = 'READING_OBJECTS_FAILURE';
export const UPDATING_OBJECT = 'UPDATING_OBJECT';
export const UPDATING_OBJECT_SUCCESS = 'UPDATING_OBJECT_SUCCESS';
export const UPDATING_OBJECT_FAILURE = 'UPDATING_OBJECT_FAILURE';
export const CREATING_OBJECT = 'CREATING_OBJECT';
export const CREATING_OBJECT_SUCCESS = 'CREATING_OBJECT_SUCCESS';
export const CREATING_OBJECT_FAILURE = 'CREATING_OBJECT_FAILURE';
export const CALLING_ACTION = 'CALLING_ACTION';
export const CALLING_ACTION_SUCCESS = 'CALLING_ACTION_SUCCESS';
export const CALLING_ACTION_FAILURE = 'CALLING_ACTION_FAILURE';
export const DELETING_OBJECT = 'DELETING_OBJECT';
export const DELETING_OBJECT_SUCCESS = 'DELETING_OBJECT_SUCCESS';
export const DELETING_OBJECT_FAILURE = 'DELETING_OBJECT_FAILURE';

export const readObject = (objectType, objectId) => ({ type: READING_OBJECT, objectType, objectId });
export const readObjects = objectType => ({ type: READING_OBJECTS, objectType });
export const readObjectSuccess = (objectType, objectId) => ({ type: READING_OBJECT_SUCCESS, objectType, objectId });
export const readObjectsSuccess = objectType => ({ type: READING_OBJECTS_SUCCESS, objectType });
export const readObjectFailure = (objectType, objectId, error) =>
  ({
    type: READING_OBJECT_FAILURE, objectType, objectId, error,
  });
export const readObjectsFailure = (objectType, error) => ({ type: READING_OBJECTS_FAILURE, objectType, error });
export const createObject = objectType => ({ type: CREATING_OBJECT, objectType });
export const createObjectSuccess = objectType => ({ type: CREATING_OBJECT_SUCCESS, objectType });
export const createObjectFailure = (objectType, error) => ({ type: CREATING_OBJECT_FAILURE, objectType, error });
export const deleteObject = (objectType, objectId) => ({ type: DELETING_OBJECT, objectType, objectId });
export const deleteObjectSuccess = (objectType, objectId) => ({ type: DELETING_OBJECT_SUCCESS, objectType, objectId });
export const deleteObjectFailure = (objectType, objectId, error) =>
  ({
    type: DELETING_OBJECT_FAILURE, objectType, objectId, error,
  });
export const updateObject = (objectType, objectId) => ({ type: UPDATING_OBJECT, objectType, objectId });
export const updateObjectSuccess = (objectType, objectId) => ({ type: UPDATING_OBJECT_SUCCESS, objectType, objectId });
export const updateObjectFailure = (objectType, objectId, error) =>
  ({
    type: UPDATING_OBJECT_FAILURE, objectType, objectId, error,
  });
export const callAction = (objectType, objectId, action) => ({
  type: CALLING_ACTION, objectType, objectId, action,
});
export const callActionSuccess = (objectType, objectId, action) =>
  ({
    type: CALLING_ACTION_SUCCESS, objectType, objectId, action,
  });
export const callActionFailure = (objectType, objectId, action, error) =>
  ({
    type: CALLING_ACTION_FAILURE, objectType, objectId, action, error,
  });
