import classnames from 'classnames';
import styles from './FormControler.css';

function FormControl({ label, children }) {
  const className = classnames(styles.FormControl, styles.LabelText);
  return (
    <label className={className}>
      {label}
      {children}
    </label>
  );
}


export function InputControl({ label, ...rest }) {
  console.log(rest);
  return (
    <label>
      {label}
      <input {...rest} />
    </label>
  );
}

