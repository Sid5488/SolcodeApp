import React from 'react';
import { NavigationContainer, Link } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {
    DrawerItem,
    createDrawerNavigator,
    DrawerContentScrollView
} from '@react-navigation/drawer';

import SignIn from '../src/pages/SignIn';
import Login from '../src/pages/Login';
import Main from '../src/pages/Main';
import { Linking } from 'react-native';

const AppDrawer = createDrawerNavigator();
const navigation = useNavigation();

const Screens = ({ navigation }) => {
    return (
        <AppDrawer.Navigator
            initialRouteName="Main"
            screenOptions={{
                headerTransparent: true,
                headerTitle: null,
            }}
        >
            <AppDrawer.Screen options={{ title: 'Noticações' }} name="Main" component={ Main } />
        </AppDrawer.Navigator>
    );
}

const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView { ...props } >
            <DrawerItem
                label="Notifications"
                onPress={ () => props.navigation.navigate }
            />
        </DrawerContentScrollView>
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
                        }
                    }}
                >
                    <AppDrawer.Screen options={{ swipeEnabled: false }} name="Login" component={ Login } />
                    <AppDrawer.Screen options={{ swipeEnabled: false }} name="SignIn" component={ SignIn } />
                </AppDrawer.Navigator>
            ):(
                <AppDrawer.Navigator 
                    initialRouteName="Main"
                >
                    <AppDrawer.Screen name="Screens" component={ Screens } />
                </AppDrawer.Navigator>
            )}
        </NavigationContainer>
    );
};



export default Routes;
