import React from 'react';
import styles from './Input.module.scss';

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
    <div className={styles.input}>
      <input
        className={`${styles.input__input} ${
          error ? `${styles.input__input_error}` : ''
        }`}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
