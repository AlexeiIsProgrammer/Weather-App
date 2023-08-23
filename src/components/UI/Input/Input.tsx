import React from 'react';
import styles from './Input.module.scss';

type InputProps = {
  children: React.ReactNode;
};

function Input({ ...props }: InputProps) {
  return (
    <div className={styles.input}>
      <input className={styles.input__input} {...props} />
    </div>
  );
}

export default Input;
