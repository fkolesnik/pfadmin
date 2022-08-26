import React from 'react';
import {Avatar, HStack, IconButton, Tooltip} from "@chakra-ui/react";
import {IoLogOutOutline} from "react-icons/io5";
import {userStore} from "../store/user.store";
import {pfApi} from "../axios/axios.config";
import {useSnapshot} from "valtio";
import {useSWRConfig} from "swr";

const NavUser = () => {
  const {user} = useSnapshot(userStore);
  const {name, email, avatar} = user || {};
  const { cache } = useSWRConfig();

  const logoutUser = () => {
    userStore.user = null;
    localStorage.removeItem('token');
    pfApi.defaults.headers.common['Authorization'] = null;
    return cache.clear();
  }

  return (
    <HStack>
      <Tooltip label={`Logged in as ${name} (${email})`}>
        <Avatar src={avatar} name={name} size='sm'/>
      </Tooltip>
      <Tooltip label='Log out'>
        <IconButton
          onClick={logoutUser}
          icon={<IoLogOutOutline fontSize={20}/>}
          variant='ghost'
          size='sm'
        />
      </Tooltip>
    </HStack>
  );
};

export default NavUser;