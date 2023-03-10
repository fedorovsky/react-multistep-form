import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useAppDispatch from 'hooks/useAppDispatch';
import useAppSelector from 'hooks/useAppSelector';
import sleep from 'utils/sleep';
import { Field, multistepActions, multistepSelectors } from '../../../redux';
import * as Styled from './StepPassword.styled';

type Inputs = {
  [Field.Password]: string;
};
const StepPassword = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector(multistepSelectors.formData);
  const passwordValue = useAppSelector((state) =>
    multistepSelectors.fieldValue(state, Field.Password),
  );

  const { register, handleSubmit, setFocus, formState } = useForm<Inputs>();

  const { onChange, onBlur, name, ref } = register(Field.Password, {
    required: { value: true, message: 'Required' },
    minLength: { value: 2, message: 'Min Length' },
    maxLength: { value: 10, message: 'Max Length' },
  });

  React.useEffect(() => {
    setFocus(Field.Password);
  }, [setFocus]);

  const handleChangeInput: React.ChangeEventHandler<HTMLInputElement> = async (
    event,
  ) => {
    dispatch(
      multistepActions.setDataField({
        field: Field.Password,
        value: event.target.value,
      }),
    );
    await onChange(event);
  };

  const onSubmit: SubmitHandler<Inputs> = async () => {
    console.log('formData', formData);
    await sleep(2000);
    console.log('Success Login', formData);
  };

  return (
    <Styled.Wrapper>
      <h2>Step Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name={name}
          value={passwordValue}
          ref={ref}
          onBlur={onBlur}
          onChange={handleChangeInput}
        />
        <input type="submit" value="click" disabled={formState.isSubmitting} />
        {formState.errors[Field.Password] && (
          <Styled.ErrorMessage>
            {formState.errors[Field.Password]?.message}
          </Styled.ErrorMessage>
        )}
      </form>
    </Styled.Wrapper>
  );
};

export default StepPassword;
