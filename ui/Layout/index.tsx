import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View } from 'react-native';
import { AlignItemTypes, DirectionTypes, JustifyContentTypes } from '../../models/UIModels';

export interface ILayoutProps {
    children: any;
    jc?: JustifyContentTypes;
    ai?: AlignItemTypes;
    direction?: DirectionTypes;
}

const Layout: React.FC<ILayoutProps> = ({
    children,
    jc = JustifyContentTypes.default,
    ai = AlignItemTypes.default,
    direction = DirectionTypes.default,
}) => {
    const layoutStyles = [styles.flex, styles[jc], styles[ai], styles[direction]];
    console.log(direction);
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
});

export { Layout };
