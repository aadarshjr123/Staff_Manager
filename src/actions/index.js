//Action-Creator

import {EMAIL_CHANGED, PASSWORD_CHANGE} from '../types/types';

export const emailChange = text => {
  return {
    type: EMAIL_CHANGED,
    payload: text,
  };
};

export const passwordChange = text => {
  return {
    type: PASSWORD_CHANGE,
    payload: text,
  };
};
