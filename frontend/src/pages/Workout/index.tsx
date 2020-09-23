import React, { useEffect, useState, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  loadWorkoutsRequest,
  selectedWorkout,
} from '../../store/ducks/workouts/actions';

import { loadCategoriesRequest } from '../../store/ducks/categories/actions';

import { ApplicationState } from '../../store';

import Header from '../../components/Header';
import TopBar from '../../components/TopBar';
import Pagination from '../../components/Pagination';
import CardList from '../../components/CardList';

import { Container, Content, Loading } from './styles';
import { Workout as WorkoutType } from '../../store/ducks/workouts/types';

function Workout(): ReactElement {
  const [startDate, setStartDate] = useState<Date | Date[]>(new Date());
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const {
    workouts,
    totalPages,
    currentPage,
    totalItems,
    loading,
  } = useSelector((state: ApplicationState) => state.workouts);

  const { categories } = useSelector(
    (state: ApplicationState) => state.categories
  );

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(loadCategoriesRequest());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      loadWorkoutsRequest({
        page: currentPage,
        startDate,
        categories: selectedCategories,
      })
    );
  }, [categories, currentPage, dispatch, selectedCategories, startDate]);

  const onPageChange = (page: number): void => {
    dispatch(
      loadWorkoutsRequest({ page, startDate, categories: selectedCategories })
    );
  };

  const onChageDate = (date: Date | Date[]): void => {
    setStartDate(date);
  };

  const onChangeCategory = (
    ev: React.ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    if (ev.target.checked) {
      setSelectedCategories([...selectedCategories, id]);
    } else {
      const filter = selectedCategories.filter((a) => a !== id);
      setSelectedCategories(filter);
    }
  };

  const onSelectedCard = (data: WorkoutType): void => {
    dispatch(selectedWorkout(data));

    history.push(`/workout/detail/${data.id}`);
  };

  return (
    <Container>
      <Header />
      <Content>
        <TopBar
          startDate={startDate}
          onChageDate={onChageDate}
          categories={categories}
          onChangeCategory={onChangeCategory}
        />
        <>
          {!loading ? (
            <CardList data={workouts} onSelectedCard={onSelectedCard} />
          ) : (
            <Loading>Loading...</Loading>
          )}
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
