import * as React from 'react';
import useAppSelector from 'hooks/useAppSelector';
import { multistepSelectors, Page } from '../../redux';
import * as Styled from './Root.styled';
import Login from '../Login';
import Register from '../Register';
import Empty from '../Empty';

const PageMap = {
  [Page.Empty]: <Empty />,
  [Page.Login]: <Login />,
  [Page.Register]: <Register />,
};

const Root = () => {
  const page = useAppSelector(multistepSelectors.page);

  return <Styled.Wrapper>{PageMap[page]}</Styled.Wrapper>;
};

export default Root;
