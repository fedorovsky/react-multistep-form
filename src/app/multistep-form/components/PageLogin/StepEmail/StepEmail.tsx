import * as React from 'react';
import useAppDispatch from 'hooks/useAppDispatch';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Field, multistepActions, Step } from '../../../redux';
import * as Styled from './StepEmail.styled';

type Inputs = {
  [Field.Email]: string;
};

const StepEmail = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(multistepActions.setStep(Step.Password)); // Next step => Password
    dispatch(
      multistepActions.setDataField({
        field: Field.Email,
        value: data[Field.Email],
      }),
    );
  };

  React.useEffect(() => {
    setFocus(Field.Email);
  }, [setFocus]);

  return (
    <Styled.Wrapper>
      <h2>Step Email</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register(Field.Email, {
            required: { value: true, message: 'Required' },
            minLength: { value: 2, message: 'Min Length' },
            maxLength: { value: 10, message: 'Max Length' },
          })}
        />
        <input type="submit" value="click" />
        {errors[Field.Email] && (
          <Styled.ErrorMessage>
            {errors[Field.Email]?.message}
          </Styled.ErrorMessage>
        )}
      </form>
    </Styled.Wrapper>
  );
};

export default StepEmail;
