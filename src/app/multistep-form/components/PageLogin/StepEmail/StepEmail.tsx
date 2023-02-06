import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import {
  Field,
  multistepActions,
  multistepSelectors,
  Step,
} from '../../../redux';
import * as Styled from './StepEmail.styled';

type Inputs = {
  [Field.Email]: string;
};

const StepEmail = () => {
  const dispatch = useAppDispatch();

  const emailValue = useAppSelector((state) =>
    multistepSelectors.fieldValue(state, Field.Email),
  );

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<Inputs>();

  const { onChange, onBlur, name, ref } = register(Field.Email, {
    required: { value: true, message: 'Required' },
    minLength: { value: 2, message: 'Min Length' },
    maxLength: { value: 10, message: 'Max Length' },
  });

  React.useEffect(() => {
    setFocus(Field.Email);
  }, [setFocus]);

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = async (
    event,
  ) => {
    dispatch(
      multistepActions.setDataField({
        field: Field.Email,
        value: event.target.value,
      }),
    );
    await onChange(event);
  };

  const onSubmit: SubmitHandler<Inputs> = () => {
    dispatch(multistepActions.setStep(Step.Password)); // Next step => Password
  };

  return (
    <Styled.Wrapper>
      <h2>Step Email</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name={name}
          value={emailValue}
          ref={ref}
          onBlur={onBlur}
          onChange={handleChangeInput}
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
