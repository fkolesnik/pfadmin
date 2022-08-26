import {pfApi} from "../../../axios/axios.config";
import {userStore} from "../../../store/user.store";
import {useToast} from "@chakra-ui/react";

export const useLogin = () => {
  const toast = useToast();

  const checkAdmin = (data) => {
    if (!data.isAdmin) {
      localStorage.removeItem('token');
      throw new Error('You shall not pass, an ordinary mortal!');
    }
  }

  const loginUser = async (userCreds) => {
    try {
      userStore.isLoginLoading = true;
      const {data: {token}} = await pfApi.post('/auth/login', userCreds);
      pfApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('token', token);
      const {data} = await pfApi.get('/users/me');
      checkAdmin(data);
      userStore.user = data;
      userStore.isLoginLoading = false;
    } catch (e) {
      userStore.isLoginLoading = false;
      toast({title: e.response?.data?.message || e.message, status: 'error', position: 'top-right'});
      console.log('error in loginUser', e);
    }
  }

  return {
    loginUser,
  }
};