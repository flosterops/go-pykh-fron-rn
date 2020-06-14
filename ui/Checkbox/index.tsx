import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Layout } from '../index';
import { AlignItemTypes, JustifyContentTypes } from '../../models/UIModels';

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
    console.log(id, value);
    return (
        <Layout jc={JustifyContentTypes.center} ai={AlignItemTypes.center} customStyle={styles.checkbox}>
            {value && <Layout customStyle={styles.checkbox__checked}>{null}</Layout>}
        </Layout>
    );
};

const styles = EStyleSheet.create({
    checkbox: {
        width: 20,
        height: 20,
        backgroundColor: '$white',
        borderColor: '$green',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    checkbox__checked: {
        width: 10,
        height: 10,
        backgroundColor: '$green',
    },
});

export { Checkbox };
