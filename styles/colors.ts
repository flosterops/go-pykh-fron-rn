import EStyleSheet from 'react-native-extended-stylesheet';

export const white = '#F8F8F7';
export const lightGrey = '#CFCDD7';
export const grey = '#A09DB0';
export const darkGrey = '#89818D';
export const black = '#5B5A62';
export const skin = '#D7CABD';

export const buildPrimaryColors = () =>
    EStyleSheet.build({
        $white: '#F8F8F7',
        $lightGrey: '#CFCDD7',
        $grey: '#A09DB0',
        $darkGrey: '#89818D',
        $black: '#5B5A62',
        $skin: '#D7CABD',
    });
