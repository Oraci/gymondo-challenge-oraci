import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadRequest } from '../../store/ducks/workouts/actions';

import { ApplicationState } from '../../store';

import Header from '../../components/Header';
import TopBar from '../../components/TopBar';

import { Container, Content } from './styles';

const Workout: React.FC = () => {
  const { data } = useSelector((state: ApplicationState) => state.workouts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest());
  }, [dispatch]);

  console.log(data);

  return (
    <Container>
      <Header />
      <Content>
        <TopBar />
        <div>
          {data.map((workout) => {
            return <div key={workout.id}>{workout.name}</div>;
          })}
        </div>
      </Content>
    </Container>
  );
};

export default Workout;
