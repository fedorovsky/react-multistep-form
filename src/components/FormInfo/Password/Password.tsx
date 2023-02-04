import * as React from 'react';
import useAppSelector from 'hooks/useAppSelector';
import { Field, multistepSelectors } from 'app/multistep-form';
import * as Styled from './Password.styled';

const Password = () => {
  const valuePassword = useAppSelector((state) =>
    multistepSelectors.fieldValue(state, Field.Password),
  );

  return <Styled.Wrapper>Password: {valuePassword}</Styled.Wrapper>;
};

export default React.memo(Password);
