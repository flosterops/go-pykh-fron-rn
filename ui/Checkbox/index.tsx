import React from 'react';
import { CheckBox } from 'react-native';

interface ICheckboxProps {
    id: string;
    value?: boolean;
    label?: string;
    onChange?: (...args: any) => any;
}

const Checkbox: React.FC<ICheckboxProps> = ({
    id = '',
    value = false,
    label = '',
    onChange = (i) => i,
}): React.ReactElement => {
    return <CheckBox nativeID={id} value={value} onChange={onChange} />;
};

export { Checkbox };
