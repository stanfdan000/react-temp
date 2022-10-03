import styles from './Dashboard.css';
import { 
  InputController,
  TextAreaControl,
  SelectControl,
  CheckBoxController,
  FormButton,
} from '../Forms/FormController.jsx';


export default function Dashboard() {
  return( 
    <div className={styles.Dashboard}>
      
      <form>
        <InputController
          label="Name"
          name="name"
          placeholder="Your name"/>

        <InputController
          label="Date"
          required
          type="date"
          name="date"
          placeholder="Pick a date"/>

        <SelectControl
          label="Letter"
          required
          placeholder="Select a letter">
          <option value="1">A</option>
          <option value="2">B</option>
          <option value="3">C</option>
        </SelectControl>

        <TextAreaControl
          label="Bio"
          name="bio"
          placeholder="Tell us about yourself"/>

        <CheckBoxController legend="Do you accept" label="Yes"/>

        <FormButton text="Submit"/>
      </form>
    </div>
  );
}

    

