import React from 'react';
import {Box, Spinner} from "@chakra-ui/react";

const SpinnerGlobal = () => {
  return (
    <Box pos='fixed' top={6} right={6}>
      <Spinner/>
    </Box>
  );
};

export default SpinnerGlobal;