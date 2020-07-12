import React, { useState } from 'react';
import { View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  Alert
} from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Input,
  Button,
  ArrowText,
  TextEntrar,
  ContainerText,
  TextLogin,
  ContainerVoltar
} from './styles';

import api from '../../services/api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErr] = useState({});

  const navigation = useNavigation();

  async function logar() {
    await api.post('/usuarios/login', {
      email: email,
      senha: senha
    }).then(async res => {
      console.log(res.data);

      const { usuario, token } = res.data;

      await AsyncStorage.multiSet([
        ['@SolcodeApp:token', token],
        ['@SolcodeApp:usuario', JSON.stringify(usuario)],
      ]);

      Alert.alert('Login efeituado com sucesso');

      handleNavigationToMain(false);
    }).catch(err => {
      console.log(err);

      setErr({ errorMessage: err })
    });
  }

  function handleNavigationBack() {
    navigation.goBack();
  }

  function handleNavigationToMain() {
    navigation.navigate('Login');
  }

  return (
    <>
      <ContainerVoltar>
        <TouchableOpacity 
          onPress={handleNavigationBack}
          activeOpacity={ 0.7 }
          style={{
            flexDirection: 'row'
          }}
        >
          <Icon name="arrow-left" size={ 24 } color="white" />
          <Text 
            style={{ color: 'white', marginTop: 2, marginLeft: 2 }}
          >
            Voltar
          </Text>
        </TouchableOpacity>
      </ContainerVoltar>
      <Container>
        <ContainerText>
          <TextLogin>
            Bem-vindo de volta!
          </TextLogin>
        </ContainerText>
        <Input 
          placeholder="Digite seu e-mail"
          onChangeText={ setEmail } 
          autoCapitalize="none"
        />
        <Input 
          placeholder="Digite sua senha"
          onChangeText={ setSenha } 
          secureTextEntry={ true }
          autoCapitalize="none"
        />
        <Button onPress={ logar } >
          <View>
              <ArrowText>
                  <Icon 
                    name="arrow-right"
                    color="dodgerblue"
                    size={ 24 }
                  />
              </ArrowText>
          </View>
          <TextEntrar>Login</TextEntrar>
        </Button>
      </Container>
    </>
  );
}

export default Login;