import React from 'react';
import { Button, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { black } from '../../styles/colors';
import { ButtonSizes } from '../../styles/sizes';

interface IButtonProps {
    onPress: (...args: any) => any;
    text: string;
    size?: ButtonSizes;
    color?: string;
    customStyle?: any;
}

const CustomButton: React.FC<IButtonProps> = ({
    onPress = (i) => i,
    text = '',
    size = ButtonSizes.s,
    color = black,
    customStyle = null,
}) => {
    const buttonStyles = [styles.button, styles[size], customStyle];
    return (
        <View style={buttonStyles}>
            <Button color={color} title={text} onPress={onPress} />
        </View>
    );
};

const styles = EStyleSheet.create({
    s: {
        width: 80,
    },
    m: {
        width: 120,
    },
    l: {
        width: 150,
    },
    xl: {
        width: 180,
    },
    xxl: {
        width: '100%',
        height: 150,
    },
});

export { CustomButton };
