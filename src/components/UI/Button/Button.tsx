import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      {...props}
      type="button"
    >
      {children}
    </button>
  );
}
export default Button;
