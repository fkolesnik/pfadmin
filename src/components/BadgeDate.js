import React from 'react';
import {Badge, Tooltip} from "@chakra-ui/react";
import {formatDistanceStrict, format} from 'date-fns';

const BadgeDate = ({label, date = new Date(), frmt, color, isRelative, fontSize}) => {
  return (
    <Tooltip label={`${label} – ${format(new Date(date), 'd MMMM yyyy')}`}>
      <Badge
        colorScheme={'black'}
        color={color ? color : isRelative ? 'black' : 'gray.600'}
        fontSize={fontSize ? fontSize : null}
      >
        {isRelative
          ? formatDistanceStrict(new Date(date), Date.now())
          : format(new Date(date), frmt)
        }
      </Badge>
    </Tooltip>
  );
};

export default BadgeDate;