import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Box,
} from '@chakra-ui/react'

const QueryPopover = ({query}) => {
  const {title, text} = query || {};

  return (
    <Popover matchWidth>
      <PopoverTrigger>
        <Box
          tabIndex={0}
          role="button"
          color='brand.700'
          fontSize='md'
          lineHeight={1.3}
        >
          {title}
        </Box>
      </PopoverTrigger>
      <PopoverContent
        p={{base: 0, md: 2}}
        w={{base: 300, md: 500}}
        shadow='2xl'
        lineHeight={1.3}
        fontSize='md'
      >
        <PopoverCloseButton/>
        <PopoverHeader fontWeight={600} pr={8} pb={4}>
          {title}
        </PopoverHeader>
        <PopoverBody
          dangerouslySetInnerHTML={{__html: text}}
          overflow='auto'
          color='gray.600'
          maxH={400}
        />
      </PopoverContent>
    </Popover>
  );
};

export default QueryPopover;