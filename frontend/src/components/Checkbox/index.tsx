import React, { ReactElement } from 'react';
import { ReactComponent as Icon } from '../../assets/icons/ic-checkbox.svg';

import { HiddenCheckbox, ContainerLabel, ItemCheck, Text } from './styles';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

function Checkbox(props: CheckboxProps): ReactElement {
  const { label, onChange, checked } = props;

  return (
    <ContainerLabel id="container">
      <HiddenCheckbox type="checkbox" onChange={onChange} checked={checked} />
      <ItemCheck id="item">
        <Icon />
      </ItemCheck>
      <Text>{label}</Text>
    </ContainerLabel>
  );
}

export default Checkbox;
