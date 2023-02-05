import * as React from 'react';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import {
  multistepSelectors,
  multistepActions,
  Step,
  Field,
} from '../../../redux';
import * as Styled from './StepNickname.styled';

const StepNickname = () => {
  const dispatch = useAppDispatch();
  const valueNickname = useAppSelector((state) =>
    multistepSelectors.fieldValue(state, Field.Nickname),
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(
      multistepActions.setDataField({
        field: Field.Nickname,
        value: e.target.value,
      }),
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(multistepActions.setStep(Step.Email));
  };

  return (
    <Styled.Wrapper>
      <h2>Step Nickname</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={valueNickname} />
        <input type="submit" value="click" />
      </form>
    </Styled.Wrapper>
  );
};

export default StepNickname;
