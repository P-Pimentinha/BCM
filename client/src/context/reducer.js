import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_ERROR,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_BEGIN,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  HANDLE_CHANGE,
  CLEAR_VALUES,
  CREATE_BAR_BEGIN,
  CREATE_BAR_SUCCESS,
  CREATE_BAR_ERROR,
  GET_BARS_BEGIN,
  GET_BARS_SUCCESS,
  SET_EDIT_BAR,
  DELETE_BAR_BEGIN,
  EDIT_BAR_BEGIN,
  EDIT_BAR_SUCCESS,
  EDIT_BAR_ERROR,
  GET_BAR_BEGIN,
  GET_BAR_SUCCESS,
  ADD_COFFEE_BEGIN,
  ADD_COFFEE_SUCCESS,
  ADD_COFFEE_ERROR,
} from './action';
import { initialState } from './appContext';

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'danger',
      alertText: 'Please provide all values!',
    };
  }

  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    };
  }

  if (action.type === REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === REGISTER_USER_SUCCESS) {
    return {
      ...state,
      token: action.payload.token,

      user: action.payload.user,
      userLocation: action.payload.user.location,

      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Created! Redirecting...',
    };
  }

  if (action.type === REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === LOGIN_USER_SUCCESS) {
    return {
      ...state,
      token: action.payload.token,

      user: action.payload.user,
      userLocation: action.payload.user.location,

      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Login Successful! Redirecting...',
    };
  }

  if (action.type === LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === TOGGLE_SIDEBAR) {
    return {
      ...state,
      showSidebar: !state.showSidebar,
    };
  }

  if (action.type === LOGOUT_USER) {
    return {
      ...initialState,
      user: null,
      token: null,
      userLocation: null,
    };
  }

  if (action.type === UPDATE_USER_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === UPDATE_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token: action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,

      showAlert: true,
      alertType: 'success',
      alertText: 'User Profile Updated!',
    };
  }
  if (action.type === UPDATE_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    };
  }

  if (action.type === CLEAR_VALUES) {
    const initialState = {
      isEditing: false,
      editBarId: '',
      name: '',
      location: '',
      address: '',
      wifi: '',
      notes: '',
      phoneNumber: '',
      unlockPhoneCode: '',
      phonePin: '',
      phonePuk: '',
      tabletUnlock: '',
      tabletPin: '',
      tabletPuk: '',
      kasseUser: '',
      registerPassword: '',
    };

    return { ...state, ...initialState };
  }

  if (action.type === CREATE_BAR_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === CREATE_BAR_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'New Bar Created!',
    };
  }
  if (action.type === CREATE_BAR_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === GET_BARS_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_BARS_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      bars: action.payload.bars,
      totalBars: action.payload.totalBars,
      numOfPages: action.payload.numOfPages,
    };
  }

  if (action.type === GET_BAR_BEGIN) {
    return { ...state, isLoading: true, showAlert: false };
  }
  if (action.type === GET_BAR_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      bar: action.payload.bar,
    };
  }

  if (action.type === SET_EDIT_BAR) {
    const bar = state.bars.find((bar) => bar._id === action.payload.id);
    const {
      _id,
      name,
      location,
      address,
      wifi,
      notes,
      phoneNumber,
      unlockPhoneCode,
      phonePin,
      phonePuk,
      tabletUnlock,
      tabletPin,
      tabletPuk,
      kasseUser,
      registerPassword,
    } = bar;

    return {
      ...state,
      isEditing: true,
      editBarId: _id,
      name,
      location,
      address,
      wifi,
      notes,
      phoneNumber,
      unlockPhoneCode,
      phonePin,
      phonePuk,
      tabletUnlock,
      tabletPin,
      tabletPuk,
      kasseUser,
      registerPassword,
    };
  }

  if (action.type === DELETE_BAR_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === EDIT_BAR_BEGIN) {
    return { ...state, isLoading: true };
  }

  if (action.type === EDIT_BAR_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Bar Updated',
    };
  }

  if (action.type === EDIT_BAR_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  if (action.type === ADD_COFFEE_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === ADD_COFFEE_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'success',
      alertText: 'Data Introduced Successfully!',
    };
  }
  if (action.type === ADD_COFFEE_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert: true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }
  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
