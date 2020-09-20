import React from 'react';

import Footer from '../Footer';

import { Container, Content } from './styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Content>
        {children}
        <Footer />
      </Content>
    </Container>
  );
};

export default Layout;
