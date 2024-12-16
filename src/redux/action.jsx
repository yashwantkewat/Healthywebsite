// src/redux/actions.js
import { SIGN_UP, LOGIN, LOGOUT, RESET_PASSWORD ,Newsign} from './actionType';

export const signUpAction = (user) => ({
  type: SIGN_UP,
  payload: user,
});

export const loginAction = (user) => ({
  type: LOGIN,
  payload: user,
});

export const logoutAction = () => ({
  type: LOGOUT,
});

export const resetPasswordAction = (email, newPassword) => ({
  type: RESET_PASSWORD,
  payload: { email, newPassword },
});


export const SignUpAction = (formData) => {
  return {
    type: Newsign,
    payload: formData,
  };
};
