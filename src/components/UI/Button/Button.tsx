import React from 'react';
import './Button.scss';

type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children, ...props }: ButtonProps) {
  return (
    <button className="button" {...props} type="button">
      {children}
    </button>
  );
}
export default Button;
