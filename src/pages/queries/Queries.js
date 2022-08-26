import React from 'react';
import {Center, Spinner} from "@chakra-ui/react";
import useSWR from "swr";
import QueriesTable from "./QueriesTable";
import {useSearchParams} from "react-router-dom";
import QueriesPagination from "./QueriesPagination";
import Empty from "../../components/Empty";

const Queries = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const {data: queries, error} = useSWR(`/queries/all?page=${page}`);
  const isNoQueries = queries && !queries.results.length && !error;
  const isLoading = !queries && !error;

  if (error) {
    return <Center minH={300} color='gray.500'>Sorry something's wrong. Try again later.</Center>;
  }

  return (
    <>
      <QueriesPagination
        page={page}
        queries={queries}
        setSearchParams={setSearchParams}
        isLoading={isLoading}
      />

      {isLoading && <Center minH={500} bg='gray.50'><Spinner/></Center>}

      {isNoQueries && <Empty />}

      {!isNoQueries && !isLoading && <QueriesTable queries={queries}/>}

      <QueriesPagination
        page={page}
        queries={queries}
        setSearchParams={setSearchParams}
        isLoading={isLoading}
      />
    </>
  );
};

export default Queries;