import React from 'react';

import { InputContainer, RealInput } from './styles';

type InputProps = {
  error: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
};

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
