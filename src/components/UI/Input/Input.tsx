import styles from './Input.module.scss';

function Input({ ...props }) {
  return (
    <div className={styles.input}>
      <input className={styles.input__input} {...props} />
    </div>
  );
}

export default Input;
