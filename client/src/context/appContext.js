import { useReducer, useContext } from 'react';
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
  EDIT_BAR_BEGIN,
  EDIT_BAR_SUCCESS,
  EDIT_BAR_ERROR,
  GET_BAR_BEGIN,
  GET_BAR_SUCCESS,
  ADD_COFFEECONS_BEGIN,
  ADD_COFFEECONS_SUCCESS,
  ADD_COFFEECONS_ERROR,
  GET_COFFEECONS_BEGIN,
  GET_ALL_COFFEECONS_SUCCESS,
  GET_ALL_COFFEECONSCONS_ERROR,
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

  bar: [],
  bars: [],
  totalBars: 0,
  page: 1,
  numOfPages: 1,

  kilos: 0,

  allCoffeeCons: [],
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
      } = state;

      await authFetch.post('/bars', {
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

  // NEW
  const getBar = async (id) => {
    let url = `/bars/${id}`;
    dispatch({ type: GET_BAR_BEGIN });

    try {
      const { data } = await authFetch(url);
      const { bar } = data;

      dispatch({
        type: GET_BAR_SUCCESS,
        payload: {
          bar,
        },
      });
    } catch (error) {
      console.log(error.response);
      // logoutUser();
    }
    clearAlert();
  };

  const setEditBar = (id) => {
    dispatch({ type: SET_EDIT_BAR, payload: { id } });
  };

  const editbar = async () => {
    dispatch({ type: EDIT_BAR_BEGIN });
    try {
      const {
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
      } = state;

      await authFetch.patch(`/bars/${state.editBarId}`, {
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
      });

      dispatch({ type: EDIT_BAR_SUCCESS });
      clearValues();
    } catch (error) {
      dispatch({
        type: EDIT_BAR_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
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

  const addCoffee = async () => {
    dispatch({ type: ADD_COFFEECONS_BEGIN });
    try {
      const { kilos, bar } = state;
      await authFetch.post('/coffee', {
        kilos,
        barID: bar._id,
      });
      dispatch({
        type: ADD_COFFEECONS_SUCCESS,
      });
      dispatch({ type: CLEAR_VALUES });
    } catch (error) {
      if (error.response.status === 401) return;
      dispatch({
        type: ADD_COFFEECONS_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const getAllCoffeeCons = async () => {
    let url = `/coffee`;
    dispatch({ type: GET_COFFEECONS_BEGIN });

    try {
      const { data } = await authFetch(url);
      const { coffee } = data;

      dispatch({
        type: GET_ALL_COFFEECONS_SUCCESS,
        payload: {
          coffee,
        },
      });
    } catch (error) {
      console.log(error.response);
      logoutUser();
    }
    clearAlert();
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
        getBar,
        addCoffee,
        getAllCoffeeCons,
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
