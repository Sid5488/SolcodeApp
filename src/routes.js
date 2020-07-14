import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignIn from '../src/pages/SignIn';
import Login from '../src/pages/Login';
import Main from '../src/pages/Main';

const AppDrawer = createDrawerNavigator();

const Routes = ({ loggedIn }) => {    
    return (
        <NavigationContainer>
            {!loggedIn ? (
                <AppDrawer.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        cardStyle: {
                            backgroundColor: '#f0f0f5'
                        }
                    }}
                >
                    <AppDrawer.Screen options={{ swipeEnabled: false }} name="Login" component={ Login } />
                    <AppDrawer.Screen options={{ swipeEnabled: false }} name="SignIn" component={ SignIn } />
                </AppDrawer.Navigator>
            ):(
                <AppDrawer.Navigator initialRouteName="Main">
                    <AppDrawer.Screen name="Main" component={ Main } />
                </AppDrawer.Navigator>
            )}
        </NavigationContainer>
    );
};



export default Routes;
