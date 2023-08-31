import React from 'react';

import ButtonStyle from './styles';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <ButtonStyle onClick={onClick} {...props} type="button">
      {children}
    </ButtonStyle>
  );
}
export default Button;
