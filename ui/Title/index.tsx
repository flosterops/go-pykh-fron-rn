import React from 'react';
import { Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { ColorTypes, FontSizeTypes, WeightTypes } from '../../models/UIModels';

interface ITitleProps {
    children: string;
    color?: ColorTypes;
    fontSize?: FontSizeTypes;
    underline?: boolean;
    nowrap?: boolean;
    weight?: WeightTypes;
    customStyles?: any;
}

const Title: React.FC<ITitleProps> = ({
    children,
    color = ColorTypes.default,
    fontSize = FontSizeTypes.default,
    weight = WeightTypes.default,
    underline = false,
    nowrap = false,
    customStyles,
}) => {
    const titleStyles = [
        styles.description,
        styles[color],
        styles[fontSize],
        styles[weight],
        underline && styles.underline,
        nowrap && styles.nowrap,
        customStyles,
    ];
    return <Text style={titleStyles}>{children}</Text>;
};

const styles = EStyleSheet.create({
    description: {},
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
    color_fog: {
        color: '$fog',
    },
    color_orange: {
        color: '$orange',
    },
    color_darkGreen: {
        color: '$darkGreen',
    },
    color_lightBlue: {
        color: '$lightBlue',
    },
    color_yellow: {
        color: '$yellow',
    },
    color_grass: {
        color: '$grass',
    },
    color_green: {
        color: '$green',
    },
    underline: {
        textDecorationLine: 'underline',
    },
    weight_300: {
        fontWeight: '300',
    },
    weight_500: {
        fontWeight: '500',
    },
    weight_700: {
        fontWeight: '700',
    },
    weight_900: {
        fontWeight: '900',
    },
    nowrap: {},
});

export { Title };
