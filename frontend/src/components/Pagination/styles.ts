import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px 0 10px;
  display: flex;
`;

export const Content = styled.div`
  flex: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  border: none;
  padding: 0 50px;
  white-space: nowrap;
  font-style: normal;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0.01em;
  padding: 0 20px;
  border-radius: 4px;
  outline: none;
  text-align: center;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: 0 10px 0 10px;

  background: rgba(240, 117, 128, 0.85);
`;
