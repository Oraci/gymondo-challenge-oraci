import React from 'react';

import { Container, Content, Date, Categories } from './styles';

const TopBar: React.FC = () => {
  return (
    <Container>
      <Content>
        <Date>Data</Date>
        <Categories>Categorias</Categories>
      </Content>
    </Container>
  );
};

export default TopBar;
