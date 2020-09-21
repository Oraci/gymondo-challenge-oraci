import React, { ReactElement } from 'react';

import Footer from '../Footer';

import { Container, Content } from './styles';

interface LayoutProps {
  children: ReactElement;
}

function Layout(props: LayoutProps): ReactElement {
  const { children } = props;

  return (
    <Container>
      <Content>
        {children}
        <Footer />
      </Content>
    </Container>
  );
}

export default Layout;
