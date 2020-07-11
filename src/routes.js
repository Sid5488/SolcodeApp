import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../src/pages/SignIn';
import Login from '../src/pages/Login';
import Main from '../src/pages/Main';

const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle: {
                        backgroundColor: '#f0f0f5'
                    }
                }}
            >
                <AppStack.Screen name="SingIn" component={ SignIn } />
                <AppStack.Screen name="Login" component={ Login } />
                <AppStack.Screen name="Main" component={ Main } />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
