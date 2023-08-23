import React from 'react';

type InputProps = {
  children: React.ReactNode;
};

function Input({ ...props }: InputProps) {
  return <input {...props} />;
}

export default Input;
