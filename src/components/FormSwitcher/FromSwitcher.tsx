import * as React from 'react';
import useAppDispatch from 'hooks/useAppDispatch';
import { multistepActions, Page } from 'app/multistep-form';

const FormSwitcher = () => {
  const dispatch = useAppDispatch();

  const handleClickLogin = () => {
    dispatch(multistepActions.setPage(Page.Login));
  };
  const handleClickRegister = () => {
    dispatch(multistepActions.setPage(Page.Register));
  };

  const handleClickEmpty = () => {
    dispatch(multistepActions.setPage(Page.Empty));
  };

  return (
    <div>
      <button type="button" onClick={handleClickLogin}>
        Login
      </button>
      <button type="button" onClick={handleClickRegister}>
        Register
      </button>
      <button type="button" onClick={handleClickEmpty}>
        Empty
      </button>
    </div>
  );
};

export default FormSwitcher;
