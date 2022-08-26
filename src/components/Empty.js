import React from 'react';
import {Box, Button, Center, Heading} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

const Empty = ({heading, caption}) => {
  const navigate = useNavigate();

  return (
    <Center minH={500}>
      <Box textAlign='center'>
        <Heading size='4xl' color='gray.300' mb={2}>{heading || '404'}</Heading>
        <Box mb={6}>{caption || 'Page not found'}</Box>
        <Button onClick={() => navigate('/')}>
          Go home
        </Button>
      </Box>
    </Center>
  );
};

export default Empty;