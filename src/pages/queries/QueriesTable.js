import React from 'react';
import {Box, Flex, Icon, Link, TableContainer, Table, Tbody, Td, Th, Thead, Tooltip, Tr} from "@chakra-ui/react";
import {SITE_URL} from "../../constants";
import {IoOpenOutline} from "react-icons/io5";
import {format} from "date-fns";
import QueryControls from "./QueryControls";
import QueryPopover from "./QueryPopover";

const QueriesTable = ({queries}) => {
  return (
    <TableContainer whiteSpace='wrap'>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th minW='300px'>Query{' '}
              <Box as='span' color='gray.400'>
                {queries?.count}
              </Box>
            </Th>
            <Th w='200px'>Author</Th>
            <Th w='200px'>Media</Th>
            <Th w='80px'>Crtd</Th>
            <Th w='80px'>Ddln</Th>
            <Th w='170px' isNumeric>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {queries?.results?.map(query => {
            const {_id, title, createdBy, media, createdAt, endedAt} = query;
            return (
              <Tr key={_id} _hover={{backgroundColor: 'gray.50'}}>
                <Td>
                  <Flex>
                    <Tooltip label='See the query on the site'>
                      <Link href={`${SITE_URL}/query/${query._id}`} color='gray.500' isExternal>
                        <Icon as={IoOpenOutline} mr={4} mt='3px'/>
                      </Link>
                    </Tooltip>
                    <QueryPopover query={query}/>
                  </Flex>
                </Td>
                <Td>
                  {createdBy.name}<br/>
                  <Box fontSize='xs' color='gray.500'>{createdBy.email}</Box>
                </Td>
                <Td>{media.name}</Td>
                <Td fontSize='xs' color='gray.500'>
                  {format(new Date(createdAt), 'dd.MM.yy')}
                </Td>
                <Td fontSize={11} color='gray.500'>
                  {format(new Date(endedAt), 'dd.MM.yy')}
                </Td>
                <Td isNumeric>
                  <QueryControls query={query} queries={queries}/>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default QueriesTable;