import asyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
    const persistedReducer = persistReducer({
        key: 'SolcodeApp',
        storage: asyncStorage,
        whitelist: ['auth']
    }, reducers);

    return persistedReducer;
};

