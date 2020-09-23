import styled from 'styled-components';

interface ButtonProps {
  disabled: boolean;
}

export const Container = styled.div`
  display: flex;
  height: 50px;
  background: #ffb6bd;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const Date = styled.div`
  display: flex;
  margin-right: 40px;
`;

export const Categories = styled.div`
  display: flex;
`;

export const Label = styled.div`
  margin-right: 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  flex: 1;
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
