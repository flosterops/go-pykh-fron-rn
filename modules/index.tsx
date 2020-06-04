import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { flex } from '../styles/layout';

const Main = ({ count }: any) => {
    return (
        <View style={styles.container}>
            <Text>{count}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...flex,
    },
});

export { Main };
