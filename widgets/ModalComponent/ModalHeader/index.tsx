import React from 'react';
import { Layout, Title } from '../../../ui';
import { BackgroundTypes, ColorTypes, FontSizeTypes, JustifyContentTypes } from '../../../models/UIModels';
import EStyleSheet from 'react-native-extended-stylesheet';

interface IModalHeaderProps {
    title: string;
    onClose: (...args: any) => any;
}

const ModalHeader: React.FC<IModalHeaderProps> = ({ title, onClose }): React.ReactElement => {
    return (
        <Layout customStyle={styles.modal__header} jc={JustifyContentTypes.spaceBetween} bg={BackgroundTypes.green}>
            <Title fontSize={FontSizeTypes.l} color={ColorTypes.white}>
                {title}
            </Title>
            <Layout onPress={onClose} widthAuto>
                <Title fontSize={FontSizeTypes.l} color={ColorTypes.white}>
                    X
                </Title>
            </Layout>
        </Layout>
    );
};

const styles = EStyleSheet.create({
    modal__header: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderColor: '$white',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    modal__header_title: {},
    modal__header_close: {},
});

export { ModalHeader };
