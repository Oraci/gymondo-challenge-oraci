import React, { ReactElement } from 'react';
import { format } from 'date-fns';
import { MdDateRange } from 'react-icons/md';
import { Workout } from '../../store/ducks/workouts/types';

import { Container, Content, Header, Info } from './styles';

interface CardProps {
  data: Workout;
  onSelectedCard: (data: Workout) => void;
}

function Card(props: CardProps): ReactElement {
  const { data, onSelectedCard } = props;

  const handleOnClick = (): void => {
    onSelectedCard(data);
  };

  const dateFormat = format(new Date(data?.startDate), 'yyyy-MM-dd');

  return (
    <Container onClick={handleOnClick}>
      <Header>
        <p style={{ fontWeight: 'bold' }}>{data?.name}</p>
      </Header>
      <Content>
        <Info>
          <MdDateRange size={24} style={{ marginRight: 6 }} />
          <p>{`Start date: ${dateFormat || ''}`}</p>
        </Info>
        {data?.categoriesNames && (
          <p style={{ fontSize: '12px' }}>
            <strong>Categories: </strong>
            {data?.categoriesNames}
          </p>
        )}
      </Content>
    </Container>
  );
}

export default Card;
