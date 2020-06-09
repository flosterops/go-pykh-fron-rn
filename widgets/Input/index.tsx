import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TextInput } from 'react-native';
import { InputTypes } from '../../models/WidgetModels';

interface IInputProps {
    onChange: (value: string) => any;
    value: string;
    id?: string;
    style?: any;
    placeholder?: string;
    customStyles?: any;
    type?: InputTypes;
}

const Input: React.FC<IInputProps> = ({
    onChange,
    id,
    style,
    value,
    placeholder,
    type = InputTypes.default,
}): React.ReactElement => {
    const inputStyles = [styles.input, style];
    const isPasswordType = type === InputTypes.pass;

    return (
        <TextInput
            style={inputStyles}
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            secureTextEntry={isPasswordType}
        />
    );
};

const styles = EStyleSheet.create({
    input: {
        width: '100%',
        height: 40,
        color: '$black',
        backgroundColor: '$white',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

export { Input };
