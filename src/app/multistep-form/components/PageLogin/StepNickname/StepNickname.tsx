import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import {
  multistepActions,
  Step,
  Field,
  multistepSelectors,
} from '../../../redux';
import * as Styled from './StepNickname.styled';

type Inputs = {
  [Field.Nickname]: string;
};

const StepNickname = () => {
  const dispatch = useAppDispatch();

  const nicknamedValue = useAppSelector((state) =>
    multistepSelectors.fieldValue(state, Field.Nickname),
  );

  const {
    register,
    handleSubmit,
    setFocus,
    formState: { errors },
  } = useForm<Inputs>();

  const { onChange, onBlur, name, ref } = register(Field.Nickname, {
    required: { value: true, message: 'Required' },
    minLength: { value: 2, message: 'Min Length' },
    maxLength: { value: 10, message: 'Max Length' },
  });

  React.useEffect(() => {
    setFocus(Field.Nickname);
  }, [setFocus]);

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = async (
    event,
  ) => {
    dispatch(
      multistepActions.setDataField({
        field: Field.Nickname,
        value: event.target.value,
      }),
    );
    await onChange(event);
  };

  const onSubmit: SubmitHandler<Inputs> = async () => {
    dispatch(multistepActions.setStep(Step.Email)); // Next step => Email
  };

  return (
    <Styled.Wrapper>
      <h2>Step Nickname</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name={name}
          value={nicknamedValue}
          ref={ref}
          onBlur={onBlur}
          onChange={handleChangeInput}
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
