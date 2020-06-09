import EStyleSheet from 'react-native-extended-stylesheet';

export const fog = '#D9DFDF';
export const orange = '#F97C2C';
export const darkGreen = '#399C7D';
export const lightBlue = '#87B6D8';
export const yellow = '#F8CB43';
export const grass = '#8BCF62';
export const green = '#21C293';
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
        $green: '#21C293',
        $fog: '#D9DFDF',
        $darkGreen: '#399C7D',
        $yellow: '#F8CB43',
        $orange: '#F97C2C',
        $lightBlue: '#87B6D8',
        $grass: '#8BCF62',
    });
