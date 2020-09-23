import React, { ReactElement } from 'react';

import { Container, ContainerList, NoResults } from './styles';

import Card from '../Card';

import { Workout } from '../../store/ducks/workouts/types';

interface CardListProps {
  data: Workout[];
  onSelectedCard: (data: Workout) => void;
}

function CardList(props: CardListProps): ReactElement {
  const { data, onSelectedCard } = props;

  return (
    <Container>
      {data.length > 0 ? (
        <>
          <ContainerList>
            {data.map((item) => {
              return (
                <Card
                  data={item}
                  key={item.id}
                  onSelectedCard={onSelectedCard}
                />
              );
            })}
          </ContainerList>
        </>
      ) : (
        <NoResults>No records</NoResults>
      )}
    </Container>
  );
}

export default CardList;
