import classnames from 'classnames';
import styles from './FormController.css';

export function FormController({ label, children }) {
  const className = classnames(styles.FormController, styles.LabelText);
  return (
    <label className={className}>
      {label}
      {children}
    </label>
  );
}


export function InputController({ label, ...rest }) {
  console.log(rest);
  return (
    <FormController label={label}>
      <input {...rest} />
    </FormController>
  );
}

export function TextAreaControl({ label, ...rest }) {
  console.log(rest);
  return (
    <FormController label={label}>
      <textarea {...rest}/>
    </FormController>
  );
}


export function SelectControl({ label, children, placeholder, ...rest }) {
  console.log(children);
  return (
    <FormController label={label}>
      <select {...rest}>
        {placeholder && <option disabled>{placeholder}</option>}
        {children}
      </select>
    </FormController>
  );
}
