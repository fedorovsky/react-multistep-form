import * as React from 'react';
import useAppSelector from 'hooks/useAppSelector';
import { Field, multistepSelectors } from 'app/multistep-form';
import * as Styled from './Email.styled';

const Email = () => {
  const valueEmail = useAppSelector((state) =>
    multistepSelectors.fieldValue(state, Field.Email),
  );

  return <Styled.Wrapper>Email: {valueEmail}</Styled.Wrapper>;
};

export default React.memo(Email);
