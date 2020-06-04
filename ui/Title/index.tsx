import React from 'react';
import { Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ColorTypes, FontSizeTypes } from '../../models/UIModels';

interface ITitleProps {
    children: string;
    color?: ColorTypes;
    fontSize?: FontSizeTypes;
    underline?: boolean;
    nowrap?: boolean;
}

const Title: React.FC<ITitleProps> = ({
    children,
    color = ColorTypes.default,
    fontSize = FontSizeTypes.default,
    underline = false,
    nowrap = false,
}) => {
    const titleStyles = [
        styles.description,
        styles[color],
        styles[fontSize],
        underline && styles.underline,
        nowrap && styles.nowrap,
    ];
    return <Text style={titleStyles}>{children}</Text>;
};

const styles = EStyleSheet.create({
    description: {
        fontFamily: 'mono',
    },
    font_s: {
        fontSize: 14,
    },
    font_m: {
        fontSize: 16,
    },
    font_l: {
        fontSize: 18,
    },
    font_xl: {
        fontSize: 22,
    },
    font_xxl: {
        fontSize: 28,
    },
    color_black: {
        color: '$black',
    },
    color_white: {
        color: '$white',
    },
    color_grey: {
        color: '$grey',
    },
    color_lightGrey: {
        color: '$lightGrey',
    },
    color_darkGrey: {
        color: '$darkGrey',
    },
    color_skin: {
        color: '$skin',
    },
    underline: {
        textDecoration: 'underline',
    },
    nowrap: {},
});

export { Title };
