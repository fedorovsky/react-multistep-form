import * as React from 'react';
import useAppDispatch from 'hooks/useAppDispatch';
import { multistepActions, Step } from '../../../redux';
import * as Styled from './StepNickname.styled';

const StepNickname = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    dispatch(multistepActions.setStep(Step.Email));
  };

  return (
    <Styled.Wrapper>
      <h2>Step Nickname</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" value="click" />
      </form>
    </Styled.Wrapper>
  );
};

export default StepNickname;
