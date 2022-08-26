import React from 'react';
import {Box, Button, HStack} from "@chakra-ui/react";
import InputNumber from "../../components/InputNumber";

const QueriesPagination = ({page, queries, setSearchParams, isLoading}) => {
  const isNoPrev = page <= 1;
  const isNoNext = (page * queries?.limit) >= queries?.count;
  const shouldShow = queries?.count > queries?.limit;

  const goPrev = () => {
    const prevPage = page - 1;
    setSearchParams({page: prevPage})
  }
  const goNext = () => {
    const nextPage = page + 1;
    setSearchParams({page: nextPage})
  }

  if (!shouldShow) return null;

  return (
    <HStack py={3} justify='flex-end'>
      <Button
        onClick={goPrev}
        isDisabled={isNoPrev || isLoading}
        size='xs'
      >
        Previous
      </Button>
      <Box maxW={16}>
        <InputNumber
          value={page}
          onChange={value => setSearchParams({page: value})}
          max={Math.round(queries?.count / queries?.limit)}
          min={1}
          size='xs'
        />
      </Box>
      <Button
        onClick={goNext}
        isDisabled={isNoNext || isLoading}
        size='xs'
      >
        Next
      </Button>
    </HStack>
  );
};

export default QueriesPagination;