import * as React from 'react';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import { Field, multistepActions, multistepSelectors } from '../../../redux';
import * as Styled from './StepPassword.styled';

const StepPassword = () => {
  const dispatch = useAppDispatch();

  const valuePassword = useAppSelector((state) =>
    multistepSelectors.fieldValue(state, Field.Password),
  );
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(multistepActions.setPassword(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login');
  };

  return (
    <Styled.Wrapper>
      <h2>Step Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={valuePassword} />
        <input type="submit" value="click" />
      </form>
    </Styled.Wrapper>
  );
};

export default StepPassword;
