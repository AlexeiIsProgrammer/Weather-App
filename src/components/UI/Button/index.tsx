import React from 'react';

import ButtonStyle from './styles';
import { ButtonProps } from './types/types';

function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <ButtonStyle onClick={onClick} {...props} type="button">
      {children}
    </ButtonStyle>
  );
}
export default Button;
