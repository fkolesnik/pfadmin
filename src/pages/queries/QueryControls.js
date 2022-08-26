import React from 'react';
import {HStack, IconButton, Menu, MenuButton, MenuList, MenuItem, Spinner} from "@chakra-ui/react";
import {IoCheckmarkCircle, IoCloseCircle, IoEllipsisVerticalCircle} from "react-icons/io5";
import BadgeStatus from "../../components/BadgeStatus";
import BadgeDate from "../../components/BadgeDate";
import {useUpdateQuery} from "./hooks/useUpdateQuery";

const QueryControls = ({query, queries}) => {
  const {isStopped, isModeration, isBlocked, endedAt} = query || {};
  const isClosed = Date.now() > new Date(endedAt).getTime();
  const {updateQuery, isUpdateQueryLoading} = useUpdateQuery();

  const onApprove = () => updateQuery(query._id, {isModeration: false, isBlocked: false}, queries);

  const onBlock = () => updateQuery(query._id, {isModeration: false, isBlocked: true}, queries);

  return (
    <HStack justify='flex-end'>
      <BadgeStatus
        isStopped={isStopped}
        isModeration={isModeration}
        isBlocked={isBlocked}
        isClosed={isClosed}
      />
      {!isClosed && !isBlocked && !isStopped && !isModeration &&
        <BadgeDate date={endedAt} label='Time to deadline' isRelative/>
      }
      <Menu>
        <MenuButton
          as={IconButton}
          icon={isUpdateQueryLoading
            ? <Spinner size='sm' color='brand'/>
            : <IoEllipsisVerticalCircle fontSize={20}/>
          }
          variant='ghost'
          colorScheme='brand'
          size='xs'
        />
        <MenuList>
          {(isModeration || isBlocked) &&
            <MenuItem
              onClick={onApprove}
              icon={<IoCheckmarkCircle fontSize='16px' color='green'/>}
            >
              Approve
            </MenuItem>
          }
          {(isModeration || !isBlocked) &&
            <MenuItem
              onClick={onBlock}
              icon={<IoCloseCircle fontSize='16px' color='red'/>}
            >
              Block
            </MenuItem>
          }
        </MenuList>
      </Menu>
    </HStack>
  );
};

export default QueryControls;