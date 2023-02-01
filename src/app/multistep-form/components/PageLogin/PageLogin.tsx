import * as React from 'react';
import useAppSelector from 'hooks/useAppSelector';
import { multistepSelectors, Step } from '../../redux';
import StepNickname from './StepNickname';
import StepEmail from './StepEmail';
import StepPassword from './StepPassword';
import * as Styled from './PageLogin.styled';

const StepMap = {
  [Step.Empty]: null,
  [Step.Nickname]: <StepNickname />,
  [Step.Email]: <StepEmail />,
  [Step.Password]: <StepPassword />,
};

const PageLogin = () => {
  const step = useAppSelector(multistepSelectors.step);

  return (
    <Styled.Wrapper>
      <h1>Page Login</h1>
      {StepMap[step]}
    </Styled.Wrapper>
  );
};

export default PageLogin;
