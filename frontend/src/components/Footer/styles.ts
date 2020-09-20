import styled from 'styled-components';

export const Container = styled.div`
  height: 50px;
  display: flex;
  color: #70767c;
  border-top: 1px solid #f4f8fa;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`;
