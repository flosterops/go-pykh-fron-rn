import React from 'react';
import { Input } from '../Input';
import { CustomButton, Layout } from '../../ui';

interface IInputWithButtonProps {
    onSubmit?: (...args: any) => any;
    value: string;
    onChange: (...args: any) => any;
    buttonText: string;
    buttonColor?: string;
}

const InputWithButton: React.FC<IInputWithButtonProps> = ({
    onSubmit = (i) => i,
    buttonText = '',
    value,
    onChange,
    buttonColor = '',
}) => {
    return (
        <Layout>
            <Input onChange={onChange} value={value} />
            <CustomButton onPress={onSubmit} text={buttonText} color={buttonColor} />
        </Layout>
    );
};

export { InputWithButton };
