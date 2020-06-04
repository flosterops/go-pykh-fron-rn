import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { buildPrimaryColors, skin } from './styles/colors';
import { CustomButton } from './ui/Button';
import { ButtonSizes } from './styles/sizes';
import { buildLayoutStyles } from './styles/layout';
import { Layout } from './ui/Layout';
import { AlignItemTypes, DirectionTypes, JustifyContentTypes } from './models/UIModels';

buildPrimaryColors();
buildLayoutStyles();

export default function App() {
    const viewStyles = [];
    return (
        <Provider store={store}>
            <Layout ai={AlignItemTypes.center} jc={JustifyContentTypes.flexEnd}>
                <Text>some text</Text>
                <Text>some text</Text>
                <Text>some text</Text>
            </Layout>
            <CustomButton onPress={(i) => i} text="Custom button" size={ButtonSizes.s} color={skin} />
        </Provider>
    );
}

// const styles = StyleSheet.create({});
