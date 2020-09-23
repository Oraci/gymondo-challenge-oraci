import styled from 'styled-components';

export const ContainerLabel = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  white-space: normal;
  min-height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 20px;
  flex-direction: row;

  &:active {
    box-shadow: 0 0px 0px 0px #fff3d1;
    transform: translateY(0px);
  }

  input[type='checkbox']:checked ~ #item {
    svg rect {
      fill: #ff7f66;
      stroke: #ff7f66;
    }

    svg path {
      fill: white;
      stroke: white;
    }
  }
`;

export const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const ItemContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  box-sizing: boder-box;
  padding: 0 20px;
  flex-direction: column;
  overflow: hidden;
`;

export const ItemCheck = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease 0.15s;

  background: #f2f2f2;
  svg rect {
    fill: #f2f2f2;
    stroke: #4f4f4f;
  }

  svg path {
    fill: #f2f2f2;
    stroke: #f2f2f2;
  }
`;

export const Text = styled.span`
  margin-left: 10px;
  padding: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  flex: 1;
  color: #77787b;
`;
