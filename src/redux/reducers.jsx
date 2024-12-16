// src/redux/reducers.js
import { SIGN_UP, LOGIN, LOGOUT, RESET_PASSWORD, Newsign } from './actionType';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  formData: null,

};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, user: action.payload };

    case LOGIN:
      return { ...state, user: action.payload };

    case LOGOUT:
      localStorage.removeItem('user');
      return { ...state, user: null };

    case RESET_PASSWORD:
      const { email, newPassword } = action.payload;
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser && storedUser.email === email) {
        const updatedUser = { ...storedUser, password: newPassword };
        localStorage.setItem('user', JSON.stringify(updatedUser));
        return { ...state, user: updatedUser };
      }
      return state;
      
      case Newsign:
        return {
          ...state,
          formData: action.payload,
        };
    

    default:
      return state;
  }
};

export default authReducer;
