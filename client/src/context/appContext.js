import { useReducer, useContext, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import reducer from './reducer';
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
} from './action';

const user = localStorage.getItem('user');
const token = localStorage.getItem('token');
const userLocation = localStorage.getItem('location');

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertType: '',

  user: user ? JSON.parse(user) : null,
  token: token,
  userLocation: userLocation || '',

  showSidebar: false,

  isEditing: false,
  editBarId: '',
  name: '',
  location: '',
  address: '',
  phonenumber: '',
  notes: '',
  phoneCodes: '',
  barCodes: '',
  kassenCodes: '',

  bars: [],
  totalBars: 0,
  page: 1,
  numOfPages: 1,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // axios
  const authFetch = axios.create({
    baseURL: '/api/v1',
  });

  //request
  authFetch.interceptors.request.use(
    (config) => {
      config.headers['Authorization'] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //response
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('location', location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('location');
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post('/api/v1/auth/register', currentUser);
      // console.log(response);
      const { user, token, location } = response.data;
      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const response = await axios.post('/api/v1/auth/login', currentUser);
      // console.log(response);
      const { user, token, location } = response.data;
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location },
      });
      addUserToLocalStorage({ user, token, location });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const logoutUser = () => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const updateUser = async (currentUser) => {
    dispatch({ type: UPDATE_USER_BEGIN });
    try {
      const { data } = await authFetch.patch('/auth/updateUser', currentUser);

      // no token
      const { user, location } = data;

      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: { user, location, token },
      });

      addUserToLocalStorage({ user, location, token: initialState.token });
    } catch (error) {
      if (error.response.status !== 401) {
        dispatch({
          type: UPDATE_USER_ERROR,
          payload: { msg: error.response.data.msg },
        });
      }
    }
    clearAlert();
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  const createBar = async () => {
    dispatch({ type: CREATE_BAR_BEGIN });
    try {
      const {
        name,
        location,
        address,
        phonenumber,
        notes,
        phoneCodes,
        tabletCodes,
        kassenCodes,
      } = state;

      await authFetch.post('/bars', {
        name,
        location,
        address,
        phonenumber,
        notes,
        phoneCodes,
        tabletCodes,
        kassenCodes,
      });
      dispatch({
        type: CREATE_BAR_SUCCESS,
      });
      // call function instead clearValues()
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: CREATE_BAR_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getBars = async () => {
    let url = `/bars`;
    dispatch({ type: GET_BARS_BEGIN });

    try {
      const { data } = await authFetch(url);
      const { bars, totalBars, numOfPages } = data;
      dispatch({
        type: GET_BARS_SUCCESS,
        payload: {
          bars,
          totalBars,
          numOfPages,
        },
      });
    } catch (error) {
      console.log(error.response);
      logoutUser();
    }
    clearAlert();
  };

  const setEditBar = (id) => {
    dispatch({ type: SET_EDIT_BAR, payload: { id } });
  };

  const editbar = () => {
    console.log('edit bar');
  };
  const deleteBar = async (barId) => {
    dispatch({ type: DELETE_BAR_BEGIN });

    try {
      await authFetch.delete(`/bars/${barId}`);
      getBars();
    } catch (error) {
      logoutUser();
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        registerUser,
        loginUser,
        toggleSidebar,
        clearValues,
        logoutUser,
        handleChange,
        updateUser,
        createBar,
        getBars,
        setEditBar,
        deleteBar,
        editbar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
