import React, { ReactElement } from 'react';
import DatePicker from 'react-date-picker';
import { useDispatch } from 'react-redux';
import { Category } from '../../store/ducks/categories/types';

import { selectedFilterCategories } from '../../store/ducks/workouts/actions';

import Checkbox from '../Checkbox';

import { Container, Content, Date, Categories, Label, Button } from './styles';

interface TopBarProps {
  startDate: Date | Date[];
  onChageDate: (date: Date | Date[]) => void;
  categories: Category[];
  filterCategories: number[];
  onChangeCategory: (
    ev: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
}

function TopBar(props: TopBarProps): ReactElement {
  const {
    startDate,
    onChageDate,
    categories,
    onChangeCategory,
    filterCategories,
  } = props;

  const dispatch = useDispatch();

  const onClickHandle = (): void => {
    dispatch(selectedFilterCategories([]));
  };

  return (
    <Container>
      <Content>
        <Date>
          <Label>Start date</Label>
          <DatePicker
            format="MM/yyyy"
            value={startDate}
            onChange={onChageDate}
            maxDetail="year"
            defaultView="year"
          />
        </Date>
        <Categories>
          <Label>Categories</Label>
          {categories?.map((category) => {
            const checked = !!filterCategories?.find(
              (categ) => categ === category.id
            );

            return (
              <div key={category.id}>
                <Checkbox
                  checked={checked}
                  label={category.name}
                  onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                    onChangeCategory(ev, category.id)
                  }
                />
              </div>
            );
          })}
        </Categories>
        <Button onClick={onClickHandle} disabled={!filterCategories.length}>
          Clear categories
        </Button>
      </Content>
    </Container>
  );
}

export default TopBar;
