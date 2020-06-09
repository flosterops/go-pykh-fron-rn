import React, { useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Layout, Title } from '../../ui';
import { BackgroundTypes, DirectionTypes, FontSizeTypes } from '../../models/UIModels';
import { getInitialFormFields, ISignUpFromFieldsModel } from './helpers';
import config from './config.json';
import { Input } from '../../widgets/Input';

const SignUp = () => {
    const [formFields, setFormFields] = useState<ISignUpFromFieldsModel>(getInitialFormFields());

    const onFormFieldChange = (value: string, field: string): void => {
        setFormFields({ ...formFields, [field]: value });
    };

    return (
        <Layout customStyle={styles.container} fullHeight bg={BackgroundTypes.green} direction={DirectionTypes.column}>
            {config.map(({ id, text, field }) => (
                <Layout customStyle={styles.form__item} key={id} direction={DirectionTypes.column}>
                    <Title fontSize={FontSizeTypes.m}>{text}</Title>
                    <Input onChange={(value) => onFormFieldChange(value, field)} value={formFields[field]} />
                </Layout>
            ))}
        </Layout>
    );
};

const styles = EStyleSheet.create({
    container: {
        padding: 10,
    },
    form__item: {
        borderRadius: 5,
        marginBottom: 10,
    },
});

export { SignUp };
