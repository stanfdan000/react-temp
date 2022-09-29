import { render, screen } from '@testing-library/react';
import { 
  InputControl,
} from './FormControler.jsx';

test('INPUT CONTROL', async () => {
  render(
    <InputControl
      label="User Name"
      name="username"
      required
      placeholder="Your user name"
    />
  );
  const inputControl = screen.getByLabelText('User Name');
  expect(inputControl.name).toBe('username');
  expect(inputControl.placeholder).toBe('Your user name');
  expect(inputControl.required).toBe(true);

});
