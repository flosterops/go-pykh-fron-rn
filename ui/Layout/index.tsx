import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View } from 'react-native';
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
    return <View style={layoutStyles}>{children}</View>;
};

const styles = EStyleSheet.create({
    flex: {
        width: '100%',
        display: 'flex',
        alignItems: 'stretch',
        boxSizing: 'border-box',
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
    bg_darkGrey: {
        backgroundColor: '$darkGrey',
    },
    gb_lightGrey: {
        backgroundColor: '$lightGrey',
    },
    bg_skin: {
        backgroundColor: '$skin',
    },
    widthAuto: {
        width: 'auto',
    },
    fullHeight: {
        height: '100%',
    },
});

export { Layout };
