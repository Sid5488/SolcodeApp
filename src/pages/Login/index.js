import React, { useState } from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import { useDispatch } from 'react-redux';
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
  ContainerSignIn,
  SignInText
} from './styles';

import { LoginRequest } from '../../store/modules/auth/actions';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErr] = useState({});

  const dispatch = useDispatch();

  const navigation = useNavigation();

  function logar() {
    // Alert.alert('Entrou!!');
    dispatch(LoginRequest(email, senha));
  }

  function handleNavigateToSignIn() {
    navigation.navigate('SignIn');
  }

  return (
    <> 
      <ContainerText>
        <Text style={{ fontSize: 40, color: 'white' }}>Solcode</Text>
        <TextLogin>
          Faça seu login
        </TextLogin>
      </ContainerText>
      <Container>
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
        <ContainerSignIn>
          <TouchableOpacity
              onPress={handleNavigateToSignIn}
              activeOpacity={0.7}
          >
              <SignInText>
                Ainda não tem uma conta? 
              </SignInText>
          </TouchableOpacity>
        </ContainerSignIn>
      </Container>
    </>
  );
}

export default Login;