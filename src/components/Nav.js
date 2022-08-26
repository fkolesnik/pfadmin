import React from 'react';
import {NavLink} from "react-router-dom";
import {HStack, Link, Spacer} from "@chakra-ui/react"
import NavUser from "./NavUser";

const links = [
  {label: 'Queries', path: '/'},
  {label: 'Users', path: '/users'},
]

const Nav = () => {
  return (
    <HStack
      as='nav'
      mb={6}
      pb={3}
      borderBottom='1px solid #eee'
    >
      {links.map(link =>
        <Link
          as={NavLink}
          to={link.path}
          key={link.path}
          style={({isActive}) => ({
            color: isActive ? 'black' : '#2E74FF',
            pointerEvents: isActive ? 'none' : 'auto',
          })}
          borderRadius={6}
          fontWeight={600}
          fontSize={{base: 'md', sm: 'xl', md: '2xl'}}
          px={3}
          py={1}
        >
          {link.label}
        </Link>
      )}
      <Spacer/>
      <NavUser/>
    </HStack>
  );
};

export default Nav;