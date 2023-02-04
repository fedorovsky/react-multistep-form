import * as React from 'react';
import useAppSelector from 'hooks/useAppSelector';
import useAppDispatch from 'hooks/useAppDispatch';
import {
  Field,
  multistepActions,
  multistepSelectors,
  Step,
} from '../../../redux';
import * as Styled from './StepEmail.styled';

const StepEmail = () => {
  const dispatch = useAppDispatch();

  const valueEmail = useAppSelector((state) =>
    multistepSelectors.fieldValue(state, Field.Email),
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(multistepActions.setEmail(e.target.value));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(multistepActions.setStep(Step.Password));
  };

  return (
    <Styled.Wrapper>
      <h2>Step Email</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={valueEmail} />
        <input type="submit" value="click" />
      </form>
    </Styled.Wrapper>
  );
};

export default StepEmail;
