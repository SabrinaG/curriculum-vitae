export const selectApi = state => (state.api);

export const selectApiType = (state, objectType) => (state.api[objectType] || {});

export const selectApiObject = (state, objectType, objectId) => selectApiType(state, objectType)[objectId] || {};

export const selectApiObjectState = (state, objectType, objectId, method) =>
  selectApiObject(state, objectType, objectId)[method] || {};

export const isLoadingObject = (state, objectType, objectId) =>
  (selectApiObjectState(state, objectType, objectId, 'read').loadingState || false);

export const isLoadingObjects = (state, objectType) =>
  (selectApiObjectState(state, objectType, '*', 'read').loadingState || false);

export const selectLoadingObjectError = (state, objectType, objectId) =>
  (selectApiObjectState(state, objectType, objectId, 'read').error || null);

export const selectLoadingObjectsError = (state, objectType) =>
  (selectApiObjectState(state, objectType, '*', 'read').error || null);

export const isCreatingObject = (state, objectType) =>
  (selectApiObjectState(state, objectType, '*', 'create').loadingState || false);

export const selectCreatingObjectError = (state, objectType) =>
  (selectApiObjectState(state, objectType, '*', 'create').error || null);

export const isDeletingObject = (state, objectType, objectId) =>
  (selectApiObjectState(state, objectType, objectId, 'delete').loadingState || false);

export const selectDeletingObjectError = (state, objectType, objectId) =>
  (selectApiObjectState(state, objectType, objectId, 'delete').error || null);

export const isUpdatingObject = (state, objectType, objectId) =>
  (selectApiObjectState(state, objectType, objectId, 'update').loadingState || false);

export const selectUpdateObjectError = (state, objectType, objectId) =>
  (selectApiObjectState(state, objectType, objectId, 'update').error || null);

export const isCallingActionObject = (state, objectType, objectId, action) =>
  (selectApiObjectState(state, objectType, objectId, action).loadingState || false);

export const selectCallingActionError = (state, objectType, objectId, action) =>
  (selectApiObjectState(state, objectType, objectId, action).error || null);
