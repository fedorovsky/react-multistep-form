import * as React from 'react';
import useAppDispatch from 'hooks/useAppDispatch';
import { multistepActions, Step } from '../../../redux';
import * as Styled from './StepEmail.styled';

const StepEmail = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    dispatch(multistepActions.setStep(Step.Password));
  };

  return (
    <Styled.Wrapper>
      <h2>Step Email</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" value="click" />
      </form>
    </Styled.Wrapper>
  );
};

export default StepEmail;
