import { REHYDRATE } from 'redux-persist/constants';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  EMAIL_LOGIN_CHANGED,
  PASSWORD_LOGIN_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  token: '',
  loading: ''
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    // case REHYDRATE:
    //   return action.payload;
    case EMAIL_LOGIN_CHANGED:
      console.log(action);
      return { ...state, email: action.payload };
    case PASSWORD_LOGIN_CHANGED:
      console.log(action);
      return { ...state, password: action.payload };
    case FACEBOOK_LOGIN_SUCCESS:
      return { token: action.payload };
    case FACEBOOK_LOGIN_FAIL:
      return { token: null };

    default:
      return state;
  }
}
