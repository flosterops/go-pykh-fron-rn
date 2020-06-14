import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { TouchableOpacity, View } from 'react-native';
import { AlignItemTypes, BackgroundTypes, DirectionTypes, JustifyContentTypes } from '../../models/UIModels';

export interface ILayoutProps {
    children: any;
    jc?: JustifyContentTypes;
    ai?: AlignItemTypes;
    direction?: DirectionTypes;
    bg?: BackgroundTypes;
    customStyle?: any;
    widthAuto?: boolean;
    fullHeight?: boolean;
    [key: string]: any;
}

const Layout: React.FC<ILayoutProps> = ({
    children,
    jc = JustifyContentTypes.default,
    ai = AlignItemTypes.default,
    direction = DirectionTypes.default,
    bg = BackgroundTypes.default,
    widthAuto = false,
    fullHeight = false,
    customStyle = null,
    ...props
}) => {
    const layoutStyles = [
        styles.flex,
        styles[jc],
        styles[ai],
        styles[direction],
        styles[bg],
        widthAuto && styles.widthAuto,
        fullHeight && styles.fullHeight,
        customStyle,
    ];

    const { onPress } = props;

    if (!onPress) {
        return (
            <View {...props} style={layoutStyles}>
                {children}
            </View>
        );
    }

    return (
        <TouchableOpacity {...props} onPress={onPress} style={layoutStyles}>
            {children}
        </TouchableOpacity>
    );
};

const styles = EStyleSheet.create({
    flex: {
        width: '100%',
        display: 'flex',
        alignItems: 'stretch',
    },
    jc_flexStart: {
        justifyContent: 'flex-start',
    },
    jc_flexEnd: {
        justifyContent: 'flex-end',
    },
    jc_spaceBetween: {
        justifyContent: 'space-between',
    },
    jc_spaceAround: {
        justifyContent: 'space-around',
    },
    jc_center: {
        justifyContent: 'center',
    },
    ai_center: {
        alignItems: 'center',
    },
    ai_flexStart: {
        alignItems: 'flex-start',
    },
    ai_flexEnd: {
        alignItems: 'flex-end',
    },
    ai_stretch: {
        alignItems: 'stretch',
    },
    dr_row: {
        flexDirection: 'row',
    },
    dr_column: {
        flexDirection: 'column',
    },
    bg_white: {
        backgroundColor: '$white',
    },
    bg_black: {
        backgroundColor: '$black',
    },
    bg_grey: {
        backgroundColor: '$grey',
    },
    bg_transparent: {
        backgroundColor: 'transparent',
    },
    bg_darkGrey: {
        backgroundColor: '$darkGrey',
    },
    bg_lightGrey: {
        backgroundColor: '$lightGrey',
    },
    bg_skin: {
        backgroundColor: '$skin',
    },
    bg_fog: {
        backgroundColor: '$fog',
    },
    bg_orange: {
        backgroundColor: '$orange',
    },
    bg_darkGreen: {
        backgroundColor: '$darkGreen',
    },
    bg_lightBlue: {
        backgroundColor: '$lightBlue',
    },
    bg_yellow: {
        backgroundColor: '$yellow',
    },
    bg_grass: {
        backgroundColor: '$grass',
    },
    bg_green: {
        backgroundColor: '$green',
    },
    widthAuto: {
        width: 'auto',
    },
    fullHeight: {
        height: '100%',
    },
});

export { Layout };
