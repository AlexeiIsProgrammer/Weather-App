import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={styles.button} {...props} type="button">
      {children}
    </button>
  );
}
export default Button;
