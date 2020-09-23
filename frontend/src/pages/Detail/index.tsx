import React, { ReactElement } from 'react';
import {
  MdKeyboardBackspace,
  MdDateRange,
  MdViewHeadline,
} from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import imageDetail from '../../assets/workout_detail.jpg';

import { ApplicationState } from '../../store';

import {
  Container,
  Content,
  Header,
  BackToButton,
  BackTo,
  TitleHeader,
  Info,
  Information,
  Image,
} from './styles';

function Detail(): ReactElement {
  const { selectedWorkout } = useSelector(
    (state: ApplicationState) => state.workouts
  );

  const { name, startDate, description, categoriesNames } = selectedWorkout;

  const history = useHistory();

  const onClickBack = () => {
    history.push('/');
  };

  return (
    <Container>
      <Content>
        <Header>
          <BackToButton>
            <BackTo onClick={onClickBack}>
              <MdKeyboardBackspace size={24} style={{ marginRight: 6 }} />
              <p>Back</p>
            </BackTo>
          </BackToButton>
          <TitleHeader>
            <h1>{name}</h1>
          </TitleHeader>
        </Header>
        <Information>
          <Info>
            <MdDateRange size={24} style={{ marginRight: 6 }} />
            <div>{`Start date: ${startDate}`}</div>
          </Info>
          <Info>
            <MdViewHeadline size={24} style={{ marginRight: 6 }} />
            <div>{`Categories: ${categoriesNames}`}</div>
          </Info>
          <Info>{description}</Info>
        </Information>
      </Content>
      <Image>
        <img src={imageDetail} alt="Workout woman" />
      </Image>
    </Container>
  );
}

export default Detail;
