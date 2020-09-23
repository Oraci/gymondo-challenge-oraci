import React, { ReactElement } from 'react';
import DatePicker from 'react-date-picker';
import { Category } from '../../store/ducks/categories/types';

import Checkbox from '../Checkbox';

import { Container, Content, Date, Categories, Label } from './styles';

interface TopBarProps {
  startDate: Date | Date[];
  onChageDate: (date: Date | Date[]) => void;
  categories: Category[];
  onChangeCategory: (
    ev: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => void;
}

function TopBar(props: TopBarProps): ReactElement {
  const { startDate, onChageDate, categories, onChangeCategory } = props;

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
          {categories?.map((category) => (
            <div key={category.id}>
              <Checkbox
                label={category.name}
                onChange={(ev: React.ChangeEvent<HTMLInputElement>) =>
                  onChangeCategory(ev, category.id)
                }
              />
            </div>
          ))}
        </Categories>
      </Content>
    </Container>
  );
}

export default TopBar;
