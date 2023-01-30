import * as React from 'react';
import useAppDispatch from 'hooks/useAppDispatch';
import { multistepActions } from 'app/multistep-form';

const FormSwitcher = () => {
  const dispatch = useAppDispatch();

  const handleClickLogin = () => {
    dispatch(multistepActions.setType('login'));
  };
  const handleClickRegister = () => {
    dispatch(multistepActions.setType('register'));
  };

  return (
    <div>
      <button type="button" onClick={handleClickLogin}>
        Login
      </button>
      <button type="button" onClick={handleClickRegister}>
        Register
      </button>
    </div>
  );
};

export default FormSwitcher;
