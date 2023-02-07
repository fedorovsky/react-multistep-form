import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import sleep from 'utils/sleep';
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

  const { register, handleSubmit, setFocus, formState } = useForm<Inputs>();

  const { onChange, onBlur, name, ref } = register(Field.Nickname, {
    required: { value: true, message: 'Required' },
    minLength: { value: 2, message: 'Min Length' },
    maxLength: { value: 10, message: 'Max Length' },
    validate: {
      asyncNickname: async (value) => {
        await sleep(2000);
        return value === 'bill';
      },
    },
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

  const onSubmit: SubmitHandler<Inputs> = () => {
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
        <input type="submit" value="click" disabled={formState.isSubmitting} />
        {formState.errors[Field.Nickname] && (
          <Styled.ErrorMessage>
            {formState.errors[Field.Nickname]?.message}
          </Styled.ErrorMessage>
        )}
        {formState.errors[Field.Nickname]?.type === 'asyncNickname' && (
          <Styled.ErrorMessage>asyncNickname</Styled.ErrorMessage>
        )}
      </form>
    </Styled.Wrapper>
  );
};

export default StepNickname;
