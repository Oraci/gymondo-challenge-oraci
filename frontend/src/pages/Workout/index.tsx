import React, { useEffect, useState, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadRequest } from '../../store/ducks/workouts/actions';

import { ApplicationState } from '../../store';

import Header from '../../components/Header';
import TopBar from '../../components/TopBar';
import Pagination from '../../components/Pagination';

import { Container, Content } from './styles';

function Workout(): ReactElement {
  const [startDate, setStartDate] = useState<Date | Date[]>(new Date());

  const { rows, totalPages, currentPage, totalItems } = useSelector(
    (state: ApplicationState) => state.workouts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRequest({ page: 1, startDate }));
  }, [dispatch, startDate]);

  const onPageChange = (page: number): void => {
    dispatch(loadRequest({ page, startDate }));
  };

  const onChageDate = (date: Date | Date[]): void => {
    setStartDate(date);

    dispatch(loadRequest({ page: currentPage, startDate: date }));
  };

  return (
    <Container>
      <Header />
      <Content>
        <TopBar startDate={startDate} onChange={onChageDate} />
        <>
          <div>
            {rows.map((workout) => {
              return <div key={workout.id}>{workout.name}</div>;
            })}
          </div>
          {totalItems > 20 && (
            <Pagination
              totalPages={totalPages}
              totalItems={totalItems}
              currentPage={currentPage}
              onPageChange={(page: number): void => onPageChange(page)}
            />
          )}
        </>
      </Content>
    </Container>
  );
}

export default Workout;
