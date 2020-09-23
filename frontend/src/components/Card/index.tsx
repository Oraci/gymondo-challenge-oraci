import React, { ReactElement } from 'react';
import { format } from 'date-fns';
import { Workout } from '../../store/ducks/workouts/types';

import { Container, Content, Header, Footer } from './styles';

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

  console.log(data);

  return (
    <Container onClick={handleOnClick}>
      <Header>
        <p>{data?.name}</p>
      </Header>
      <Content>
        <p>{`Start date: ${dateFormat}`}</p>
      </Content>
      {data?.categoriesNames && (
        <Footer>
          <p>{`Categories: ${data?.categoriesNames}`}</p>
        </Footer>
      )}
    </Container>
  );
}

export default Card;
