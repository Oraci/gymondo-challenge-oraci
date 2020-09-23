import React, { useEffect, useState, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {
  loadWorkoutsRequest,
  selectedWorkout,
  selectedFilterDate,
  selectedFilterCategories,
} from '../../store/ducks/workouts/actions';

import { loadCategoriesRequest } from '../../store/ducks/categories/actions';

import { ApplicationState } from '../../store';

import Header from '../../components/Header';
import TopBar from '../../components/TopBar';
import Pagination from '../../components/Pagination';
import CardList from '../../components/CardList';

import { Container, Content, Loading, NoResults } from './styles';
import { Workout as WorkoutType } from '../../store/ducks/workouts/types';

function Workout(): ReactElement {
  const {
    workouts,
    totalPages,
    currentPage,
    totalItems,
    loading,
    filterDate,
    filterCategories,
  } = useSelector((state: ApplicationState) => state.workouts);

  const { categories } = useSelector(
    (state: ApplicationState) => state.categories
  );

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();

    dispatch(loadCategoriesRequest());

    return function cleanup() {
      abortController.abort();
    };
  }, [dispatch]);

  useEffect(() => {
    const abortController = new AbortController();

    dispatch(
      loadWorkoutsRequest({
        page: currentPage,
        startDate: filterDate,
        categories: filterCategories,
      })
    );

    return function cleanup() {
      abortController.abort();
    };
  }, [currentPage, dispatch, filterCategories, filterDate]);

  const onPageChange = (page: number): void => {
    dispatch(
      loadWorkoutsRequest({
        page,
        startDate: filterDate,
        categories: filterCategories,
      })
    );
  };

  const onChageDate = (date: Date | Date[]): void => {
    dispatch(selectedFilterDate(date));
  };

  const onChangeCategory = (
    ev: React.ChangeEvent<HTMLInputElement>,
    id: number
  ): void => {
    if (ev.target.checked) {
      dispatch(selectedFilterCategories([...filterCategories, id]));
    } else {
      const filter = filterCategories.filter((a) => a !== id);
      dispatch(selectedFilterCategories(filter));
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
          startDate={filterDate}
          onChageDate={onChageDate}
          categories={categories}
          onChangeCategory={onChangeCategory}
        />
        <>
          {!loading ? (
            workouts.length > 0 ? (
              <CardList data={workouts} onSelectedCard={onSelectedCard} />
            ) : (
              <NoResults>No results</NoResults>
            )
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
