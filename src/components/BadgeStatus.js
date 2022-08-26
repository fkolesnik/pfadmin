import React from 'react';
import {Badge, Tooltip} from "@chakra-ui/react";

const BadgeStatus = ({isStopped, isModeration, isBlocked, isClosed}) => {

  if (isBlocked) {
    return (
      <Tooltip label='The query is blocked for violating the site rules'>
        <Badge colorScheme='red' variant='solid'>Blocked</Badge>
      </Tooltip>
    )
  }

  if (isClosed) {
    return (
      <Tooltip label="Time's up. Pitches no longer accepted">
        <Badge bg='black' color='white'>Closed</Badge>
      </Tooltip>
    )
  }

  if (isStopped) {
    return (
      <Tooltip label='The query was stopped by its author ahead of the deadline. Pitches no longer accepted'>
        <Badge bg='black' color='white'>Stopped</Badge>
      </Tooltip>
    )
  }

  if (isModeration) {
    return (
      <Tooltip label='The query is being checked by a moderator'>
        <Badge colorScheme='orange' variant='solid'>Moderation</Badge>
      </Tooltip>
    )
  }

  return null;
};

export default BadgeStatus;