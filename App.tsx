import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { buildPrimaryColors } from './styles/colors';
import { buildLayoutStyles } from './styles/layout';
import { PageBuilder } from './modules';

buildPrimaryColors();
buildLayoutStyles();

export default function App() {
    const viewStyles = [];
    return (
        <Provider store={store}>
            <PageBuilder />
        </Provider>
    );
}

// const styles = StyleSheet.create({});
