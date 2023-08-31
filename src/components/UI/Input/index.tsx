import React from 'react';

import { InputContainer, RealInput } from './styles';
import { InputProps } from './types/types';

function Input({
  error, onChange, value, placeholder,
}: InputProps) {
  return (
    <InputContainer>
      <RealInput
        $error={!!error}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default Input;
