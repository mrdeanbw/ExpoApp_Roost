import {
  REG_EMAIL_CHANGED,
  REG_PASSWORD_CHANGED,
  REG_RETRYPASSWORD_CHANGED,
  REG_FIRSTNAME_CHANGED,
  REG_LASTNAME_CHANGED,
  REG_GENDER_CHANGED,
  REG_DOB_CHANGED,
  REG_USER_SUCCESS,
  REG_USER_FAIL,
  REG_USER
} from '../actions/types';

const INITIAL_STATE = {
  userID: '',
  token: '',
  email: '',
  password: '',
  retrypassword: '',
  firstname: '',
  lastname: '',
  gender: '',
  dob: '',
  loading: ''
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REG_EMAIL_CHANGED:
      // console.log(action);
      return { ...state, email: action.payload };
    case REG_PASSWORD_CHANGED:
      // console.log(action);
      return { ...state, password: action.payload };
    case REG_RETRYPASSWORD_CHANGED:
      // console.log(action);
      return { ...state, retrypassword: action.payload };
    case REG_FIRSTNAME_CHANGED:
      // console.log(action);
      return { ...state, firstname: action.payload };
    case REG_LASTNAME_CHANGED:
      // console.log(action);
      return { ...state, lastname: action.payload };
    case REG_GENDER_CHANGED:
      // console.log(action);
      return { ...state, gender: action.payload };
    case REG_DOB_CHANGED:
      // console.log(action);
      return { ...state, dob: action.payload };
    case REG_USER_SUCCESS:
      alert('success');
      return { ...state, userID: action.payload.user_id, token: action.payload.token, email: '', password: '' };
    case REG_USER_FAIL:
      alert('failed');
      return { email: '', password: '' };
    case REG_USER:
      console.log(state);
      return state;
    default:
      return state;

  }
}
