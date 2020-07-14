import React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';

import { store, persistor } from './src/store';

import Index from './src';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Ubuntu_700Bold
  })

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} >
        <StatusBar
          barStyle="light-content" 
          backgroundColor="dodgerblue"
        />
        <Index />
      </PersistGate>
    </Provider>
  );
}
