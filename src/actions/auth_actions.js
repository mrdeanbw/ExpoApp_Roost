import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
  EMAIL_LOGIN_CHANGED,
  PASSWORD_LOGIN_CHANGED
} from './types';

export const emailLoginChanged = (text) => {
  return {
    type: EMAIL_LOGIN_CHANGED,
    payload: text
  };
};

export const passwordLoginChanged = (text) => {
  return {
    type: PASSWORD_LOGIN_CHANGED,
    payload: text
  };
};
