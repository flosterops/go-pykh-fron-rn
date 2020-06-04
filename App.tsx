import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { buildPrimaryColors, skin } from './styles/colors';
import { CustomButton } from './ui/Button';
import { ButtonSizes } from './styles/sizes';
import { buildLayoutStyles } from './styles/layout';
import { Layout } from './ui/Layout';
import { AlignItemTypes, BackgroundTypes, ColorTypes, FontSizeTypes, JustifyContentTypes } from './models/UIModels';
import { Title } from './ui/Title';

buildPrimaryColors();
buildLayoutStyles();

export default function App() {
    const viewStyles = [];
    return (
        <Provider store={store}>
            <Layout ai={AlignItemTypes.center} bg={BackgroundTypes.white} jc={JustifyContentTypes.flexEnd}>
                <Title fontSize={FontSizeTypes.s} color={ColorTypes.black}>
                    some text
                </Title>
                <Title fontSize={FontSizeTypes.l} color={ColorTypes.skin}>
                    some text
                </Title>
                <Title fontSize={FontSizeTypes.xxl} color={ColorTypes.lightGrey}>
                    some text
                </Title>
            </Layout>
            <CustomButton onPress={(i) => i} text="Custom button" size={ButtonSizes.s} color={skin} />
        </Provider>
    );
}

// const styles = StyleSheet.create({});
