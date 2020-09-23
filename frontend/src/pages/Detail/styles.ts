import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

export const BackToButton = styled.div`
  padding: 20px 20px 0 0;
  display: flex;
  color: #77787b;
  align-items: center;

  p {
    font-weight: bold;
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.01em;
  }
`;

export const BackTo = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const TitleHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 34px 0 48px 0;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Image = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;
