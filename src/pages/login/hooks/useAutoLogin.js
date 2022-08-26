import {useEffect, useCallback} from 'react';
import {userStore} from "../../../store/user.store";
import {pfApi} from "../../../axios/axios.config";
import {useSnapshot} from "valtio";

export const useAutoLogin = () => {
  const {user} = useSnapshot(userStore);
  const token = localStorage.getItem('token');

  const autoLoginUser = useCallback(async () => {
    try {
      userStore.isAutoLoginLoading = true;
      pfApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const {data} = await pfApi.get('/users/me');
      userStore.user = data;
      userStore.isAutoLoginLoading = false;
    } catch (e) {
      userStore.isAutoLoginLoading = false;
      console.log('error in autoLoginUser', e);
    }
  }, [token]);

  useEffect(() => {
    if (!user && !!token) {
      autoLoginUser();
    }
  }, [autoLoginUser, token, user]);
};

