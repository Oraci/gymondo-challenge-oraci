import React from 'react';

import { Container, Logo, Content } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Logo to="/" />
      <Content>Header</Content>
    </Container>
  );
};

export default Header;
