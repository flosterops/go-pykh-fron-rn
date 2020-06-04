import EStyleSheet from 'react-native-extended-stylesheet';

export const buildLayoutStyles = () =>
    EStyleSheet.build({
        $container: {
            display: 'flex',
            width: '100%',
        },
    });
