import * as React from 'react';
import useAppSelector from 'hooks/useAppSelector';
import { Field, multistepSelectors } from 'app/multistep-form';
import * as Styled from './Nickname.styled';

const Nickname = () => {
  const valueNickname = useAppSelector((state) =>
    multistepSelectors.fieldValue(state, Field.Nickname),
  );

  return <Styled.Wrapper>Nickname: {valueNickname}</Styled.Wrapper>;
};

export default React.memo(Nickname);
