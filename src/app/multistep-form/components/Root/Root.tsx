import * as React from 'react';
import * as Styled from './Root.styled';
import Login from '../Login';
import Register from '../Register';

const Root = () => {
  return (
    <Styled.Wrapper>
      <Login />
      <Register />
    </Styled.Wrapper>
  );
};

export default Root;
