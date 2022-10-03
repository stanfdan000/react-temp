// import styles from './Dashboard.css';
import { 
  InputController,
  // TextAreaControl,
  // SelectControl,
  // CheckBoxController,
  // FormButton,
} from '../Forms/FormController.jsx';


export default function Users() {
  return (
    <div>
      <form>
        <InputController
          label="customer"
          name="name"
          placeholder="Your name"/>

        <InputController
          label="Time due"
          required
          type="date"
          name="date"
          placeholder="Pick a date"/>
      </form>
    </div>

  );
}
