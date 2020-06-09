import React, { useState } from 'react';
import { CustomButton, Layout, Title } from '../../ui';
import { getInitialFormFields, IFormFieldModel } from './helpers';
import { Input } from '../../widgets/Input';
import config from './config.json';
import {
    AlignItemTypes,
    BackgroundTypes,
    ColorTypes,
    DirectionTypes,
    FontSizeTypes,
    JustifyContentTypes,
    WeightTypes,
} from '../../models/UIModels';
import EStyleSheet from 'react-native-extended-stylesheet';
import { white } from '../../styles/colors';

const SignIn = ({}) => {
    const [formField, setFormFields] = useState<IFormFieldModel>(getInitialFormFields());

    const onChangeFormField = (value: string, field: string) => {
        setFormFields({ ...formField, [field]: value });
    };

    const onSignIn = () => setFormFields(getInitialFormFields());

    return (
        <Layout
            jc={JustifyContentTypes.center}
            fullHeight
            customStyle={styles.container}
            bg={BackgroundTypes.green}
            direction={DirectionTypes.column}
        >
            <Layout direction={DirectionTypes.column}>
                {config.map(({ id, field, text, type }: any) => (
                    <Layout
                        customStyle={styles.form__item}
                        bg={BackgroundTypes.green}
                        direction={DirectionTypes.column}
                        key={id}
                    >
                        <Title
                            customStyles={styles.form__item_title}
                            color={ColorTypes.white}
                            weight={WeightTypes.w700}
                            fontSize={FontSizeTypes.m}
                        >
                            {text}
                        </Title>
                        <Input
                            onChange={(value) => onChangeFormField(value, field)}
                            value={formField[field]}
                            type={type}
                        />
                    </Layout>
                ))}
            </Layout>
            <Layout jc={JustifyContentTypes.center} ai={AlignItemTypes.center}>
                <CustomButton color={white} onPress={onSignIn} text="Sign In" />
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

export { SignIn };
