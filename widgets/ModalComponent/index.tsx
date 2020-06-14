import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { CustomButton, Layout } from '../../ui';
import { DirectionTypes, JustifyContentTypes } from '../../models/UIModels';
import { black } from '../../styles/colors';
import { ModalHeader } from './ModalHeader';

interface IModalComponentProps {
    customStyles?: any;
    children?: React.ReactElement;
    onClose: (...args: any) => any;
    onSubmit?: (...args: any) => any;
    title: string;
    buttonText?: string;
}

const ModalComponent: React.FC<IModalComponentProps> = ({
    customStyles,
    onClose,
    onSubmit = (i) => i,
    title,
    buttonText = '',
    children,
}) => {
    return (
        <Layout customStyle={styles.modal} direction={DirectionTypes.column} jc={JustifyContentTypes.spaceBetween}>
            <Layout direction={DirectionTypes.column}>
                <ModalHeader title={title} onClose={onClose} />
                <Layout customStyle={styles.modal__gaps}>{children}</Layout>
            </Layout>
            {onSubmit && (
                <Layout customStyle={styles.modal__gaps} jc={JustifyContentTypes.flexEnd}>
                    <CustomButton color={black} onPress={onSubmit} text={buttonText} />
                </Layout>
            )}
        </Layout>
    );
};

const styles = EStyleSheet.create({
    modal: {
        position: 'absolute',
        height: '80%',
        width: '90%',
        backgroundColor: '$white',
        zIndex: 10,
    },
    modal__gaps: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
});

export { ModalComponent };
