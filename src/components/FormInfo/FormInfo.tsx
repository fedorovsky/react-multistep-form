import * as React from 'react';
import { multistepSelectors } from 'app/multistep-form';
import useAppSelector from 'hooks/useAppSelector';
import * as Styled from './FormInfo.styled';
import Nickname from './Nickname';
import Email from './Email';
import Password from './Password';

const FormInfo = () => {
  const formData = useAppSelector(multistepSelectors.formData);

  return (
    <Styled.Wrapper>
      <div>{JSON.stringify(formData, null, 2)}</div>
      <Nickname />
      <Email />
      <Password />
    </Styled.Wrapper>
  );
};

export default FormInfo;
