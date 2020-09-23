import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export const Container = styled.div`
  height: 70px;
  background: #ffffff;
  display: flex;
`;

export const Content = styled.div`
  background: #ffffff;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  color: #f07580;
  font-weight: bold;
  font-size: 18px;
  line-height: 24px;
`;

export const Logo = styled(Link)`
  width: 100px;
  margin: 0 15px 0 15px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center;
`;
