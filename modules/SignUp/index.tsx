import React, { useState } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { CustomButton, Layout, Title } from '../../ui';
import {
    AlignItemTypes,
    BackgroundTypes,
    ColorTypes,
    DirectionTypes,
    FontSizeTypes,
    JustifyContentTypes,
} from '../../models/UIModels';
import { getInitialFormFields, ISignUpFromFieldsModel } from './helpers';
import config from './config.json';
import { Input } from '../../widgets/Input';
import { white } from '../../styles/colors';

const SignUp = () => {
    const [formFields, setFormFields] = useState<ISignUpFromFieldsModel>(getInitialFormFields());

    const onFormFieldChange = (value: string, field: string): void => {
        setFormFields({ ...formFields, [field]: value });
    };

    const onSignUp = (): void => {
        setFormFields(getInitialFormFields());
    };

    return (
        <Layout
            jc={JustifyContentTypes.center}
            customStyle={styles.container}
            fullHeight
            bg={BackgroundTypes.green}
            direction={DirectionTypes.column}
            ai={AlignItemTypes.center}
        >
            <Layout direction={DirectionTypes.column}>
                {config.map(({ id, text, field, type }) => (
                    <Layout customStyle={styles.form__item} key={id} direction={DirectionTypes.column}>
                        <Title
                            customStyles={styles.form__item_title}
                            color={ColorTypes.white}
                            fontSize={FontSizeTypes.m}
                        >
                            {text}
                        </Title>
                        <Input
                            type={type}
                            onChange={(value) => onFormFieldChange(value, field)}
                            value={formFields[field]}
                        />
                    </Layout>
                ))}
            </Layout>

            <Layout jc={JustifyContentTypes.center} ai={AlignItemTypes.center}>
                <CustomButton color={white} onPress={onSignUp} text="Sign In" />
            </Layout>
        </Layout>
    );
};

const styles = EStyleSheet.create({
    container: {
        padding: 10,
        paddingVertical: 25,
    },
    form__item: {
        borderRadius: 5,
        marginBottom: 15,
    },
    form__item_title: {
        paddingBottom: 5,
        marginLeft: 5,
    },
});

export { SignUp };
