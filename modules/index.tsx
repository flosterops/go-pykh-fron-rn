import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from './Main';
import routes from '../routes/index.json';
import { SignIn } from './SignIn';
import {SignUp} from "./SignUp";

const getRenderingComponent = (component: string): any => {
    switch (component) {
        case 'Main':
            return <Main />;
        case 'SignIn':
            return <SignIn />;
        default:
            return <Text>'No such component'</Text>;
    }
};

const PageBuilder = () => {
    return (
        <Main />

        // <NavigationContainer>
        //     <Stack.Navigator>
        //         {routes.map(({ id, name, component }) => (
        //             <Stack.Screen name={name} key={id}>
        //                 {() => {
        //                     return getRenderingComponent(component);
        //                 }}
        //             </Stack.Screen>
        //         ))}
        //     </Stack.Navigator>
        // </NavigationContainer>
    );
};

export { PageBuilder };
