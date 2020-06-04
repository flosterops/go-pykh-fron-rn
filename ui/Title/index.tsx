import React from 'react';
import { Text } from 'react-native';

interface ITitleProps {
    children: string;
}

const Title: React.FC<ITitleProps> = ({ children }) => {
    return <Text>children</Text>;
};
