import React, { ReactElement } from 'react';

import { Container, Logo, Content } from './styles';

function Header(): ReactElement {
  return (
    <Container>
      <Logo to="/" />
      <Content>Fall into fitness!</Content>
    </Container>
  );
}

export default Header;
