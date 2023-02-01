import * as React from 'react';
import * as Styled from './StepPassword.styled';

const StepPassword = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login');
  };

  return (
    <Styled.Wrapper>
      <h2>Step Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <input type="submit" value="click" />
      </form>
    </Styled.Wrapper>
  );
};

export default StepPassword;
