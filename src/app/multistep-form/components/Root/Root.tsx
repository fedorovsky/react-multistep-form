import * as React from 'react';
import useAppSelector from 'hooks/useAppSelector';
import { multistepSelectors, Page } from '../../redux';
import * as Styled from './Root.styled';
import PageLogin from '../PageLogin';
import PageRegister from '../PageRegister';
import PageEmpty from '../PageEmpty';

const PageMap = {
  [Page.Empty]: <PageEmpty />,
  [Page.Login]: <PageLogin />,
  [Page.Register]: <PageRegister />,
};

const Root = () => {
  const page = useAppSelector(multistepSelectors.page);

  return <Styled.Wrapper>{PageMap[page]}</Styled.Wrapper>;
};

export default Root;
