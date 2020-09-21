import React, { ReactElement } from 'react';
import DatePicker from 'react-date-picker';

import { Container, Content, Date, Categories } from './styles';

interface TopBarProps {
  startDate: Date | Date[];
  onChange: (date: Date | Date[]) => void;
}

function TopBar(props: TopBarProps): ReactElement {
  const { startDate, onChange } = props;

  return (
    <Container>
      <Content>
        <Date>
          <DatePicker
            format="MM/yyyy"
            value={startDate}
            onChange={onChange}
            maxDetail="year"
            defaultView="year"
          />
        </Date>
        <Categories>Categorias</Categories>
      </Content>
    </Container>
  );
}

export default TopBar;
