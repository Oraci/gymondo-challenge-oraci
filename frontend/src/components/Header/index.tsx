import React, { ReactElement } from 'react';

import { Container, Logo, Content } from './styles';

function Header(): ReactElement {
  return (
    <Container>
      <Logo to="/" />
      <Content>Header</Content>
    </Container>
  );
}

export default Header;
