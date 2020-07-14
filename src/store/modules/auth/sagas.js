import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { LoginSuccess } from './actions';

export function* login({ payload }) {
    try {
        const { email, password } = payload;

        const response = yield call(api.post, '/usuarios/login', {
            email: email,
            senha: password
        });

        const { usuario, token } = response.data;
        api.defaults.headers.Authorization = `Barear ${token}`;
        Alert.alert('Login efeituado com sucesso');
        yield put(LoginSuccess(token, usuario));
    } catch(err) {
        console.log(err);
    
        Alert.alert('Sla mano deu ruinm');
    }
}

export function setToken({ payload }) {
    if(!payload) return;
    const { token } = payload.auth;

    if(token) {
        api.defaults.headers.Authorization =  `Barear ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/loginRequest', login)
]);
