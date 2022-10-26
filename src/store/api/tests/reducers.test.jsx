import { CustomError } from '../../../assets/utils/CustomError';
import { API_BASE_URL } from '../../../assets/themes/constants';
import reducers from '../reducers';
import {
  READING_OBJECT,
  READING_OBJECT_SUCCESS,
  READING_OBJECT_FAILURE,
  READING_OBJECTS,
  READING_OBJECTS_SUCCESS,
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
} from '../actions';

describe('api.reducers tests', () => {
  it('should create initial state', () => {
    expect(reducers()).toEqual({});
  });

  it('READING_OBJECT - Should update loading state for object to loading', () => {
    const action = {
      type: READING_OBJECT,
      objectType: 'profile',
      objectId: 1,
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        1: {
          read: {
            loadingState: true,
            error: null,
          },
        },
      },
    });
  });

  it('READING_OBJECT_SUCCESS - Should update loading state for object to success', () => {
    const action = {
      type: READING_OBJECT_SUCCESS,
      objectType: 'profile',
      objectId: 1,
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        1: {
          read: {
            loadingState: false,
            error: null,
          },
        },
      },
    });
  });

  it('READING_OBJECT_FAILURE - Should update loading state for object to failure', () => {
    const response = {
      status: 400,
      statusText: 'Bad Request',
      url: API_BASE_URL,
    };
    const error = new CustomError({ message: JSON.stringify(response) });
    const action = {
      type: READING_OBJECT_FAILURE,
      objectType: 'profile',
      objectId: 1,
      error,
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        1: {
          read: {
            loadingState: false,
            error,
          },
        },
      },
    });
  });

  it('READING_OBJECTS - Should update loading state for objects to loading', () => {
    const action = {
      type: READING_OBJECTS,
      objectType: 'profile',
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        '*': {
          read: {
            loadingState: true,
            error: null,
          },
        },
      },
    });
  });

  it('READING_OBJECTS_SUCCESS - Should update loading state for object to success', () => {
    const action = {
      type: READING_OBJECTS_SUCCESS,
      objectType: 'profile',
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        '*': {
          read: {
            loadingState: false,
            error: null,
          },
        },
      },
    });
  });

  it('READING_OBJECTS_FAILURE - Should update loading state for object to failure', () => {
    const response = {
      status: 400,
      statusText: 'Bad Request',
      url: API_BASE_URL,
    };
    const error = new CustomError({ message: JSON.stringify(response) });
    const action = {
      type: READING_OBJECTS_FAILURE,
      objectType: 'profile',
      error,
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        '*': {
          read: {
            loadingState: false,
            error,
          },
        },
      },
    });
  });

  it('CREATING_OBJECT - Should update create state for object to loading', () => {
    const action = {
      type: CREATING_OBJECT,
      objectType: 'profile',
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        '*': {
          create: {
            loadingState: true,
            error: null,
          },
        },
      },
    });
  });

  it('CREATING_OBJECT_SUCCESS - Should update create state for object to sucess', () => {
    const action = {
      type: CREATING_OBJECT_SUCCESS,
      objectType: 'profile',
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        '*': {
          create: {
            loadingState: false,
            error: null,
          },
        },
      },
    });
  });

  it('CREATING_OBJECT_FAILURE - Should update create state for object to failure', () => {
    const response = {
      status: 400,
      statusText: 'Bad Request',
      url: API_BASE_URL,
    };
    const error = new CustomError({ message: JSON.stringify(response) });
    const action = {
      type: CREATING_OBJECT_FAILURE,
      objectType: 'profile',
      error,
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        '*': {
          create: {
            loadingState: false,
            error,
          },
        },
      },
    });
  });

  it('DELETING_OBJECT - Should update delete state for object to be deleted', () => {
    const action = {
      type: DELETING_OBJECT,
      objectType: 'profile',
      objectId: 1,
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        1: {
          delete: {
            loadingState: true,
            error: null,
          },
        },
      },
    });
  });

  it('DELETING_OBJECT_SUCCESS - Should update delete state for object to be deleted', () => {
    const action = {
      type: DELETING_OBJECT_SUCCESS,
      objectType: 'profile',
      objectId: 1,
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        1: {
          delete: {
            loadingState: false,
            error: null,
          },
        },
      },
    });
  });

  it('DELETING_OBJECT_FAILURE - Should update delete state for object to be deleted', () => {
    const response = {
      status: 400,
      statusText: 'Bad Request',
      url: API_BASE_URL,
    };
    const error = new CustomError({ message: JSON.stringify(response) });
    const action = {
      type: DELETING_OBJECT_FAILURE,
      objectType: 'profile',
      objectId: 1,
      error,
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        1: {
          delete: {
            loadingState: false,
            error,
          },
        },
      },
    });
  });

  it('UPDATING_OBJECT - Should update update state for object to be updated', () => {
    const action = {
      type: UPDATING_OBJECT,
      objectType: 'profile',
      objectId: 1,
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        1: {
          update: {
            loadingState: true,
            error: null,
          },
        },
      },
    });
  });

  it('UPDATING_OBJECT_SUCCESS - Should update update state for object to be updated', () => {
    const action = {
      type: UPDATING_OBJECT_SUCCESS,
      objectType: 'profile',
      objectId: 1,
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        1: {
          update: {
            loadingState: false,
            error: null,
          },
        },
      },
    });
  });

  it('UPDATING_OBJECT_FAILURE - Should update update state for object to be updated', () => {
    const response = {
      status: 400,
      statusText: 'Bad Request',
      url: API_BASE_URL,
    };
    const error = new CustomError({ message: JSON.stringify(response) });
    const action = {
      type: UPDATING_OBJECT_FAILURE,
      objectType: 'profile',
      objectId: 1,
      error,
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        1: {
          update: {
            loadingState: false,
            error,
          },
        },
      },
    });
  });

  it('CALLING_ACTION - Should update action state for the targeted object', () => {
    const action = {
      type: CALLING_ACTION,
      objectType: 'profile',
      objectId: 1,
      action: 'action',
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        1: {
          action: {
            loadingState: true,
            error: null,
          },
        },
      },
    });
  });

  it('CALLING_ACTION_SUCCESS - Should update update state for object to be updated', () => {
    const action = {
      type: CALLING_ACTION_SUCCESS,
      objectType: 'profile',
      objectId: 1,
      action: 'action',
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        1: {
          action: {
            loadingState: false,
            error: null,
          },
        },
      },
    });
  });

  it('CALLING_ACTION_FAILURE - Should update action state for the targeted object', () => {
    const response = {
      status: 400,
      statusText: 'Bad Request',
      url: API_BASE_URL,
    };
    const error = new CustomError({ message: JSON.stringify(response) });
    const action = {
      type: CALLING_ACTION_FAILURE,
      objectType: 'profile',
      objectId: 1,
      action: 'action',
      error,
    };
    expect(reducers(undefined, action)).toEqual({
      profile: {
        1: {
          action: {
            loadingState: false,
            error,
          },
        },
      },
    });
  });
});
