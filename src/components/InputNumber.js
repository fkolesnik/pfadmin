import React from 'react';
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from '@chakra-ui/react'

const InputNumber = ({value, onChange, min, max, label, size}) => {
  return (
    <FormControl>
      {label && <FormLabel>{label}</FormLabel>}
      <NumberInput
        onChange={onChange}
        value={value}
        min={min}
        max={max}
        size={size}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper/>
          <NumberDecrementStepper/>
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};

export default InputNumber;