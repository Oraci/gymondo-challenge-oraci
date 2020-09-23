import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;

  margin: 0 10px 20px;
  width: 130px;
  height: 80px;
  border: 1px solid #ff7f66;
  border-radius: 10px;
  padding: 10px;
  transition: all 300ms;
  cursor: pointer;

  &:hover {
    background-color: #ff7f66;
    box-shadow: 0 8px 10px 0px rgb(255, 127, 102, 0.35);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    height: 5px;
    background: #ff7f66;
    border-radius: 0 0 10px 10px;
  }
`;

export const Content = styled.div`
  flex-direction: column;
  display: flex;
  padding: 5px;
`;

export const Header = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const Footer = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;
