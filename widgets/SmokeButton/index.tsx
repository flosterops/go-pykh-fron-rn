import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Layout, Title } from '../../ui';
import {
    AlignItemTypes,
    BackgroundTypes,
    ColorTypes,
    FontSizeTypes,
    JustifyContentTypes,
    WeightTypes,
} from '../../models/UIModels';

interface ISmokeButtonProps {
    onClick: (...args: any) => any;
}

const SmokeButton: React.FC<ISmokeButtonProps> = ({ onClick }) => {


    return (
        <Layout
            onPress={() => console.log('123123')}
            bg={BackgroundTypes.yellow}
            ai={AlignItemTypes.center}
            jc={JustifyContentTypes.center}
            customStyle={styles.button}
        >
            <Title weight={WeightTypes.w900} uppercase color={ColorTypes.white} fontSize={FontSizeTypes.xxl}>
                go smoke
            </Title>
        </Layout>
    );
};

const styles = EStyleSheet.create({
    button: {
        borderRadius: 200,
        width: 200,
        height: 200,
    },
});

export { SmokeButton };
