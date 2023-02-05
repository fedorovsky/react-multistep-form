import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAppDispatch from 'hooks/useAppDispatch';
import { multistepActions, Step, Field } from '../../../redux';
import * as Styled from './StepNickname.styled';

type Inputs = {
  [Field.Nickname]: string;
};

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const StepNickname = () => {
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<Inputs>();

  React.useEffect(() => {
    setFocus(Field.Nickname);
  }, [setFocus]);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    dispatch(multistepActions.setStep(Step.Email)); // Next step => Email
    dispatch(
      multistepActions.setDataField({
        field: Field.Nickname,
        value: data[Field.Nickname],
      }),
    );
  };

  return (
    <Styled.Wrapper>
      <h2>Step Nickname</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register(Field.Nickname, {
            required: { value: true, message: 'Required' },
            minLength: { value: 2, message: 'Min Length' },
            maxLength: { value: 10, message: 'Max Length' },
          })}
        />
        <input type="submit" value="click" />
        {errors[Field.Nickname] && (
          <Styled.ErrorMessage>
            {errors[Field.Nickname]?.message}
          </Styled.ErrorMessage>
        )}
      </form>
    </Styled.Wrapper>
  );
};

export default StepNickname;
