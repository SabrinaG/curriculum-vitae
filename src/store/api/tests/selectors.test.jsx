import { CustomError } from '../../../assets/utils/CustomError';
import { API_BASE_URL } from '../../../assets/constants';
import {
  selectApi,
  selectApiType,
  selectApiObject,
  selectApiObjectState,
  isLoadingObject,
  isLoadingObjects,
  selectLoadingObjectError,
  selectLoadingObjectsError,
  isCreatingObject,
  selectCreatingObjectError,
  isDeletingObject,
  selectDeletingObjectError,
  isUpdatingObject,
  selectUpdateObjectError,
  isCallingActionObject,
  selectCallingActionError,
} from '../selectors';

const api = {
  profile: {
    1: {
      read: {
        loadingState: true,
        error: null,
      },
      delete: {
        loadingState: true,
        error: null,
      },
      update: {
        loadingState: true,
        error: null,
      },
      action: {
        loadingState: true,
        error: null,
      },
    },
    '*': {
      read: {
        loadingState: true,
        error: null,
      },
      create: {
        loadingState: true,
        error: null,
      },
    },
  },
};

const state = {
  api,
};

describe('api.selectors tests', () => {
  it('selectApi - Should select api object', () => {
    expect(selectApi(state)).toEqual(api);
  });

  it('selectApiType - Should select api Type airport', () => {
    expect(selectApiType(state, 'profile')).toEqual(state.api.profile);
  });

  it('selectApiType - Should select default api Type with unexisting objectType', () => {
    expect(selectApiType(state, 'test')).toEqual({});
  });

  it('selectApiObject - Should select api info for object', () => {
    expect(selectApiObject(state, 'profile', 1)).toEqual(state.api.profile['1']);
  });

  it('selectApiObject - Should select default api info for unexisting object', () => {
    expect(selectApiObject(state, 'profile', 2)).toEqual({});
  });

  it('selectApiObjectState - Should select api state for method', () => {
    expect(selectApiObjectState(state, 'profile', 1, 'read')).toEqual(state.api.profile['1'].read);
  });

  it('selectApiObjectState - Should select default api state for method', () => {
    expect(selectApiObjectState(state, 'profile', 1, 'write')).toEqual({});
  });

  it('isLoadingObject - Should select loading State for object', () => {
    expect(isLoadingObject(state, 'profile', 1)).toEqual(true);
  });

  it('isLoadingObject - Should select default loading State for unexisting object', () => {
    expect(isLoadingObject(state, 'profile', 2)).toEqual(false);
  });

  it('isLoadingObjects - Should select loading State for objects', () => {
    expect(isLoadingObjects(state, 'profile')).toEqual(true);
  });

  it('isLoadingObjects - Should select default loading State for unexisting objects', () => {
    expect(isLoadingObject(state, 'test')).toEqual(false);
  });

  it('selectLoadingObjectError - Should select loading error for object', () => {
    const response = {
      status: 400,
      statusText: 'Bad Request',
      url: API_BASE_URL,
    };
    const error = new CustomError({ message: JSON.stringify(response) });
    state.api.profile['1'].read.error = error;
    expect(selectLoadingObjectError(state, 'profile', 1)).toEqual(error);
  });

  it('selectLoadingObjectError - Should select default loading error for unexisting object', () => {
    expect(selectLoadingObjectError(state, 'profile', 2)).toBeNull();
  });

  it('selectLoadingObjectsError - Should select loading error for objects', () => {
    const response = {
      status: 400,
      statusText: 'Bad Request',
      url: API_BASE_URL,
    };
    const error = new CustomError({ message: JSON.stringify(response) });
    state.api.profile['*'].read.error = error;
    expect(selectLoadingObjectsError(state, 'profile')).toEqual(error);
  });

  it('selectLoadingObjectsError - Should select default loading error for unexisting objects', () => {
    expect(selectLoadingObjectsError(state, 'test')).toBeNull();
  });

  // -- isCreatingObject

  it('isCreatingObject - Should select default creating state for unexisting object', () => {
    expect(isCreatingObject(state, 'test')).toEqual(false);
  });

  it('isCreatingObject - Should select creating state for object', () => {
    expect(isCreatingObject(state, 'profile')).toEqual(true);
  });

  // -- selectCreatingObjectError

  it('selectCreatingObjectError - Should select default creating error for unexisting object', () => {
    expect(selectCreatingObjectError(state, 'profile')).toBeNull();
  });

  it('selectCreatingObjectError - Should select creating error for object', () => {
    const response = {
      status: 400,
      statusText: 'Bad Request',
      url: API_BASE_URL,
    };
    const error = new CustomError({ message: JSON.stringify(response) });
    state.api.profile['*'].create.error = error;
    expect(selectCreatingObjectError(state, 'profile')).toEqual(error);
  });

  // -- isDeletingObject

  it('isDeletingObject - Should select default deleting state for unexisting object', () => {
    expect(isDeletingObject(state, 'profile', 10)).toEqual(false);
  });

  it('isDeletingObject - Should select deleting state for object', () => {
    expect(isDeletingObject(state, 'profile', 1)).toEqual(true);
  });

  // -- selectDeletingObjectError

  it('selectDeletingObjectError - Should select default deleting error for unexisting object', () => {
    expect(selectDeletingObjectError(state, 'profile', 1)).toBeNull();
  });

  it('selectDeletingObjectError - Should select deleting error for object', () => {
    const response = {
      status: 400,
      statusText: 'Bad Request',
      url: API_BASE_URL,
    };
    const error = new CustomError({ message: JSON.stringify(response) });
    state.api.profile['1'].delete.error = error;
    expect(selectDeletingObjectError(state, 'profile', 1)).toEqual(error);
  });

  // -- isUpdatingObject

  it('isUpdatingObject - Should select default updating state for unexisting object', () => {
    expect(isUpdatingObject(state, 'profile', 10)).toEqual(false);
  });

  it('isUpdatingObject - Should select updating state for object', () => {
    expect(isUpdatingObject(state, 'profile', 1)).toEqual(true);
  });

  // -- selectUpdateObjectError

  it('selectUpdateObjectError - Should select default updating error for unexisting object', () => {
    expect(selectUpdateObjectError(state, 'profile', 10)).toBeNull();
  });

  it('selectUpdateObjectError - Should select updating error for object', () => {
    const response = {
      status: 400,
      statusText: 'Bad Request',
      url: API_BASE_URL,
    };
    const error = new CustomError({ message: JSON.stringify(response) });
    state.api.profile['1'].update.error = error;
    expect(selectUpdateObjectError(state, 'profile', 1)).toEqual(error);
  });

  // -- isCallingActionObject

  it('isCallingActionObject - Should select default calling action for unexisting object', () => {
    expect(isCallingActionObject(state, 'profile', 10, 'action')).toEqual(false);
  });

  it('isCallingActionObject - Should select calling action for object', () => {
    expect(isCallingActionObject(state, 'profile', 1, 'action')).toEqual(true);
  });

  // -- selectCallingActionError

  it('selectCallingActionError - Should select default calling action error for unexisting object', () => {
    expect(selectCallingActionError(state, 'profile', 10)).toBeNull();
  });

  it('selectCallingActionError - Should select calling action error for object', () => {
    const response = {
      status: 400,
      statusText: 'Bad Request',
      url: API_BASE_URL,
    };
    const error = new CustomError({ message: JSON.stringify(response) });
    state.api.profile['1'].action.error = error;
    expect(selectCallingActionError(state, 'profile', 1, 'action')).toEqual(error);
  });
});
