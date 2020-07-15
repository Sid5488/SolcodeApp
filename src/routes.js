import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignIn from '../src/pages/SignIn';
import Login from '../src/pages/Login';
import Main from '../src/pages/Main';
import Chamados from '../src/pages/Chamados';
import ListaChamados from '../src/pages/ListaChamados';

const AppDrawer = createDrawerNavigator();
const AppStack = createStackNavigator();
const TabStack = createBottomTabNavigator();

const TabRoutes = () => {
    return (
        <TabStack.Navigator>
            <TabStack.Screen name="ListaChamados" component={ ListaChamados } />
        </TabStack.Navigator>
    );
}

const DrawerMenu = () => {
    return (
        <AppDrawer.Navigator>
            <AppDrawer.Screen 
                options={{
                    title: 'Notificações',
                }} 
                name="Main" 
                component={ Main } 
            />
            <AppDrawer.Screen 
                options={{
                    title: 'Chamados'
                }} 
                name="Chamados" 
                component={ Chamados } 
            />
            <AppDrawer.Screen
                options={{
                    title: 'Tab Routes',
                }} 
                name="TabRoutes"
                component={ TabRoutes }
            />
        </AppDrawer.Navigator>
    );
}

const Routes = ({ loggedIn }) => {    
    return (
        <NavigationContainer>
            {!loggedIn ? (
                <AppDrawer.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        cardStyle: {
                            backgroundColor: '#f0f0f5'
                        },
                        title: 'My home',
                    }}
                >
                    <AppDrawer.Screen 
                        options={{
                            swipeEnabled: false
                        }} 
                        name="Login" 
                        component={ Login }
                    />
                    <AppDrawer.Screen 
                        options={{
                            swipeEnabled: false
                        }} 
                        name="SignIn" 
                        component={ SignIn }
                    />
                </AppDrawer.Navigator>
            ):(
                <AppDrawer.Navigator 
                    initialRouteName="Main"
                >
                    <AppDrawer.Screen 
                        options={{
                            title: 'Notificações',
                        }} 
                        name="Main" 
                        component={ Main } 
                    />
                    <AppDrawer.Screen 
                        options={{
                            title: 'Chamados'
                        }} 
                        name="Chamados" 
                        component={ Chamados } 
                    />
                    <AppDrawer.Screen
                        options={{
                            title: 'Tab Routes',
                        }} 
                        name="TabRoutes"
                        component={ TabRoutes }
                    />
                </AppDrawer.Navigator>
            )} 
        </NavigationContainer>
    );
};

export default Routes;
