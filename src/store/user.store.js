import {proxy} from 'valtio';

export const userStore = proxy({
  user: null,
  isLoginLoading: false,
  isAutoLoginLoading: false,
})