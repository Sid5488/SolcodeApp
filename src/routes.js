import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { AsyncStorage } from 'react-native';

import SignIn from '../src/pages/SignIn';
import Login from '../src/pages/Login';
import Main from '../src/pages/Main';

const AppStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();

async function loggedUser() {
    const token = await AsyncStorage.getItem('@SolcodeApp:token');
    
    if(!token)
        return false
    return true
}

const Routes = () => {
    return (
        <NavigationContainer>
            {loggedUser ? (
                <AppStack.Navigator
                headerMode="nonde"
                    screenOptions={{
                        cardStyle: {
                            backgroundColor: '#f0f0f5'
                        }
                    }}
                >
                    <AppStack.Screen 
                        name="SingIn"
                        component={ SignIn }
                    />
                    <AppStack.Screen
                        name="Login"
                        component={ Login }
                    />
                    <AppStack.Screen
                        name="Routes"
                        component={ Routes }
                    />
                </AppStack.Navigator>
            ): (
                <AppDrawer.Navigator>
                    <AppDrawer.Screen name="Main" component={ Main } />
                </AppDrawer.Navigator>
            )}
        </NavigationContainer>
    );
};


export default Routes;
